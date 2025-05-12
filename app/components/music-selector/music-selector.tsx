"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MusicSelector() {

  const musicTracks = [
    { id: 1, title: "Driving Ambition", category: "Corporate", description: "Epic Motivational Uplifting" },
    { id: 2, title: "Dance with me", category: "Corporate", description: "Epic Motivational Uplifting" },
    { id: 3, title: "Raising me higher", category: "Corporate", description: "Epic Motivational Uplifting" },
    { id: 4, title: "Bridge", category: "Corporate", description: "Epic Motivational Uplifting" },
    { id: 5, title: "Life is a dream", category: "Corporate", description: "Epic Motivational Uplifting" },
    { id: 6, title: "Stay with me", category: "Corporate", description: "Epic Motivational Uplifting" },
    { id: 7, title: "Driving Ambition", category: "Corporate", description: "Epic Motivational Uplifting" },
    { id: 8, title: "Dance with me", category: "Corporate", description: "Epic Motivational Uplifting" },
    { id: 9, title: "Bridge", category: "Corporate", description: "Epic Motivational Uplifting" },
  ]

  return (
    <div className="w-64 border-r bg-white p-4 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Add Image</h2>

      <Tabs defaultValue="stock" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="stock">Stock Music</TabsTrigger>
          <TabsTrigger value="upload">Upload</TabsTrigger>
        </TabsList>

        <TabsContent value="stock" className="mt-0">
          <div className="relative mb-4">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search music" className="pl-8 bg-gray-50" />
          </div>

          <div className="space-y-1">
            {musicTracks.map((track) => (
              <div key={track.id} className="border rounded-md shadow p-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex justify-between items-center">

                    <h3 className="text-sm font-medium">{track.title}</h3>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-gray-200">
                    <Play className="h-4 w-4" />
                  </Button>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-blue-600">{track.category}</span>
                      <span className="text-xs text-gray-600">{track.description}</span>
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="upload" className="mt-0">
          <div className="flex items-center justify-center h-40 border border-dashed rounded-lg">
            <p className="text-sm text-gray-500">Drag and drop audio files here or click to upload</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
