import { brand } from "@/lib/brand";

type ThumbnailPreviewProps = {
  slug: string;
};

export function ThumbnailPreview({ slug }: ThumbnailPreviewProps) {
  switch (slug) {
    case "classic":
      return <ClassicPreview />;
    case "minimal":
      return <MinimalPreview />;
    case "services":
      return <ServicesPreview />;
    case "split":
      return <SplitPreview />;
    case "editorial":
      return <EditorialPreview />;
    case "monumental":
      return <MonumentalPreview />;
    case "kinetic":
      return <KineticPreview />;
    case "dossier":
      return <DossierPreview />;
    case "luminous":
      return <LuminousPreview />;
    default:
      return null;
  }
}

function ClassicPreview() {
  return (
    <div className="flex h-full flex-col text-[6px] leading-none">
      <div className="flex items-center justify-between px-3 py-2">
        <span className="font-bold text-masco-navy">MASCO Energy</span>
        <div className="flex gap-2 text-masco-black/40">
          <span>About</span>
          <span>Solutions</span>
        </div>
      </div>
      <div
        className="mx-2 flex flex-1 flex-col items-center justify-center rounded-[8px] px-4 py-6 text-center text-white"
        style={{ background: brand.gradient }}
      >
        <span className="text-[7px] font-bold">Integrated Energy Solutions</span>
        <span className="mt-2 max-w-[80%] text-[5px] text-white/80">
          Delivering excellence across the energy and industrial sectors.
        </span>
        <div className="mt-3 flex gap-2">
          <span className="rounded-[6px] bg-white px-2 py-1 text-[5px] font-bold text-masco-navy">
            Explore
          </span>
          <span className="rounded-[6px] border border-white px-2 py-1 text-[5px] text-white">
            Contact
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 p-2">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-[6px] border border-masco-navy/10 p-2"
          >
            <div className="h-1 w-4 rounded bg-masco-blue/30" />
            <div className="mt-1 h-1 w-full rounded bg-masco-black/10" />
          </div>
        ))}
      </div>
    </div>
  );
}

