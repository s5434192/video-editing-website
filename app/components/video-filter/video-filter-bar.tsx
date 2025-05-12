"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { LayoutGrid, List } from "lucide-react"

interface VideoFilterBarProps {
  onViewChange: (view: "grid" | "list") => void
  onTabChange: (tab: "video" | "trash") => void
  onDateFilterChange: (filter: string) => void
  onStatusFilterChange: (filter: string) => void
}

export default function VideoFilterBar({
  onViewChange,
  onTabChange,
  onDateFilterChange,
  onStatusFilterChange,
}: VideoFilterBarProps) {
  const [activeView, setActiveView] = useState<"grid" | "list">("list")

  const handleViewChange = (view: "grid" | "list") => {
    setActiveView(view)
    onViewChange(view)
  }

  return (
    <div className="flex items-center justify-between border-b pb-6 mb-10">
      <Tabs defaultValue="video" onValueChange={(value) => onTabChange(value as "video" | "trash")}>
        <TabsList className="bg-transparent p-0 h-auto">
          <TabsTrigger
            value="video"
            className="px-4 py-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-b-blue-600 data-[state=active]:font-extrabold rounded-none text-xl"
          >
            Video
          </TabsTrigger>
          <TabsTrigger
            value="trash"
            className="px-4 py-2 text-gray-500 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-b-blue-600 data-[state=active]:font-extrabold rounded-none text-xl"
          >
            Trash
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="flex items-center gap-2">
        <Select onValueChange={onDateFilterChange} defaultValue="all">
          <SelectTrigger className="w-[100px] border-gray-300 bg-white">
            <div className="flex items-center">
              <span>Date</span>
              {/* <ChevronDown className="ml-2 h-4 w-4" /> */}
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Dates</SelectItem>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="yesterday">Yesterday</SelectItem>
            <SelectItem value="last7days">Last 7 Days</SelectItem>
            <SelectItem value="last30days">Last 30 Days</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={onStatusFilterChange} defaultValue="all">
          <SelectTrigger className="w-[80px] border-gray-300 bg-white">
            <div className="flex items-center">
              <span>All</span>
              {/* <ChevronDown className="ml-2 h-4 w-4" /> */}
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex border rounded-md overflow-hidden">
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-none h-9 w-9 ${activeView === "grid" ? "bg-gray-100" : "bg-white"}`}
            onClick={() => handleViewChange("grid")}
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-none h-9 w-9 ${activeView === "list" ? "bg-gray-100" : "bg-white"}`}
            onClick={() => handleViewChange("list")}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
