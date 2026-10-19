"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Factory, Landmark, Route, TrainFront, Zap } from "lucide-react";

type Item = { title: string; text: string };

const iconByName = { landmark: Landmark, route: Route, rail: TrainFront, factory: Factory, energy: Zap };

export function AnimatedHeritageTimeline({ items, icons }: { items: readonly Item[]; icons: (keyof typeof iconByName)[] }) {
  const reduced = useReducedMotion();
  return <div className="heritage-track relative mt-16 grid gap-0 md:grid-cols-5">
    <motion.span aria-hidden="true" className="heritage-progress absolute left-0 top-0 h-px w-full origin-left bg-masco-blue" initial={reduced ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: reduced ? 0 : 1.35, ease: [0.22, 1, 0.36, 1] }} />
    {items.map((item, index) => {
      const Icon = iconByName[icons[index]];
      return <motion.article key={item.title} className="heritage-milestone relative border-t border-current/20 py-7 pr-5" initial={reduced ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: reduced ? 0 : 0.55, delay: reduced ? 0 : index * 0.16, ease: [0.22, 1, 0.36, 1] }}>
        <span className="heritage-dot absolute -top-[5px] left-0 h-2 w-2 rounded-full bg-masco-blue" />
        <Icon className="mb-4 h-5 w-5 text-masco-blue" aria-hidden="true" />
        <p className="story-eyebrow">0{index + 1}</p><h3 className="mt-4 text-sm font-bold">{item.title}</h3><p className="story-copy mt-3 text-xs">{item.text}</p>
      </motion.article>;
    })}
  </div>;
}