function MinimalPreview() {
  return (
    <div className="flex h-full flex-col px-4 py-3 text-[6px]">
      <span className="font-bold text-masco-navy">MASCO Energy</span>
      <div className="mt-4 border-t border-masco-navy/10 pt-4">
        <span className="text-[8px] font-bold leading-tight text-masco-black">
          Vital role in delivering integrated solutions
        </span>
        <p className="mt-2 text-[5px] leading-relaxed text-masco-black/50">
          Corporate identity reflects values, culture, and future aspirations
          across all communication channels.
        </p>
      </div>
      <div className="mt-auto space-y-2">
        <div className="h-px bg-masco-navy/10" />
        <div className="flex justify-between text-[5px] text-masco-navy">
          <span>Guidelines</span>
          <span>Partners</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
}

function ServicesPreview() {
  return (
    <div className="flex h-full flex-col p-3 text-[6px]">
      <div className="flex items-center justify-between">
        <span className="font-bold text-masco-navy">MASCO Energy</span>
        <span className="text-masco-blue">Solutions</span>
      </div>
      <span className="mt-3 text-[7px] font-bold text-masco-black">
        Our Sectors
      </span>
      <div className="mt-2 grid flex-1 grid-cols-2 gap-2">
        {["Energy", "Industrial", "Power", "Infrastructure"].map((label) => (
          <div
            key={label}
            className="rounded-[6px] border border-masco-navy/10 p-2"
          >
            <div className="flex h-4 w-4 items-center justify-center rounded-[4px] bg-masco-navy/10 text-[5px] text-masco-navy">
              ●
            </div>
            <span className="mt-1 block font-bold text-masco-navy">{label}</span>
            <div className="mt-1 h-1 w-full rounded bg-masco-black/10" />
          </div>
        ))}
      </div>
    </div>
  );
}

function SplitPreview() {
  return (
    <div className="flex h-full text-[6px]">
      <div className="flex w-[55%] flex-col justify-center px-3 py-4">
        <span className="text-[5px] uppercase tracking-widest text-masco-blue">
          About MASCO
        </span>
        <span className="mt-2 text-[7px] font-bold leading-tight text-masco-navy">
          Strengthening brand presence
        </span>
        <p className="mt-2 text-[5px] leading-relaxed text-masco-black/50">
          Unified reference for visual and strategic foundations.
        </p>
      </div>
      <div className="flex w-[45%] flex-col gap-2 bg-masco-navy/5 p-3">
        {[
          { n: "60+", l: "Years" },
          { n: "3,000+", l: "Professionals" },
          { n: "7", l: "Sectors" },
        ].map((stat) => (
          <div
            key={stat.l}
            className="rounded-[6px] bg-white p-2 text-center"
          >
            <span className="block text-[8px] font-bold text-masco-blue">
              {stat.n}
            </span>
            <span className="text-[5px] text-masco-black/50">{stat.l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EditorialPreview() {
  return (
    <div className="flex h-full flex-col text-[6px]">
      <div className="flex items-center justify-between px-3 py-2">
        <span className="font-bold text-masco-navy">MASCO Energy</span>
      </div>
      <div
        className="px-3 py-3 text-white"
        style={{ background: brand.gradient }}
      >
        <span className="text-[7px] font-bold">Corporate Identity</span>
      </div>
      <div className="flex-1 px-3 py-2">
        <div className="h-1 w-6 rounded bg-masco-blue" />
        <span className="mt-2 block text-[6px] font-bold text-masco-black">
          Values & Culture
        </span>
        <div className="mt-1 h-1 w-full rounded bg-masco-black/10" />
      </div>
      <div className="bg-masco-navy/5 px-3 py-2">
        <span className="text-[6px] font-bold text-masco-navy">Partners</span>
        <div className="mt-1 flex gap-1">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-3 flex-1 rounded-[4px] border border-masco-navy/10 bg-white"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MonumentalPreview() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#f4f7fa] p-3 text-[6px]">
      <div className="flex items-center justify-between">
        <span className="font-bold text-masco-navy">MASCO Energy</span>
        <span className="uppercase tracking-[0.18em] text-masco-blue">Theme 06</span>
      </div>
      <div className="mt-auto max-w-[78%] pb-2">
        <span className="block text-[13px] font-bold leading-[0.95] text-masco-navy">
          Energy built at national scale.
        </span>
        <div className="mt-3 h-[2px] w-10 bg-masco-blue" />
      </div>
      <div className="absolute -bottom-6 -right-5 h-24 w-24 rounded-full border-[12px] border-masco-blue/15" />
    </div>
  );
}

function KineticPreview() {
  return (
    <div className="flex h-full flex-col bg-[#071c31] p-3 text-[6px] text-white">
      <div className="flex items-center justify-between">
        <span className="font-bold">MASCO Energy</span>
        <span className="text-masco-blue">06 capabilities</span>
      </div>
      <div className="my-auto">
        <span className="block text-[12px] font-bold leading-none">One connected</span>
        <span className="block text-[12px] font-bold leading-none text-masco-blue">delivery system.</span>
      </div>
      <div className="grid grid-cols-4 gap-1">
        {["01", "02", "03", "04"].map((step) => (
          <div key={step} className="border-t border-white/25 pt-1 text-white/55">{step}</div>
        ))}
      </div>
    </div>
  );
}

function DossierPreview() {
  return (
    <div className="grid h-full grid-cols-[30%_70%] text-[6px]">
      <div className="bg-masco-navy p-3 text-white">
        <span className="font-bold">MASCO</span>
        <span className="mt-10 block text-[18px] font-bold leading-none text-masco-blue">07</span>
        <span className="mt-1 block text-white/55">Core sectors</span>
      </div>
      <div className="p-3">
        <span className="uppercase tracking-widest text-masco-blue">Corporate profile</span>
        <span className="mt-3 block text-[10px] font-bold leading-tight text-masco-navy">A disciplined partner for complex infrastructure.</span>
        <div className="mt-4 space-y-2">
          {["Capabilities", "Sectors", "Values"].map((label, index) => (
            <div key={label} className="flex items-center gap-2 border-t border-masco-navy/15 pt-1">
              <span className="text-masco-blue">0{index + 1}</span><span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LuminousPreview() {
  return (
    <div className="relative flex h-full flex-col items-center overflow-hidden bg-gradient-to-b from-white to-[#eaf5fb] px-4 py-3 text-center text-[6px]">
      <span className="font-bold text-masco-navy">MASCO Energy</span>
      <div className="mt-7">
        <span className="block text-[12px] font-bold leading-none text-masco-navy">Built for what</span>
        <span className="mt-1 block text-[12px] font-bold leading-none text-masco-blue">comes next.</span>
      </div>
      <span className="mt-3 max-w-[75%] leading-relaxed text-masco-black/50">Integrated delivery for essential energy and industrial infrastructure.</span>
      <div className="absolute -bottom-10 h-24 w-[80%] rounded-t-[24px] bg-gradient-to-br from-masco-navy to-masco-blue shadow-2xl" />
    </div>
  );
}
