"use client";

import { useCallback, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Play, Pause, X, Volume2, VolumeX, Maximize, ArrowUpRight } from "lucide-react";

const films = ["/videos/masco-arabic.mp4", "/videos/masco-english.mp4"];
const clock = (seconds: number) => `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;

export default function CompanyFilm() {
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(53.013);
  const [error, setError] = useState("");
  const videos = useRef<(HTMLVideoElement | null)[]>([]);
  const dialog = useRef<HTMLDialogElement | null>(null);
  const selected = useRef(0);
  const seeking = useRef(false);
  const attachDialog = useCallback((node: HTMLDialogElement | null) => {
    dialog.current = node;
    if (node && !node.open) node.showModal();
  }, []);

  function pause() {
    videos.current.forEach(video => video?.pause());
    setPlaying(false);
  }

  async function play() {
    const active = videos.current[selected.current];
    if (!active) return;
    if (active.ended) seek(0);
    try {
      await active.play();
      setPlaying(true);
      const standby = videos.current[1 - selected.current];
      if (standby) {
        standby.muted = true;
        if (standby.readyState > 0) standby.currentTime = Math.min(active.currentTime, Math.max(0, standby.duration - .05));
        void standby.play().catch(() => {});
      }
    } catch { setError("Tap play to start the film."); }
  }

  function seek(value: number) {
    videos.current.forEach(video => {
      if (video && Number.isFinite(video.duration)) video.currentTime = Math.min(value, Math.max(0, video.duration - .05));
    });
    setTime(value);
  }

  function sync(index: number) {
    if (index !== selected.current || seeking.current) return;
    const active = videos.current[index];
    const standby = videos.current[1 - index];
    if (!active) return;
    setTime(active.currentTime);
    if (standby && standby.readyState > 0 && active.currentTime < standby.duration - .2 && Math.abs(standby.currentTime - active.currentTime) > .25) {
      standby.currentTime = active.currentTime;
      if (!active.paused && standby.paused) void standby.play().catch(() => {});
    }
  }

  async function changeLanguage(next: number) {
    if (next === selected.current || seeking.current) return;
    const source = videos.current[selected.current];
    const target = videos.current[next];
    if (!source || !target || target.readyState === 0) return;
    seeking.current = true;
    const wasPlaying = !source.paused;
    const position = Math.min(source.currentTime, Math.max(0, target.duration - .05));
    target.muted = true;
    if (Math.abs(target.currentTime - position) > (wasPlaying ? .15 : .001)) {
      await new Promise<void>(resolve => {
        const done = () => { clearTimeout(timeout); target.removeEventListener("seeked", done); resolve(); };
        const timeout = setTimeout(done, 1500);
        target.addEventListener("seeked", done, { once: true });
        target.currentTime = position;
      });
    }
    if (!dialog.current?.open) { seeking.current = false; return; }
    if (wasPlaying) {
      try { await target.play(); } catch { pause(); }
    } else target.pause();
    source.muted = true;
    target.muted = muted;
    selected.current = next;
    setLanguage(next);
    setTime(target.currentTime);
    setDuration(target.duration);
    seeking.current = false;
  }

  function open() {
    if (!mounted) setMounted(true);
    else dialog.current?.showModal();
  }

  return <>
    <button className="film-bubble" onClick={open} aria-label="Watch MASCO company film">
      <span className="film-bubble-play"><Play size={18} fill="currentColor" /></span>
      <span>Watch our film<small>العربية / English</small></span><ArrowUpRight size={16} />
    </button>
    {mounted && createPortal(<dialog className="film-dialog" aria-labelledby="film-title" ref={attachDialog} onClose={pause} onClick={event => { if (event.target === event.currentTarget) event.currentTarget.close(); }}>
      <div className="film-shell">
        <header className="film-header"><div><span>MASCO ENERGY</span><h2 id="film-title">Progress in motion.</h2></div>
          <div className="film-header-actions"><div className="film-languages" role="group" aria-label="Film language">
            <button lang="ar" aria-pressed={language === 0} onClick={() => void changeLanguage(0)}>العربية</button>
            <button aria-pressed={language === 1} onClick={() => void changeLanguage(1)}>English</button>
          </div><button className="film-icon" aria-label="Close film" onClick={() => dialog.current?.close()}><X size={22} /></button></div>
        </header>
        <div className="film-stage">
          {films.map((src, index) => <video key={src} src={src} preload="auto" playsInline muted={index !== language || muted} aria-hidden={index !== language}
            className={index === language ? "film-video is-active" : "film-video"}
            ref={node => { videos.current[index] = node; }}
            onLoadedMetadata={event => { if (index === selected.current) setDuration(event.currentTarget.duration); }}
            onTimeUpdate={() => sync(index)} onEnded={() => { if (index === selected.current) pause(); }}
            onError={() => setError("The film could not load. Please try again.")} />)}
          {!playing && <button className="film-center-play" aria-label="Play company film" onClick={() => void play()}><Play size={32} fill="currentColor" /></button>}
        </div>
        <div className="film-controls">
          <button className="film-icon" aria-label={playing ? "Pause film" : "Play film"} onClick={() => playing ? pause() : void play()}>{playing ? <Pause size={20} /> : <Play size={20} />}</button>
          <span className="film-time">{clock(time)}</span>
          <input aria-label="Film position" type="range" min="0" max={duration} step=".1" value={Math.min(time, duration)} onChange={event => seek(Number(event.target.value))} />
          <span className="film-time">{clock(duration)}</span>
          <button className="film-icon" aria-label={muted ? "Unmute film" : "Mute film"} onClick={() => { setMuted(!muted); const active = videos.current[selected.current]; if (active) active.muted = !muted; }}>{muted ? <VolumeX size={20} /> : <Volume2 size={20} />}</button>
          <button className="film-icon" aria-label="Fullscreen film" onClick={() => void dialog.current?.requestFullscreen?.().catch(() => {})}><Maximize size={19} /></button>
        </div>
        <footer className="film-caption"><span>Engineering progress. Delivering with purpose.</span><span role="status">{error || "Switch language. Keep your place."}</span></footer>
      </div>
    </dialog>, document.body)}
  </>;
}
