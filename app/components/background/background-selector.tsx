"use client"

// import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function BackgroundSelector() {
//   const [activeTab, setActiveTab] = useState("color")

  const solidColors = [
    { name: "Blue", color: "#2563eb" },
    { name: "Pink", color: "#f472b6" },
    { name: "Sky Blue", color: "#0dcaf0" },
    { name: "Green", color: "#22c55e" },
    { name: "Red", color: "#f87171" },
    { name: "Orange", color: "#fb923c" },
    { name: "Yellow", color: "#fcd34d" },
    { name: "Warm white", color: "#e2e8f0" },
    { name: "Soft Black", color: "#64748b" },
    { name: "Blue", color: "#06b6d4" },
    { name: "Teal", color: "#0d9488" },
    { name: "Lavender", color: "#e9d5ff" },
  ]

  const gradients = [
    { name: "Art Gra", gradient: "linear-gradient(to right, #f97316, #ec4899, #8b5cf6)" },
    { name: "Zoom Bag", gradient: "linear-gradient(to right, #f472b6, #22c55e, #3b82f6)" },
    { name: "HP Wallp", gradient: "linear-gradient(to right, #8b5cf6, #6366f1, #0ea5e9)" },
    { name: "Pink Wall", gradient: "linear-gradient(to right, #fcd34d, #f97316, #f472b6)" },
    { name: "Color Gra", gradient: "linear-gradient(to right, #60a5fa, #3b82f6, #1d4ed8)" },
    { name: "Texar Gra", gradient: "linear-gradient(to right, #020617, #1e293b, #0f172a)" },
  ]

  return (
    <div className="w-64 border-r bg-white p-4 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Select Background</h2>

      <Tabs defaultValue="color" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-4">
          <TabsTrigger value="color">Color</TabsTrigger>
          <TabsTrigger value="image">Image</TabsTrigger>
          <TabsTrigger value="video">Video</TabsTrigger>
          <TabsTrigger value="upload">Upload</TabsTrigger>
        </TabsList>

        <TabsContent value="color" className="mt-0">
          <div className="relative mb-4">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search color" className="pl-8 bg-gray-50" />
          </div>

          <div className="grid grid-cols-3 gap-2 mb-2">
            {solidColors.map((color, index) => (
              <div key={index} className="cursor-pointer flex flex-col items-center">
                <div className="w-16 h-12 rounded-lg mb-1" style={{ backgroundColor: color.color }}></div>
                <span className="text-xs text-gray-700">{color.name}</span>
              </div>
            ))}
          </div>

          <button className="text-sm text-gray-600 mb-6">See All</button>

          <h3 className="font-medium mb-3">Gradient</h3>

          <div className="grid grid-cols-3 gap-2 mb-2">
            {gradients.map((gradient, index) => (
              <div key={index} className="cursor-pointer flex flex-col items-center">
                <div className="w-16 h-12 rounded-lg mb-1" style={{ background: gradient.gradient }}></div>
                <span className="text-xs text-gray-700">{gradient.name}</span>
              </div>
            ))}
          </div>

          <button className="text-sm text-gray-600">See All</button>
        </TabsContent>

        <TabsContent value="image" className="mt-0">
          <div className="flex items-center justify-center h-40 border border-dashed rounded-lg">
            <p className="text-sm text-gray-500">Image options will appear here</p>
          </div>
        </TabsContent>

        <TabsContent value="video" className="mt-0">
          <div className="flex items-center justify-center h-40 border border-dashed rounded-lg">
            <p className="text-sm text-gray-500">Video options will appear here</p>
          </div>
        </TabsContent>

        <TabsContent value="upload" className="mt-0">
          <div className="flex items-center justify-center h-40 border border-dashed rounded-lg">
            <p className="text-sm text-gray-500">Upload options will appear here</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
