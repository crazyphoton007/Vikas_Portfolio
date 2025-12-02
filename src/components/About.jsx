import React from "react";
import { about } from "../data";

export default function About() {
  return (
    <section id="about" className="container-xxl py-16">
      <h2 className="text-2xl font-semibold">About</h2>
      <div className="mt-4 card p-6 leading-7 text-zinc-200">
        {about.summary}
      </div>
    </section>
  );
}
