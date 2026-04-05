import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-800 text-stone-400 py-4 font-body text-xs flex items-center justify-between px-8 border-t-4 border-stone-600">
      <div className="flex items-center gap-4">
        <span className="font-headline font-bold text-green-500 uppercase tracking-widest">
          ANKIT_DEV v1.0.0
        </span>
        <span className="hidden md:inline">
          © 2026 Ankit Belvanshi. Crafted with Code.
        </span>
      </div>
      <div className="flex gap-6 uppercase font-headline font-bold tracking-tighter">
        <a
          href="https://github.com/AnkitBelvanshi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-100"
        >
          Github
        </a>
        <a
          href="https://linkedin.com/in/ankit-belvanshi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-100"
        >
          LinkedIn
        </a>
        <a
          href="mailto:24mt0064@iitism.ac.in"
          className="hover:text-white transition-colors duration-100"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
