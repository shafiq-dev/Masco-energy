param([int]$Port = 3001)
$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$marker = Join-Path $projectRoot '.production-build'
if (!(Test-Path $marker)) { throw 'Run npm run build first.' }
$buildName = (Get-Content -LiteralPath $marker -Raw).Trim()
if ($buildName -notmatch '^\.next-release-\d+$') { throw 'Invalid production build marker.' }
$buildDir = Join-Path $projectRoot $buildName
if (!(Test-Path (Join-Path $buildDir 'BUILD_ID'))) { throw 'Production build missing. Run npm run build first.' }
$listener = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue
if ($listener) { Write-Output "Port $Port is already listening. Open http://localhost:$Port/main"; exit 0 }
$nodePath = (Get-Command node.exe).Source
$nextPath = Join-Path $projectRoot 'node_modules\next\dist\bin\next'
$env:NEXT_DIST_DIR = $buildName
$server = Start-Process -FilePath $nodePath -ArgumentList @(('"' + $nextPath + '"'), 'start', '-H', '127.0.0.1', '-p', "$Port") -WorkingDirectory $projectRoot -WindowStyle Hidden -RedirectStandardOutput (Join-Path $projectRoot 'server-production.log') -RedirectStandardError (Join-Path $projectRoot 'server-production-error.log') -PassThru
for ($attempt = 0; $attempt -lt 40; $attempt++) {
    Start-Sleep -Milliseconds 500
    $server.Refresh()
    if ($server.HasExited) { throw 'Server exited. Inspect server-production-error.log.' }
    if ((Get-Content -LiteralPath (Join-Path $projectRoot 'server-production.log') -Raw -ErrorAction SilentlyContinue) -match 'Ready in') {
        Write-Output "MASCO Energy is running at http://localhost:$Port/main (PID $($server.Id))."
        exit 0
    }
}
throw 'Server did not begin listening. Inspect server-production.log.'
