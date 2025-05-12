"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

interface VideoSummaryModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave?: (data: VideoSummaryData) => void
}

interface VideoSummaryData {
  title: string
  description: string
  script: string
  voice: string
}

export function VideoSummaryModal({ open, onOpenChange, onSave }: VideoSummaryModalProps) {
  const [data, setData] = useState<VideoSummaryData>({
    title: "",
    description: "",
    script: "Hi! I am Delowar here...",
    voice: "Aria (US)",
  })

  const handleChange = (field: keyof VideoSummaryData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    if (onSave) {
      onSave(data)
    }
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-0 gap-0 overflow-hidden">
        <div className="relative p-6 pb-0 flex flex-col items-center">
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>

          <div className="h-16 w-16 rounded-full overflow-hidden mb-3 bg-gray-100">
            <Image
              src="/avatar.png"
              alt="Avatar"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>

          <DialogTitle className="text-lg font-semibold mb-4">Video Summary</DialogTitle>

        </div>

        <div className="p-6 pt-4 space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Title
            </label>
            <Input
              id="title"
              placeholder="Video Title"
              value={data.title}
              onChange={(e) => handleChange("title", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <Textarea
              id="description"
              placeholder="Add your description"
              value={data.description}
              onChange={(e) => handleChange("description", e.target.value)}
              rows={2}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="script" className="text-sm font-medium">
              Script
            </label>
            <div className="border rounded-md p-3 bg-gray-50 text-sm">{data.script}</div>
          </div>

          <div className="space-y-2">
            <label htmlFor="voice" className="text-sm font-medium">
              Voice
            </label>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 border rounded px-2 py-1">
                <span className="w-4 h-4 rounded-full bg-red-500"></span>
                <span className="text-xs">{data.voice}</span>
              </div>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Code className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-end space-x-2 pt-2">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save video</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
