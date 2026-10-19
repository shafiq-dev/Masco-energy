import Image from "next/image";
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
        style={{ background: `linear-gradient(90deg, #134880dd, #13488055), url(/images/generated/saudi-energy-hero.png) center/cover` }}
      >
        <span className="text-[7px] font-bold">Saudi EPC &amp; Industrial Infrastructure</span>
        <span className="mt-2 max-w-[80%] text-[5px] text-white/80">
          Engineering progress. Delivering with purpose.
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
          Built on Experience. Focused on Energy.
        </span>
        <p className="mt-2 text-[5px] leading-relaxed text-masco-black/50">
          Decades of Saudi contracting experience focused into one energy platform.
        </p>
      </div>
      <div className="relative mt-3 min-h-12 flex-1 overflow-hidden"><Image src="/images/generated/pipeline-corridor.png" alt="" fill className="object-cover" sizes="350px" /></div>
      <div className="mt-auto space-y-2">
        <div className="h-px bg-masco-navy/10" />
        <div className="flex justify-between text-[5px] text-masco-navy">
          <span>Projects</span>
          <span>Capabilities</span>
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
        Integrated EPC Delivery
      </span>
      <div className="mt-2 grid flex-1 grid-cols-2 gap-2">
        {["Engineering", "Procurement", "Construction", "O&M"].map((label) => (
          <div
            key={label}
            className="rounded-[6px] border border-masco-navy/10 p-2"
          >
            <div className="relative h-9 overflow-hidden rounded-[4px]"><Image src={`/images/generated/${label === "Engineering" ? "engineering-design-empty" : label === "Procurement" ? "procurement-logistics-empty" : label === "Construction" ? "epc-construction-empty" : "commissioning-systems"}.png`} alt="" fill className="object-cover" sizes="150px" /></div>
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
          Backed by a Broader Legacy
        </span>
        <p className="mt-2 text-[5px] leading-relaxed text-masco-black/50">
          Saudi market experience, resource depth and execution capacity.
        </p>
      </div>
      <div className="flex w-[45%] flex-col gap-2 bg-masco-navy/5 p-3" style={{ background: "linear-gradient(#13488044,#13488066), url(/images/generated/coastal-energy.png) center/cover" }}>
        {[
          { n: "+4.5B", l: "Portfolio" },
          { n: "3,000+", l: "Workforce" },
          { n: "6", l: "Markets" },
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
        <span className="text-[7px] font-bold">Company Profile 2026</span>
      </div>
      <div className="flex-1 px-3 py-2" style={{ background: "linear-gradient(90deg,#ffffffee,#ffffff77),url(/images/generated/engineering-design-empty.png) center/cover" }}>
        <div className="h-1 w-6 rounded bg-masco-blue" />
        <span className="mt-2 block text-[6px] font-bold text-masco-black">
          Vision, Mission &amp; Values
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
      <div className="relative mt-3 h-16 overflow-hidden"><Image src="/images/generated/epc-construction-empty.png" alt="" fill className="object-cover" sizes="350px" /></div>
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
      <div className="relative mb-3 h-10 overflow-hidden rounded-md"><Image src="/images/generated/commissioning-systems.png" alt="" fill className="object-cover" sizes="350px" /></div>
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
        <span className="mt-10 block text-[18px] font-bold leading-none text-masco-blue">06</span>
        <span className="mt-1 block text-white/55">Core markets</span>
      </div>
      <div className="p-3">
        <span className="uppercase tracking-widest text-masco-blue">Corporate profile</span>
        <span className="mt-3 block text-[10px] font-bold leading-tight text-masco-navy">A disciplined partner for complex infrastructure.</span>
        <div className="relative mt-3 h-9 overflow-hidden"><Image src="/images/generated/industrial-utilities.png" alt="" fill className="object-cover" sizes="250px" /></div>
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
      <div className="relative mt-3 min-h-12 w-full flex-1 overflow-hidden rounded-t-[12px]"><Image src="/images/generated/saudi-energy-hero.png" alt="" fill className="object-cover" sizes="350px" /></div>
    </div>
  );
}
