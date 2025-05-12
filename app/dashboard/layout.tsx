"use client";
import Link from "next/link";
import {
  Bell,
  HomeIcon,
  LayoutTemplate,
  Menu,
  Plus,
  Search,
  Upload,
  UserCircle,
  Video,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "../../public/logo.png";
import { DialogTitle } from "@/components/ui/dialog";
export const description =
  "A products dashboard with a sidebar navigation and a main content area. The dashboard has a header with a search input and a user menu. The sidebar has a logo, navigation links, and a card with a call to action. The main content area shows an empty state with a call to action.";

const navItems = [
  {
    name: "Home",
    href: "/dashboard/home",
    icon: <HomeIcon className="h-4 w-4" />,
  },
  {
    name: "Video",
    href: "/dashboard/video",
    icon: <Video className="h-4 w-4" />,
  },
  {
    name: "Templates",
    href: "/dashboard/templates",
    icon: <LayoutTemplate className="h-4 w-4" />,
  },
  {
    name: "Avatars",
    href: "/dashboard/avatars",
    icon: <UserCircle className="h-4 w-4" />,
  },
  {
    name: "Assets",
    href: "/dashboard/assets",
    icon: <Upload className="h-4 w-4" />,
  },
];
export default function Dashboard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-sidebar md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center  px-4 lg:h-[80px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image width={25} height={22} alt="logo" src={logo} />
              <span className="text-white">AI video</span>
            </Link>
          </div>
          <div className="flex justify-center items-center mt-4">
            <Link href="/create-video/">
              <Button className="!px-14 py-6">
                <Plus className="" />
                Create New
              </Button>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 py-14 text-sm font-medium lg:px-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center text-[18px] gap-3 rounded-lg px-3 py-4 transition-all",
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
            <DialogTitle className="text-lg font-semibold">Ai Video</DialogTitle>
              <nav className="grid gap-2 text-lg font-medium">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-2 text-lg font-semibold",
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
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full appearance-none text-primary rounded-xl border-0 bg-[#F4F6FB] py-7 pl-10 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <Link href="/create-video/">
            <Button className="!px-8 py-6 flex gap-4">
              <Plus className="" />
              Create Video
            </Button>
          </Link>
          <div className="flex justify-center items-center h-10 w-10 border rounded-full">
            <Bell className="h-4 w-4" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
