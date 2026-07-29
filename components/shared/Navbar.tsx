"use client";

import Link from "next/link";
import { Menu, Home, Building2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Properties",
    href: "/properties",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <Building2 className="h-7 w-7 text-green-600" />

          <span className="text-2xl font-bold">
            RentNest
          </span>
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium transition hover:text-green-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost">
            Login
          </Button>

          <Button className="bg-green-600 hover:bg-green-700">
            Register
          </Button>
        </div>

        {/* Mobile */}

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
            >
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent side="left">

            <div className="mt-8 flex flex-col gap-5">

              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium"
                >
                  {item.name}
                </Link>
              ))}

              <Button className="mt-5">
                Login
              </Button>

              <Button variant="outline">
                Register
              </Button>

            </div>

          </SheetContent>
        </Sheet>

      </div>
    </header>
  );
}