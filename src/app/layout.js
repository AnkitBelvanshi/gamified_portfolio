import { Space_Grotesk, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  title: "ANKIT.DEV | Gamified Developer Portfolio",
  description:
    "Ankit Belvanshi — Level 42 Data Scientist & Software Engineer. Crafting data worlds, one model at a time. Explore projects, skills, and quest log.",
  keywords: [
    "Ankit Belvanshi",
    "Data Scientist",
    "Software Engineer",
    "Portfolio",
    "Machine Learning",
    "Python",
    "TensorFlow",
  ],
  openGraph: {
    title: "ANKIT.DEV | Gamified Developer Portfolio",
    description: "Level 42 Data Scientist — Crafting data worlds, one model at a time.",
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
