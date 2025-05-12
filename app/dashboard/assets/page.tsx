"use client";

import VideoList from "@/app/components/video-list/video-list";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { LayoutGrid, List, Plus, Upload, } from "lucide-react";
import { useState } from "react";

export default function Assets() {
  const [activeView, setActiveView] = useState<"grid" | "list">("grid");
  const [filter, setFilter] = useState<string>("All");
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">My assets</h1>

        <div className="flex items-center gap-2">
          <Button className="bg-emerald-500 hover:bg-emerald-600">
            <Plus className="" />
            New Folder
          </Button>
          <div className="flex border rounded-md overflow-hidden">
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-none h-9 w-9 ${
                activeView === "grid" ? "bg-gray-100" : "bg-white"
              }`}
              onClick={() => setActiveView("grid")}
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-none h-9 w-9 ${
                activeView === "list" ? "bg-gray-100" : "bg-white"
              }`}
              onClick={() => setActiveView("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">
          Item <span className="text-gray-500">05</span>
        </h1>
        <div className="flex items-center gap-4">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Upload className="mr-2 h-4 w-4" />
            Upload
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="min-w-[80px]">
                {filter}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-4 w-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end"  className="bg-white dark:bg-gray-800 p-4 shadow-md rounded-md">
              <DropdownMenuItem color="red" onClick={() => setFilter("All")}>
                All
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter("Videos")}>
                Videos
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter("Images")}>
                Images
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <VideoList />
    </div>
  );
}
