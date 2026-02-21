import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

interface Props {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NavbarSidebar = ({ items, open, onOpenChange }: Props) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="p-0 transition-none" side="left">
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="w-full text-base text-left p-4 hover:bg-black hover:text-white flex items-center font-medium"
              onClick={() => onOpenChange(false)}
            >
              {item.children}
            </Link>
          ))}
          <div className="border-t">
            <Link
              href="/login"
              className="w-full text-base text-left p-4 hover:bg-black hover:text-white flex items-center font-medium"
              onClick={() => onOpenChange(false)}
            >
              Login
            </Link>
            <Link
              href="/login"
              className="w-full text-base text-left p-4 hover:bg-black hover:text-white flex items-center font-medium"
              onClick={() => onOpenChange(false)}
            >
              Register
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
