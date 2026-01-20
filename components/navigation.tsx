// components/navigation.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { site } from "@/lib/content";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/trading", label: "Trading" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
];

function NavLinks({
  onClick,
  linkClasses = "text-gray-700 dark:text-gray-200 hover:text-navy-900 dark:hover:text-white",
  activeLinkClasses = "text-navy-800 dark:text-white"
}: {
  onClick?: () => void;
  linkClasses?: string;
  activeLinkClasses?: string;
}) {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-5">
      {links.map((l) => {
        const active = pathname === l.href;
        return (
          <li key={l.href}>
            <Link
              onClick={onClick}
              href={l.href}
              className={`text-sm font-medium transition-colors ${active ? activeLinkClasses : linkClasses
                }`}
            >
              {l.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const headerClasses = isHomePage
    ? `fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled
      ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200"
      : "bg-gradient-to-b from-navy-900/60 via-navy-900/20 to-transparent backdrop-blur-[2px]"
    }`
    : "sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm";

  const linkClasses = isHomePage && !isScrolled
    ? "text-white hover:text-loop-orange-400"
    : "text-gray-700 dark:text-gray-200 hover:text-navy-900 dark:hover:text-white";

  const activeLinkClasses = isHomePage && !isScrolled
    ? "text-loop-orange-400"
    : "text-navy-800 dark:text-white";

  return (
    <header className={headerClasses}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-clear.png"
            alt="Loop Energy"
            width={252}
            height={56}
            className={`h-14 w-auto transition-all duration-500 ${isHomePage && !isScrolled
              ? "drop-shadow-[0_0_15px_rgba(255,255,255,0.25)] brightness-110"
              : "brightness-100"
              }`}
            priority
          />
        </Link>

        <nav className="hidden md:block">
          <NavLinks
            linkClasses={linkClasses}
            activeLinkClasses={activeLinkClasses}
          />
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Open menu"
                className={isHomePage && !isScrolled ? "border-white/50 text-white hover:bg-white/10" : ""}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <SheetHeader>
                <SheetTitle className="text-foreground">
                  <Image
                    src="/logo-clear.png"
                    alt="Loop Energy"
                    width={198}
                    height={44}
                    className="h-11 w-auto"
                  />
                </SheetTitle>
              </SheetHeader>
              <div className="mt-4">
                <NavLinks />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
