import Link from "next/link";
import SideHUD from "@/components/SideHUD";

export const metadata = {
  title: "ANKIT.DEV | ML Engineer & LLM Researcher",
  description: "Ankit Belvanshi — ML Engineer & LLM Researcher @ IIT ISM Dhanbad. Building intelligent systems at the intersection of ML and LLMs.",
};

export default function HomePage() {
  return (
    <>
      <SideHUD />

      {/* Ambient Pixel Clouds */}
      <div className="absolute top-20 left-10 w-10 h-10 bg-white pixel-cloud opacity-60 pointer-events-none" />
      <div className="absolute top-40 right-20 w-10 h-10 bg-white pixel-cloud opacity-40 scale-150 pointer-events-none" />
      <div className="absolute bottom-60 left-1/4 w-10 h-10 bg-white pixel-cloud opacity-50 scale-125 pointer-events-none" />

      {/* Stats Panel (Right) */}
      <aside className="fixed right-0 top-1/2 -translate-y-1/2 p-6 flex flex-col gap-4 z-40 hidden xl:flex">
        <div className="bg-stone-800 text-white p-4 border-l-8 border-green-500 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
          <h3 className="font-headline font-black uppercase text-lg border-b-2 border-stone-600 mb-2 pb-1">
            Character Stats
          </h3>
          <div className="flex flex-col gap-2 font-headline font-bold text-sm">
            <div className="flex justify-between gap-8">
              <span className="text-stone-400 uppercase">Class:</span>
              <span>ML Engineer & LLM Researcher</span>
            </div>
            <div className="flex justify-between gap-8">
              <span className="text-stone-400 uppercase">Level:</span>
              <span className="text-green-400">M.Tech CS @ IIT ISM</span>
            </div>
            <div className="flex justify-between gap-8">
              <span className="text-stone-400 uppercase">Exp:</span>
              <span>RAG Research</span>
            </div>
            <div className="flex justify-between gap-8">
              <span className="text-stone-400 uppercase">Mana:</span>
              <span className="text-tertiary">PyTorch / HuggingFace / RAG</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Hero Section */}
      <section 
        className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAnqOvAmzA41-unIcisa77HHmvLsV8UNWJbecMu8pJ7PkPS0bSyBVXkfyH330oiqgBFAO5imJ-CZ5vY5iZgTfO-2Kzn7J4EkMKCoO87W2tmZo-lgJqNF6X6-D1xJ5t5TI7iCZjwSLiUrYn4yn3-GD2hceCXfvz_CvKBpXXz3ouF9WyOWuPyb5kxQX46qjM4SMLPvisnb6lN1GcQl3f5BrUqXs1Q0j10ouR4kB5rZW2DYlMOT3W6QbIQRUFMIZiok6X3jv6iqeFSvY4')` }}
      >
        {/* Content Overlay (Glassmorphism) */}
        <div className="relative w-[90%] md:w-[60%] max-h-[70vh] overflow-y-auto bg-white/30 backdrop-blur-xl p-[60px_40px] border-4 border-stone-800 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] pointer-events-auto flex flex-col gap-4 mx-auto my-auto custom-scrollbar">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-green-600 text-white font-headline font-bold text-[10px] uppercase">
              New Quest Available
            </span>
            <div className="h-0.5 grow bg-stone-800/20" />
          </div>
          <h1 className="font-headline font-black text-4xl lg:text-6xl text-stone-900 uppercase leading-none tracking-tighter">
            BUILDING INTELLIGENT SYSTEMS, ONE MODEL AT A TIME.
          </h1>
          <p className="font-body text-lg text-stone-800 max-w-lg">
            Building intelligent systems at the intersection of ML and LLMs.
            Currently researching RAG robustness @ IIT ISM Dhanbad.
            Specializing in NLP, Transformers, and scalable ML pipelines.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <Link
              href="/projects"
              className="px-8 py-4 bg-stone-800 text-white font-headline font-black uppercase shadow-[6px_6px_0px_0px_rgba(0,110,28,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,110,28,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-100"
            >
              VIEW PROJECTS
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white border-4 border-stone-800 text-stone-800 font-headline font-black uppercase shadow-[6px_6px_0px_0px_rgba(122,86,73,1)] hover:shadow-[2px_2px_0px_0px_rgba(122,86,73,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-100"
            >
              CONTACT ME
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
