import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="container-xxl py-16">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="mt-4 card p-6 grid grid-cols-2 md:grid-cols-4 gap-3">
        {skills.map((s, i) => (
          <div
            key={i}
            className="text-zinc-200 text-sm px-3 py-2 rounded-lg bg-zinc-900/60 border border-zinc-800 transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 hover:text-black hover:-translate-y-0.5"
          >
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
