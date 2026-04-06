import TypingTest from "@/components/games/TypingTest";
import SideHUD from "@/components/SideHUD";

export const metadata = {
  title: "TYPE//RUN | ANKIT.DEV Arcade",
};

export default function TypeRunPage() {
  return (
    <>
      <SideHUD />
      <TypingTest />
    </>
  );
}
