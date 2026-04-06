import Link from "next/link";

export default function GameCard({ title, href, imageSrc, difficulty }) {
  return (
    <div className="relative group w-full max-w-sm mx-auto aspect-[3/4] flex flex-col bg-white border-4 border-stone-800 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0px_0px_rgba(76,175,80,1)] rounded-none">
      
      {/* Artwork Area (70%) */}
      <div className="relative h-[70%] border-b-4 border-stone-800 overflow-hidden bg-stone-900 border-b-none">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
        
        {/* Top Overlay Title */}
        <div className="absolute top-0 left-0 w-full p-4 bg-gradient-to-b from-black/80 to-transparent">
          <h3 className="font-headline font-black text-3xl text-white uppercase tracking-wider shadow-black drop-shadow-md">
            {title}
          </h3>
        </div>

        {/* Difficulty Badge */}
        <div className="absolute top-4 right-4 bg-stone-800 border-2 border-stone-500 px-2 py-1 flex gap-1">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i} 
              className={`w-2 h-2 ${i < difficulty ? "bg-green-500" : "bg-stone-600"}`}
            />
          ))}
        </div>
      </div>

      {/* Button Area (30%) */}
      <div className="h-[30%] bg-stone-200 p-4 flex items-center justify-center">
        <Link 
          href={href}
          className="w-full h-full bg-green-600 hover:bg-green-500 active:bg-green-700 active:translate-y-1 transition-all duration-100 flex items-center justify-center font-headline font-black text-white text-2xl uppercase border-4 border-stone-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
        >
          START GAME
        </Link>
      </div>

    </div>
  );
}
