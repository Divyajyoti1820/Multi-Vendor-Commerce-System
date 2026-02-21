"use client";

import Link from "next/link";
import { useState } from "react";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { NavbarSidebar } from "./navbar-sidebar";
import { MenuIcon } from "lucide-react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      variant="outline"
      asChild
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent text-lg",
        isActive && "bg-black text-white hover:bg-black hover:text-white",
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];

export const Navbar = () => {
  const pathname = usePathname(); // Client-Side hook
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href="/" className="pl-6 flex items-center">
        <span className={cn("text-5xl font-semibold", font.className)}>
          Ekādhāra
        </span>
      </Link>
      <NavbarSidebar
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
        items={navbarItems}
      />
      <div className="items-center gap-4 hidden xl:flex">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>
      <div className="hidden xl:flex">
        <Button
          asChild
          variant="secondary"
          className="border-l text-lg border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors"
        >
          <Link href="/login">Login</Link>
        </Button>
        <Button
          asChild
          variant="secondary"
          className="border-l text-lg border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:bg-pink-400 hover:text-black transition-colors"
        >
          <Link href="/register">Start Selling</Link>
        </Button>
      </div>
      <div className="flex xl:hidden items-center justify-center">
        <Button
          variant="ghost"
          className="size-12 border-transparent bg-white"
          onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
};
