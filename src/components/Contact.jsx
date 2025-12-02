import React from "react";
import { links } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="container-xxl py-16">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <div className="mt-4 card p-6">
        <p className="text-zinc-300">Want to collaborate or chat? Reach out.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a className="btn" href={`mailto:${links.email}`}>Email Me</a>
          <a className="btn" href={links.linkedIn} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn" href={links.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
}
