"use client";

import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Download, Share2, Video } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image, { StaticImageData } from "next/image";
import image1 from "../../../public/dashbord/photo.png";
import image2 from "../../../public/dashbord/photo (1).png";
import image3 from "../../../public/dashbord/photo (2).png";
import image4 from "../../../public/dashbord/photo (3).png";

interface VideoItem {
  id: string;
  title: string;
  date: string;
  duration: string;
  avatar: string | StaticImageData;
  selected?: boolean;
}

interface VideoListProps {
  view?: "grid" | "list";
  tab?: "video" | "trash";
  dateFilter?: string;
  statusFilter?: string;
}
export default function VideoList({ view = "list" }: VideoListProps) {
  const [videos, setVideos] = useState<VideoItem[]>([
    {
      id: "1",
      title: "Create your fist video with Lumeo",
      date: "21 June",
      duration: "1:05 s",
      avatar: image1,
    },
    {
      id: "2",
      title: "add text & elements to your video",
      date: "19 June",
      duration: "1:05 s",
      avatar: image2,
      selected: true,
    },
    {
      id: "3",
      title: "add music your own video",
      date: "16 June",
      duration: "1:05 s",
      avatar: image3,
    },
    {
      id: "4",
      title: "add music your own video",
      date: "16 June",
      duration: "1:05 s",
      avatar: image4,
    },
    {
      id: "5",
      title: "add text & elements to your video",
      date: "19 June",
      duration: "1:05 s",
      avatar: image2,
    },
    {
      id: "6",
      title: "add music your own video",
      date: "16 June",
      duration: "1:05 s",
      avatar: image3,
    },
    // {
    //   id: "7",
    //   title: "add music your own video",
    //   date: "16 June",
    //   duration: "1:05 s",
    //   avatar: image4,
    // },
  ]);

  const handleSelect = (id: string) => {
    setVideos(
      videos.map((video) => ({
        ...video,
        selected: video.id === id,
      }))
    );
  };

  return (
    <div className="w-full">
      <div className="hidden md:grid grid-cols-3 text-sm text-gray-500 mb-2 px-4">
        <div>Name</div>
        <div className="text-center">Status</div>
        <div className="text-right">Action</div>
      </div>
      <div
        className={
          view === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            : "space-y-2"
        }
      >
        {videos.map((video) => (
          <div
            key={video.id}
            className={`rounded-lg p-4 transition-colors ${
              video.selected
                ? "border border-blue-500 bg-blue-50"
                : "bg-gray-50 hover:bg-gray-100"
            }`}
            onClick={() => handleSelect(video.id)}
          >
            <div
              className={
                view === "grid"
                  ? "flex flex-col gap-4"
                  : "grid grid-cols-3 items-center"
              }
            >
              <div
                className={
                  view === "grid"
                    ? "flex flex-col items-center gap-3"
                    : "flex items-center gap-3"
                }
              >
                <Avatar className="h-12 w-12 rounded-full">
                  <Image
                    src={video.avatar || "/placeholder.svg"}
                    alt={video.title}
                    className="object-cover"
                    height={80}
                    width={80}
                  />
                </Avatar>
                <div className={view === "grid" ? "text-center" : ""}>
                  <h3 className="font-medium text-gray-900">{video.title}</h3>
                  <p className="text-sm text-gray-500">{video.date}</p>
                </div>
              </div>
              <div
                className={
                  view === "grid"
                    ? "flex justify-center"
                    : "flex justify-center"
                }
              >
                <div className="flex items-center gap-1 bg-pink-500 text-white px-3 py-1 rounded-md">
                  <Video className="h-4 w-4" />
                  <span className="text-sm">{video.duration}</span>
                </div>
              </div>
              <div
                className={
                  view === "grid"
                    ? "flex justify-center gap-2"
                    : "flex justify-end gap-2"
                }
              >
                <Button
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-9 w-9">
                      <MoreHorizontal className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-500">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
