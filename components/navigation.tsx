// components/navigation.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/equipment-hire", label: "Equipment Hire" },
  { href: "/hse-sustainability", label: "HSE & Sustainability" },
  { href: "/careers", label: "Careers" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

function NavLinks({ onClick }: { onClick?: () => void }) {
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
              className={`text-sm font-medium ${
                active ? "text-navy-800 dark:text-white" : "text-gray-700 dark:text-gray-200"
              } hover:text-navy-900 dark:hover:text-white transition-colors`}
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
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold">
            <span className="text-navy-800 dark:text-white">Loop</span>
            <span className="text-teal-600">Energy</span>
          </div>
        </Link>

        <nav className="hidden md:block">
          <NavLinks />
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <SheetHeader>
                <SheetTitle className="text-foreground">
                  <span className="text-navy-800 dark:text-white">Loop</span>
                  <span className="text-teal-600">Energy</span>
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
