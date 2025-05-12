"use client"

import { Button } from "@/components/ui/button"

export function TextEditorSidebar() {
  return (
    <div className="w-64 border-r bg-white p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Add Text</h2>

      <div className="space-y-2 mb-4">
        <Button
          variant="outline"
          className="w-full justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-extrabold text-xl"
        >
          Add Title
        </Button>

        <Button
          variant="outline"
          className="w-full justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 text-[20px] font-medium"
        >
          Add Subtitle
        </Button>

        <Button
          variant="outline"
          className="w-full justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium"
        >
          Add Body Text
        </Button>
      </div>

      <div className="space-y-3">
        {/* Template 1 - Pink UI Design Plan */}
        <div className="border rounded-lg p-4 cursor-pointer hover:border-blue-500 bg-gray-50">
          <div className="text-center">
            <p className="text-pink-500 font-bold text-sm">UI DESIGN PLAN</p>
            <p className="text-pink-400 text-xs">Let&lsquo;s make a great UI!</p>
          </div>
        </div>

        {/* Template 2 - Blue Design Study */}
        <div className="border rounded-lg p-4 cursor-pointer hover:border-blue-500 bg-gray-50">
          <div className="text-center">
            <p className="text-blue-600 font-bold text-sm">DESIGN STUDY</p>
            <p className="text-blue-600 font-bold text-sm">DEADLINE</p>
            <p className="text-blue-600 font-bold text-sm">NEWSLETTER</p>
          </div>
        </div>

        {/* Template 3 - Blue Design Study (Alternative) */}
        <div className="border rounded-lg p-4 cursor-pointer hover:border-blue-500 bg-gray-50">
          <div className="text-center">
            <p className="text-blue-500 font-bold text-sm">DESIGN STUDY</p>
            <p className="text-blue-500 font-bold text-sm">DEADLINE</p>
            <p className="text-blue-500 font-bold text-sm">NEWSLETTER</p>
          </div>
        </div>

        {/* Template 4 - Teal UI Design Plan */}
        <div className="border rounded-lg p-4 cursor-pointer hover:border-blue-500 bg-gray-50">
          <div className="text-center">
            <p className="text-teal-500 font-bold text-sm">UI DESIGN</p>
            <p className="text-teal-500 font-bold text-sm">PLAN</p>
          </div>
        </div>
      </div>
    </div>
  )
}
