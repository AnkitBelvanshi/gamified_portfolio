import Link from 'next/link';

export default function GameLayout({ 
  children, 
  title, 
  themeColor = "#4CAF50",
  score = "000",
  hiScore = "000",
  level = "1",
  speed = "1x"
}) {
  return (
    <div className="min-h-screen w-full pt-32 pb-12 px-4 flex justify-center items-start">
      <div className="absolute inset-0 pixel-bg pointer-events-none -z-10 opacity-30 mix-blend-multiply bg-blue-100" />
      
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6">
        
        {/* LEFT SIDEBAR (~200px wide) */}
        <aside className="w-full md:w-[220px] shrink-0 bg-[#1a1a1a] border-4 border-stone-800 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col font-headline">
          {/* Header */}
          <div className="p-4 border-b-4 border-stone-800" style={{ backgroundColor: themeColor }}>
            <h2 className="text-stone-900 font-black text-xl uppercase tracking-wider">{title || "PLAYER_ONE"}</h2>
            <p className="text-stone-900 text-xs uppercase opacity-90 font-bold">Level 42 Architect</p>
          </div>
          
          <div className="p-4 flex flex-col gap-6 text-white min-h-[400px]">
            {/* Health & Hunger */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-1 text-red-500">
                {[...Array(3)].map((_, i) => (
                  <span key={i} className="text-xl material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                ))}
              </div>
              <div className="flex gap-1 text-amber-500">
                {[...Array(3)].map((_, i) => (
                  <span key={i} className="text-xl material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                ))}
              </div>
            </div>

            {/* Menu Items */}
            <ul className="flex flex-col gap-4 mt-6 text-sm font-bold tracking-wider">
              <li className="flex items-center gap-2 text-green-400">
                <span className="material-symbols-outlined text-sm">play_arrow</span>
                STATS
              </li>
              <li className="flex items-center gap-2 text-stone-400 hover:text-stone-200 cursor-pointer">
                <span className="material-symbols-outlined text-sm">inventory_2</span>
                INVENTORY
              </li>
              <li className="flex items-center gap-2 text-stone-400 hover:text-stone-200 cursor-pointer">
                <span className="material-symbols-outlined text-sm">emoji_events</span>
                ACHIEVEMENTS
              </li>
              <li className="flex items-center gap-2 text-stone-400 hover:text-stone-200 cursor-pointer">
                <span className="material-symbols-outlined text-sm">settings</span>
                SETTINGS
              </li>
            </ul>

            <div className="mt-auto pt-6">
              <Link href="/games" className="text-stone-500 hover:text-white text-xs uppercase flex items-center gap-1 transition-colors">
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                Back to Arcade
              </Link>
            </div>
          </div>
        </aside>

        {/* MAIN GAME AREA */}
        <main className="flex-1 flex flex-col gap-4 min-w-0">
          
          {/* Top Bar (Score / Level) */}
          <div className="flex justify-between items-center bg-stone-900 border-4 border-stone-800 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4 text-white font-headline text-lg uppercase overflow-x-auto">
            <div className="flex gap-6 shrink-0">
              <div className="flex gap-2 items-center">
                <span className="text-stone-400 text-sm">SCORE</span>
                <span className="font-black text-green-400">{score.toString().padStart(3, '0')}</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-stone-400 text-sm">HI-SCORE</span>
                <span className="font-black">{hiScore.toString().padStart(3, '0')}</span>
              </div>
            </div>

            <div className="flex gap-6 shrink-0 ml-4">
               <div className="flex gap-2 items-center">
                <span className="text-stone-400 text-sm">LEVEL</span>
                <span className="font-black">{level}</span>
              </div>
              <div className="flex gap-2 items-center hidden sm:flex">
                <span className="text-stone-400 text-sm">SPEED</span>
                <span className="font-black">{speed}</span>
              </div>
            </div>
          </div>

          {/* Game Canvas Container */}
          <div className="bg-stone-200 border-4 border-stone-800 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative w-full h-[600px] flex flex-col items-center justify-center p-4">
            {children}
          </div>
          
        </main>
      </div>
    </div>
  );
}
