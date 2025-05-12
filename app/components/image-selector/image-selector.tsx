"use client"

// import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function ImageSelector() {
//   const [activeTab, setActiveTab] = useState("image")

  const images = [
    { id: 1, alt: "Modern interior living room", src: "/aa.png" },
    { id: 2, alt: "Winter landscape with trees", src: "/bb.png" },
    { id: 3, alt: "Blue app icon on blue background", src: "/cc.png" },
    { id: 4, alt: "Workspace with plants and devices", src: "/dd.png" },
    { id: 5, alt: "Coastal ocean landscape", src: "/ee.png" },
    { id: 6, alt: "Circular bracelet object", src: "/ff.png" },
    { id: 7, alt: "Meta logo on blue background", src: "/gg.png" },
    { id: 8, alt: "Minimal gray furniture scene", src: "/hh.png" },
    { id: 9, alt: "Purple abstract flower design", src: "/j.png" },
  ]

  return (
    <div className="w-64 border-r bg-white p-4 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Add Image</h2>

      <Tabs defaultValue="image" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="image">Image</TabsTrigger>
          <TabsTrigger value="upload">Upload</TabsTrigger>
        </TabsList>

        <TabsContent value="image" className="mt-0">
          <div className="relative mb-4">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search image" className="pl-8 bg-gray-50" />
          </div>

          <div className="grid grid-cols-3 gap-2">
            {images.map((image) => (
              <div key={image.id} className="cursor-pointer rounded-lg overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={100}
                  height={100}
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="upload" className="mt-0">
          <div className="flex items-center justify-center h-40 border border-dashed rounded-lg">
            <p className="text-sm text-gray-500">Drag and drop images here or click to upload</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
