"use client";

import type React from "react";

import { useState } from "react";
import { ChevronLeft, CornerUpLeft, CornerUpRight, Edit, LaptopMinimal, Play, Scan, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { VideoSummaryModal } from "../video-modal/video-modal";


export function VideoEditor({ onPlay }: { onPlay?: () => void }) {
  const [title, setTitle] = useState<string>("Type your video title here");
  const [aspectRatio, setAspectRatio] = useState<string>("1:1");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleAspectRatioChange = (value: string) => {
    if (value) setAspectRatio(value);
  };

  return (
    <>
    <div className="flex items-center justify-between w-full bg-gray-50 rounded-lg p-2">
      <div className="flex items-center gap-2">
        <ChevronLeft className="h-5 w-5 text-gray-500" />
        {isEditing ? (
          <Input
            value={title}
            onChange={handleTitleChange}
            className="h-8 w-64 border-none focus-visible:ring-0 focus-visible:ring-offset-0 p-0 text-sm"
            onBlur={() => setIsEditing(false)}
            autoFocus
          />
        ) : (
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{title}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={() => setIsEditing(true)}
            >
              <Edit className="h-3.5 w-3.5" />
            </Button>
          </div>
        )}
      </div>
      <div>
        <ToggleGroup
          type="single"
          value={aspectRatio}
          onValueChange={handleAspectRatioChange}
        >
          <div className="flex items-center gap-2 bg-white rounded-md p-3 border">
            <ToggleGroupItem value="16:10" className="text-xs px-6 py-1 h-auto">
              <span className="flex items-center gap-1">
                <span className="i-monitor text-xs"><LaptopMinimal className="h-6 w-6"/></span> 16:10
              </span>
            </ToggleGroupItem>
            <ToggleGroupItem value="9:16" className="text-xs px-3 py-1 h-auto">
              <span className="flex items-center gap-1">
                <span className="i-smartphone text-xs"><Smartphone className="h-6 w-6"/></span> 9:16
              </span>
            </ToggleGroupItem>
            <ToggleGroupItem value="1:1" className="text-xs px-3 py-1 h-auto">
              <span className="flex items-center gap-1">
                <span className="i-square text-xs"><Scan className="h-6 w-6"/></span> 1:1
              </span>
            </ToggleGroupItem>
          </div>
        </ToggleGroup>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <CornerUpLeft className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <CornerUpRight className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="default"
            size="sm"
            className="bg-blue-600 hover:bg-blue-700"
            onClick={onPlay}
          >
            <Play className="h-4 w-4 mr-1" />P lay
          </Button>
          <Button variant="default" size="sm" onClick={() => setIsModalOpen(true)}>
            Generate video
          </Button>
        </div>
      </div>
    </div>
    <VideoSummaryModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
}

export default VideoEditor;
