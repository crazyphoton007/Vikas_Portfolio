import React from "react";
import { projects } from "../data";

function Chip({ label }) {
  return (
    <span className="text-xs border border-zinc-700 px-2 py-1 rounded-lg">
      {label}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="container-xxl py-16">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="card p-6 transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 hover:text-black hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="font-semibold">{p.title}</h3>
            <p className="mt-2 text-zinc-300 text-sm">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.map((s, j) => (
                <Chip label={s} key={j} />
              ))}
            </div>
            <div className="mt-4 text-sm underline">Open on GitHub →</div>
          </a>
        ))}
      </div>
    </section>
  );
}
