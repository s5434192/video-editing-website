"use client"

// import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { templates } from "@/app/data/template"

export function TemplateSelector() {


  return (
    <div className="w-74 border-r bg-white p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Select templates</h2>

      <Tabs defaultValue="featured" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="featured">Featured templates</TabsTrigger>
          <TabsTrigger value="my">My templates</TabsTrigger>
        </TabsList>

        <TabsContent value="featured" className="mt-0">
          <div className="grid grid-cols-2 gap-2">
            {templates.map((template) => (
              <div key={template.id} className="cursor-pointer group">
                <div className="rounded-lg overflow-hidden border border-gray-200 group-hover:border-blue-500">
                  <Image
                    src={template.image || "/placeholder.svg"}
                    alt={template.title}
                    width={120}
                    height={80}
                    className="w-full h-auto object-cover aspect-video"
                  />
                </div>
                <p className="text-[10px] mt-1 text-gray-600 truncate">{template.title}</p>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="my" className="mt-0">
          <div className="flex items-center justify-center h-40 border border-dashed rounded-lg">
            <p className="text-sm text-gray-500">No custom templates yet</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
