import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-10 mt-8">
      <div className="container-xxl text-sm text-zinc-400">
        © {new Date().getFullYear()} Vikas Shukla • Built with React & Tailwind
      </div>
    </footer>
  );
}
