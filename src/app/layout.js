import { Space_Grotesk, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SideHUD from "@/components/SideHUD";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const workSans = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "ANKIT.DEV | ML Engineer & LLM Researcher",
  description:
    "Ankit Belvanshi — ML Engineer & LLM Researcher @ IIT ISM Dhanbad. Building intelligent systems at the intersection of ML and LLMs.",
  keywords: [
    "Ankit Belvanshi",
    "ML Engineer",
    "LLM Researcher",
    "IIT ISM Dhanbad",
    "NLP",
    "RAG",
    "Python",
    "PyTorch",
    "HuggingFace",
  ],
  openGraph: {
    title: "ANKIT.DEV | ML Engineer & LLM Researcher",
    description: "ML Engineer & LLM Researcher @ IIT ISM Dhanbad — Building intelligent systems, one model at a time.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${workSans.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen font-body text-on-background overflow-x-hidden">
        <SideHUD />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
