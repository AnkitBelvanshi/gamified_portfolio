"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/projects", label: "Projects", icon: "folder_open" },
  { href: "/skills", label: "Skills", icon: "bolt" },
  { href: "/contact", label: "Contact", icon: "mail" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center gap-2 p-1 bg-white/40 backdrop-blur-md border-4 border-stone-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      {/* Hotbar Slots */}
      <div className="flex gap-1">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`w-14 h-14 flex flex-col items-center justify-center gap-1 font-headline uppercase tracking-tighter font-bold text-[10px] cursor-pointer transition-transform duration-100
                ${
                  isActive
                    ? "border-t-4 border-green-600 bg-stone-200 text-green-700"
                    : "text-stone-600 hover:bg-stone-100 hover:translate-y-0.5 active:translate-y-1"
                }`}
            >
              <span
                className="material-symbols-outlined text-xl"
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {item.icon}
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}

        {/* Empty Hotbar Slots */}
        {[...Array(5)].map((_, i) => (
          <div key={`empty-${i}`} className="w-14 h-14 bg-stone-300/30 hidden md:block" />
        ))}
      </div>
    </nav>
  );
}
