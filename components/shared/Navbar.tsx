"use client";

import Link from "next/link";
import {
  Building2,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/service/logout";
import { useRouter } from "next/navigation";

type IUser = {
  success: boolean;
  message: string;
  data?: {
    profile: {
      id: string;
      name: string;
      email: string;
      phoneNumber: string;
      profileImage: string | null;
      role: "ADMIN" | "USER";
      status: "ACTIVE" | "INACTIVE";
      createdAt: string;
      updatedAt: string;
    };
  };
};

type NavbarProps = {
  user?: IUser | null;
};

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

export default function Navbar({ user }: NavbarProps) {
  const isLoggedIn = user?.success && user?.data?.profile;
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Building2 className="h-7 w-7 text-green-600" />
          <span className="text-2xl font-bold">RentNest</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium text-gray-700 transition hover:text-green-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-3 md:flex">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <UserIcon className="mr-2 h-4 w-4" />
                  {user?.data?.profile.name}
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-60">
                <DropdownMenuItem className="flex flex-col items-start">
                  <span className="font-semibold">
                    {user?.data?.profile.name}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {user?.data?.profile.email}
                  </span>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                  <Link href="/dashboard">
                    <SettingsIcon className="mr-2 h-4 w-4" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="text-red-600 focus:text-red-600">

                  <Button onClick={async() => {
                  await  logout()
                   router.refresh();
                  }}>logout</Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="outline" asChild>
                <Link href="/login">Login</Link>
              </Button>

              <Button className="bg-green-600 hover:bg-green-700" asChild>
                <Link href="/register">Register</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}