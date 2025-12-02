import React from "react";
import { experience } from "../data";

function Item({ item }) {
  return (
    <div className="card p-6 transition-all duration-300 hover:bg-gradient-to-r hover:from-zinc-900 hover:to-zinc-800 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex flex-wrap justify-between gap-2">
        <h3 className="font-semibold">
          {item.role} - {item.company}
        </h3>
        <span className="text-sm text-zinc-400">{item.period}</span>
      </div>
      <div className="text-sm text-zinc-400">{item.location}</div>
      <ul className="mt-3 list-disc pl-5 space-y-2 text-zinc-200">
        {item.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="container-xxl py-16">
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      <div className="grid gap-6">
        {experience.map((item, idx) => (
          <Item item={item} key={idx} />
        ))}
      </div>
    </section>
  );
}
