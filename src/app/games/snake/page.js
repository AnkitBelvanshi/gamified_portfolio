import SnakeGame from "@/components/games/SnakeGame";
import SideHUD from "@/components/SideHUD";

export const metadata = {
  title: "SNAKE.3D | ANKIT.DEV Arcade",
};

export default function SnakeGamePage() {
  return (
    <>
      <SideHUD />
      <SnakeGame />
    </>
  );
}
