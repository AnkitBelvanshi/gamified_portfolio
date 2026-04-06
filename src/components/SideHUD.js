"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/projects", label: "Projects", icon: "folder_open" },
  { href: "/skills", label: "Skills", icon: "bolt" },
  { href: "/contact", label: "Contact", icon: "mail" },
];

export default function SideHUD() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const closeTimerRef = useRef(null);

  const cancelClose = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const open = useCallback(() => {
    cancelClose();
    setIsOpen(true);
  }, [cancelClose]);

  // Small delay so cursor can travel from hamburger → panel without flicker
  const scheduleClose = useCallback(() => {
    closeTimerRef.current = setTimeout(() => setIsOpen(false), 200);
  }, []);

  const forceClose = useCallback(() => {
    cancelClose();
    setIsOpen(false);
  }, [cancelClose]);

  useEffect(() => () => cancelClose(), [cancelClose]);

  return (
    <>
      {/* ── Hamburger button — always visible, no reserved space ── */}
      <button
        id="sidebar-hamburger"
        aria-label="Open navigation menu"
        onMouseEnter={open}
        onMouseLeave={scheduleClose}
        onClick={() => setIsOpen((v) => !v)}
        className="fixed top-5 left-4 z-[70] w-11 h-11 flex items-center justify-center bg-stone-800 border-4 border-stone-600 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.6)] hover:bg-stone-700 active:translate-y-0.5 active:shadow-none transition-all duration-100 cursor-pointer"
      >
        <span className="material-symbols-outlined text-2xl">
          {isOpen ? "close" : "menu"}
        </span>
      </button>

      {/* ── Sidebar panel — slides in as an overlay, full off-screen by default ── */}
      <div
        id="sidebar-panel"
        role="navigation"
        aria-label="Site navigation"
        onMouseEnter={open}
        onMouseLeave={scheduleClose}
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 300ms ease-in-out",
        }}
        className="fixed top-0 left-0 z-[60] h-full w-72 flex flex-col p-6 gap-6 bg-stone-100/95 backdrop-blur-md border-r-8 border-stone-800 shadow-[8px_0px_0px_0px_rgba(122,86,73,1)]"
      >
        {/* Close button (X) */}
        <button
          aria-label="Close sidebar"
          onClick={forceClose}
          className="absolute top-4 right-4 w-8 h-8 bg-stone-700 text-white flex items-center justify-center hover:bg-red-700 active:translate-y-0.5 transition-all duration-100 cursor-pointer z-[70]"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        {/* Character info */}
        <div className="flex flex-col gap-2 pt-8">
          <div className="w-16 h-16 bg-stone-800 border-4 border-white mb-2 overflow-hidden">
            <img
              alt="Ankit Belvanshi Avatar"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBdLDhHyTFcUrblLQmc-CoVYTo4zVEdiqzyPKRIKDBT_gCKW-OKSNDQnvQJQKqJ_dqgWJtx063zj7ckhBQVS5Nz2zGRk8svMZs5LrV7WO0M4Liwlqe8uAQKhKte7kPTRVJ1KdAsjYPqm8bypEM1V0dmK7UkEtRqzxdBq1BXS-pUqbJiWpZ_4os02pDiQyNU-xPZxUs2Vkt11_jomYcqEL4razAxS4ZOYvsNvlmT4jxP2q5hfs0JF1fshxJKSiu-amr_zfwHyxo8NA"
            />
          </div>
          <h2 className="font-headline font-black text-2xl text-stone-800 uppercase leading-none">
            ANKIT.DEV
          </h2>
          <p className="font-headline font-bold text-sm text-secondary uppercase">
            ML ENGINEER &amp; LLM RESEARCHER
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={forceClose}
                className={`flex items-center gap-3 p-3 font-headline text-sm uppercase font-bold transition-all duration-100 ${isActive
                    ? "bg-green-600 text-white shadow-[inset_4px_4px_0px_0px_rgba(0,0,0,0.2)]"
                    : "text-stone-600 hover:bg-stone-300 hover:translate-x-1"
                  }`}
              >
                <span
                  className="material-symbols-outlined"
                  style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  {link.icon}
                </span>
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Status bars */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-headline font-bold text-xs uppercase text-stone-700">
              Energy Level
            </span>
            <div className="flex gap-1">
              {[1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-error"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  favorite
                </span>
              ))}
              <span className="material-symbols-outlined text-stone-400">
                favorite
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-headline font-bold text-xs uppercase text-stone-700">
              Research XP
            </span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-secondary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  restaurant
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Download Resume */}
        <div className="mt-auto">
          <a
            href="https://drive.google.com/file/d/1ObDlJJ-NzU4Uj70W3NyHPtD6C9pLpCPr/view?usp=drive_link"
            download="Ankit-Belvanshi-Resume.pdf"
            id="resume-download-btn"
            className="block w-full py-4 bg-stone-700 text-white font-headline font-black uppercase tracking-widest text-center shadow-[0px_6px_0px_0px_rgba(40,40,40,1)] hover:shadow-[0px_2px_0px_0px_rgba(40,40,40,1)] hover:translate-y-1 transition-all duration-100"
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </div>

      {/* ── Dark backdrop ── */}
      <div
        aria-hidden="true"
        onClick={forceClose}
        style={{
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 300ms ease-in-out",
        }}
        className="fixed inset-0 bg-black/40 z-[55]"
      />
    </>
  );
}
