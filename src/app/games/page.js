import SideHUD from "@/components/SideHUD";
import GameCard from "@/components/games/GameCard";

export const metadata = {
  title: "Arcade | ANKIT.DEV",
  description: "Play minigames and challenges in the voxel arcade.",
};

export default function GamesPage() {
  return (
    <>
      <SideHUD />
      <div className="min-h-screen w-full pt-32 pb-24 px-4 sm:px-8">
        <div className="absolute inset-0 pixel-bg pointer-events-none -z-10 opacity-30 mix-blend-multiply bg-blue-100" />
        
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h1 className="font-headline font-black text-5xl md:text-7xl text-stone-900 uppercase tracking-tighter mb-12 relative flex flex-col items-center">
            <span>[ ARCADE ]</span>
            <div className="h-2 bg-green-600 mt-2 w-full absolute -bottom-2" />
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
            <GameCard
              title="SNAKE.3D"
              href="/games/snake"
              imageSrc="/snake-art.png"
              difficulty={1}
            />
            <GameCard
              title="BUG_SQUASH"
              href="/games/bug-squash"
              imageSrc="/bug-squash-art.png"
              difficulty={2}
            />
            <GameCard
              title="TYPE//RUN"
              href="/games/typerun"
              imageSrc="/typerun-art.png"
              difficulty={3}
            />
          </div>
        </div>
      </div>
    </>
  );
}
