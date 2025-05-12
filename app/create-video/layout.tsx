"use client";
import Link from "next/link";
import {
  Grid,
  ImageMinus,
  LayoutTemplate,
  Menu,
  Music,
  Shapes,
  Text,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";


import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "../../public/logo.png";
import VideoEditor from "../components/video-editor/VideoEditor";
import { DialogTitle } from "@/components/ui/dialog";
export const description =
  "A products dashboard with a sidebar navigation and a main content area. The dashboard has a header with a search input and a user menu. The sidebar has a logo, navigation links, and a card with a call to action. The main content area shows an empty state with a call to action.";

const navItems = [
  {
    name: "Templates",
    href: "/create-video/template",
    icon: <LayoutTemplate className="h-6 w-6" />,
  },
  {
    name: "Avatar",
    href: "/create-video/avatar",
    icon: <User className="h-4 w-6" />,
  },
  {
    name: "Text",
    href: "/create-video/text",
    icon: <Text className="h-6 w-6" />,
  },
  {
    name: "Background",
    href: "/create-video/background",
    icon: <Grid className="h-6 w-6" />,
  },
  {
    name: "Shapes",
    href: "/create-video/shapes",
    icon: <Shapes className="h-6 w-6" />,
  },
  {
    name: "Image",
    href: "/create-video/image",
    icon: <ImageMinus className="h-6 w-6" />,
  },
  {
    name: "Music",
    href: "/create-video/music",
    icon: <Music className="h-6 w-6" />,
  },
];
export default function Dashboard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[150px_1fr] lg:grid-cols-[150px_1fr]">
      <div className="hidden border-r bg-sidebar md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center justify-center px-4 lg:h-[80px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image width={25} height={22} alt="logo" src={logo} />
            </Link>
          </div>
         
          <div className="flex-1">
            <nav className="grid items-start px-2 py-1 text-sm font-medium lg:px-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex flex-col items-center text-[12px] gap-3 rounded-lg px-3 py-4 transition-all",
                      isActive
                        ? "bg-slate-800 text-white"
                        : "text-slate-400 hover:text-slate-100"
                    )}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
         
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[80px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col p-2">
              <DialogTitle className="text-lg font-semibold ">Ai Video</DialogTitle>
              <nav className="grid gap-2 text-lg font-medium">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex flex-col items-center text-lg font-semibold gap-3 py-2 rounded-lg transition-all",
                      isActive
                        ? "bg-slate-800 text-white"
                        : "text-slate-400 hover:text-slate-100"
                    )}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                );
              })}
                
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full">
            <VideoEditor/>
            </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
