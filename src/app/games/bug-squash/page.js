import WhackABug from "@/components/games/WhackABug";
import SideHUD from "@/components/SideHUD";

export const metadata = {
  title: "BUG_SQUASH | ANKIT.DEV Arcade",
};

export default function BugSquashPage() {
  return (
    <>
      <SideHUD />
      <WhackABug />
    </>
  );
}
