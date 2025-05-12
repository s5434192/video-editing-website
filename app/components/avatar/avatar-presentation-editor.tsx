"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Info, Code } from "lucide-react"
import image1 from '../../../public/avatar profile.png'
export function PresentationEditor() {
  const [speechText, setSpeechText] = useState(
    "Hi! I'm delowar and today I'm going to talk about the top new technology trends.",
  )

  return (
    <div className="flex-1 flex flex-col">
      {/* Preview area */}
      <div className="flex-1 p-6 flex items-center justify-center">
        <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden relative">
          {/* <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-600"></div> */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={image1}
              alt="Brain visualization"
              width={772}
              height={678}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Controls area */}
      <div className="bg-white border-t p-4">
        <div className="flex items-center gap-4 mb-4">
          <Button
            variant="default"
            className="bg-blue-600 hover:bg-blue-700 rounded-full h-8 w-8 p-0 flex items-center justify-center"
          >
            <span className="sr-only">Play</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3L19 12L5 21V3Z" fill="currentColor" />
            </svg>
          </Button>

          <Tabs defaultValue="speech" className="flex-1">
            <TabsList className="bg-transparent p-0 h-auto gap-4">
              <TabsTrigger
                value="speech"
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-blue-600 px-0 h-auto"
              >
                <span className="flex items-center gap-1 text-sm">
                  Speech text 4.9s
                  <Info className="h-4 w-4 text-blue-600" />
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="upload"
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-blue-600 px-0 h-auto"
              >
                <span className="text-sm">Upload voice</span>
              </TabsTrigger>
              <TabsTrigger
                value="none"
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-blue-600 px-0 h-auto"
              >
                <span className="text-sm">No speech</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 border rounded px-2 py-1">
              <span className="w-4 h-4 rounded-full bg-red-500"></span>
              <span className="text-xs">Aria (US)</span>
            </div>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <Code className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Textarea
          value={speechText}
          onChange={(e) => setSpeechText(e.target.value)}
          className="w-full resize-none border rounded-md p-3"
          rows={3}
        />
      </div>
    </div>
  )
}
