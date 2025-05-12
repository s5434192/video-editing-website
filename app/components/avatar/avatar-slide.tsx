"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { avatars } from "@/app/data/avatars"


export function SlideNavigator() {
  const [visibleCount, setVisibleCount] = useState(2)

  const visibleSlides = avatars.slice(0, visibleCount).map((template) => ({
    id: template.id,
    title: template.title,
    image: template.image || "/placeholder.svg",
  }))

  const addSlide = () => {
    if (visibleCount < avatars.length) {
      setVisibleCount(visibleCount + 1)
    }
  }

  return (
    <div className="w-64 border-l bg-white p-4 overflow-y-auto">
      <div className="space-y-8 mt-6">
        {visibleSlides.map((slide, index) => (
          <div key={slide.id} className="relative">
            <div className="absolute -top-3.5 -left-3  -translate-y-1/2 bg-blue-600 text-white text-xs font-medium py-1 px-2 rounded">
              S{index + 1}
            </div>
            <div className="border rounded-lg overflow-hidden cursor-pointer hover:border-blue-500">
              <div className="bg-gradient-to-br from-indigo-400 to-purple-600 aspect-video relative">
                <Image
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  width={222}
                  height={129}
                  className="object-contain absolute inset-0 m-auto"
                />
                {slide.title && (
                  <div className="absolute bottom-2 left-2 text-center text-red text-xs font-medium">
                    {slide.title}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {visibleCount < avatars.length && (
          <Button
            variant="outline"
            className="w-full justify-center text-blue-600 border-dashed"
            onClick={addSlide}
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Template
          </Button>
        )}
      </div>
    </div>
  )
}
