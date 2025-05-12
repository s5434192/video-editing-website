"use client";

// import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";

export function ElementsSelector() {
  //   const [activeTab, setActiveTab] = useState("shape")

  const shapes = [
    {
      name: "Circle",
      type: "filled",
      svg: <circle cx="25" cy="25" r="20" fill="#2563eb" />,
    },
    {
      name: "Square",
      type: "filled",
      svg: <rect x="5" y="5" width="40" height="40" fill="#2563eb" />,
    },
    {
      name: "Triangle",
      type: "filled",
      svg: <polygon points="25,5 45,45 5,45" fill="#2563eb" />,
    },
    {
      name: "Circle",
      type: "outline",
      svg: (
        <circle
          cx="25"
          cy="25"
          r="20"
          stroke="#2563eb"
          fill="none"
          strokeWidth="2"
        />
      ),
    },
    {
      name: "Square",
      type: "outline",
      svg: (
        <rect
          x="5"
          y="5"
          width="40"
          height="40"
          stroke="#2563eb"
          fill="none"
          strokeWidth="2"
        />
      ),
    },
    {
      name: "Triangle",
      type: "outline",
      svg: (
        <polygon
          points="25,5 45,45 5,45"
          stroke="#2563eb"
          fill="none"
          strokeWidth="2"
        />
      ),
    },
  ];

  const stickers = [
    { name: "Facebook", image: "/fb.png" },
    { name: "Instagram", image: "/socialc.png" },
    { name: "LinkedIn", image: "/skype.png" },
    { name: "Spotify", image: "/socialb.png" },
    { name: "Discord", image: "/social.png" },
    { name: "Photos", image: "/new.png" },
  ];

  const icons = [
    {
      name: "Store",
      svg: (
        <path
          d="M5,15V10H45V15L42,20H8L5,15ZM10,25H40V45H10V25ZM15,25V40H35V25H15Z"
          fill="#2563eb"
        />
      ),
    },
    {
      name: "Basket",
      svg: (
        <path d="M15,10L5,25H45L35,10H15ZM10,30V45H40V30H10Z" fill="#2563eb" />
      ),
    },
    {
      name: "Gift",
      svg: (
        <path
          d="M10,15H40V25H10V15ZM20,25V45H30V25H20ZM25,10C20,10 20,5 25,5C30,5 30,10 25,10Z"
          fill="#2563eb"
        />
      ),
    },
    {
      name: "Basketball",
      svg: <circle cx="25" cy="25" r="20" fill="#2563eb" />,
    },
    {
      name: "Briefcase",
      svg: (
        <path d="M15,15H35V10H15V15ZM10,15V45H40V15H35H15H10Z" fill="#2563eb" />
      ),
    },
    {
      name: "Blocks",
      svg: (
        <path
          d="M10,30H20V40H10V30ZM30,30H40V40H30V30ZM20,20H30V30H20V20Z"
          fill="#2563eb"
        />
      ),
    },
  ];

  return (
    <div className="w-64 border-r bg-white p-4 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Add Elements</h2>

      <Tabs defaultValue="shape" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-4">
          <TabsTrigger value="shape">Shape</TabsTrigger>
          <TabsTrigger value="sticker">Sticker</TabsTrigger>
          <TabsTrigger value="icon">Icon</TabsTrigger>
          <TabsTrigger value="upload">Upload</TabsTrigger>
        </TabsList>

        <TabsContent value="shape" className="mt-0">
          <div className="relative mb-4">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search shape" className="pl-8 bg-gray-50" />
          </div>

          <h3 className="font-medium mb-3">Shape</h3>

          <div className="grid grid-cols-3 gap-2 mb-2">
            {shapes.map((shape, index) => (
              <div
                key={index}
                className="cursor-pointer bg-gray-100 rounded-md p-2 flex items-center justify-center"
              >
                <svg width="50" height="50" viewBox="0 0 50 50">
                  {shape.svg}
                </svg>
              </div>
            ))}
          </div>

          <button className="text-sm text-gray-600 mb-6">See All</button>

          <h3 className="font-medium mb-3">Sticker</h3>

          <div className="grid grid-cols-3 gap-2 mb-2">
            {stickers.map((sticker, index) => (
              <div
                key={index}
                className="cursor-pointer bg-gray-900 rounded-md overflow-hidden"
              >
                <Image
                  src={sticker.image || "/placeholder.svg"}
                  alt={sticker.name}
                  height={30}
                  width={30}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>

          <button className="text-sm text-gray-600 mb-6">See All</button>

          <h3 className="font-medium mb-3">Icon</h3>

          <div className="grid grid-cols-3 gap-2 mb-2">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="cursor-pointer bg-gray-100 rounded-md p-2 flex items-center justify-center"
              >
                <svg width="50" height="50" viewBox="0 0 50 50">
                  {icon.svg}
                </svg>
              </div>
            ))}
          </div>

          <button className="text-sm text-gray-600">See All</button>
        </TabsContent>

        <TabsContent value="sticker" className="mt-0">
          <div className="flex items-center justify-center h-40 border border-dashed rounded-lg">
            <p className="text-sm text-gray-500">
              Sticker options will appear here
            </p>
          </div>
        </TabsContent>

        <TabsContent value="icon" className="mt-0">
          <div className="flex items-center justify-center h-40 border border-dashed rounded-lg">
            <p className="text-sm text-gray-500">
              Icon options will appear here
            </p>
          </div>
        </TabsContent>

        <TabsContent value="upload" className="mt-0">
          <div className="flex items-center justify-center h-40 border border-dashed rounded-lg">
            <p className="text-sm text-gray-500">
              Upload options will appear here
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
