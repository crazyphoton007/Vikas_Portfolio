import React from "react";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education" className="container-xxl py-16">
      <h2 className="text-2xl font-semibold">Education</h2>
      <div className="mt-4 grid gap-4">
        {education.map((e, i) => (
          <div key={i} className="card p-6">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="font-semibold">{e.school}</h3>
              <span className="text-sm text-zinc-400">{e.period}</span>
            </div>
            <div className="text-zinc-300 mt-1">{e.degree}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
