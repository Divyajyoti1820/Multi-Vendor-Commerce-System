"use client";

import { useState } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import { NavbarSidebar } from "./navbar-sidebar";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

/*
In context with architecture of Next.js every component & page 
by default is a server component(in gist the component can communicate with server and can fetch data, process and render it). To make change this default setting we have to put "use client"  on the first line of the component to make it a client component which can use hooks and other client based features.  
*/

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
      asChild //very important when we use link as children inside button !causes hydration error
      variant="outline"
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
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
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      {/* Logo */}
      <Link href="/" className="pl-6 flex items-center">
        <span className={cn("text-5xl font-semibold", font.className)}>
          Ekādhāra
        </span>
      </Link>
      {/* Logo */}

      {/* Navbar-Sidebar for Small Devices */}
      <NavbarSidebar
        items={navbarItems}
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />
      {/* Navbar-Sidebar for Small Devices */}

      {/* Rendering Navbar Item */}
      <div className="items-center gap-4 hidden lg:flex">
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
      {/* Rendering Navbar Item */}

      {/* CTA Buttons */}
      <div className="hidden lg:flex">
        <Button
          asChild
          variant="secondary"
          className="border border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"
        >
          <Link href="/sign-in">Login</Link>
        </Button>
        <Button
          asChild
          variant="secondary"
          className="border border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:bg-pink-400 hover:text-black transition-colors text-lg"
        >
          <Link href="/sign-up">Start Selling</Link>
        </Button>
      </div>
      {/* CTA Buttons */}

      {/* Buttons for Toggling Navbar-Sidebar  */}
      <div className="flex lg:hidden items-center justify-center">
        <Button
          variant="ghost"
          className="size-12 border-transparent bg-white"
          onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon />
        </Button>
      </div>
      {/* Buttons for Toggling Navbar-Sidebar  */}
    </nav>
  );
};
