"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Card, CardContent } from "@/components/ui/card"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import Image from "next/image"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { TemplateCard } from "./templateCard/TemplateCard";
import { videoTemplates } from "../data/videoTemplate";
import { VideoCategory } from "../types/VideoTemplate";
import { MoveRight } from "lucide-react";

// type VideoCategory =
//   | "All Video"
//   | "Advertisement"
//   | "Breaking News"
//   | "Learning & Development"
//   | "Explainer Video"
//   | "Social Media"
//   | "Others"

// interface VideoTemplate {
//   id: string
//   title: string
//   image: string
//   category: VideoCategory
// }

// const videoTemplates: VideoTemplate[] = [
//   {
//     id: "1",
//     title: "International News tv Channel",
//     image: "/placeholder.svg?height=200&width=200",
//     category: "Breaking News",
//   },
//   {
//     id: "2",
//     title: "Product Selling Video",
//     image: "/placeholder.svg?height=200&width=200",
//     category: "Advertisement",
//   },
//   {
//     id: "3",
//     title: "Collection Video",
//     image: "/placeholder.svg?height=200&width=200",
//     category: "Social Media",
//   },
//   {
//     id: "4",
//     title: "Man stand by road",
//     image: "/placeholder.svg?height=200&width=200",
//     category: "Breaking News",
//   },
//   {
//     id: "5",
//     title: "Smart Watch collection",
//     image: "/placeholder.svg?height=200&width=200",
//     category: "Advertisement",
//   },
//   {
//     id: "6",
//     title: "Organic Food Menu",
//     image: "/placeholder.svg?height=200&width=200",
//     category: "Others",
//   },
//   {
//     id: "7",
//     title: "Tech Review",
//     image: "/placeholder.svg?height=200&width=200",
//     category: "Explainer Video",
//   },
//   {
//     id: "8",
//     title: "Educational Tutorial",
//     image: "/placeholder.svg?height=200&width=200",
//     category: "Learning & Development",
//   },
// ]

export default function VideoTemplateSelector() {
  const [selectedCategory, setSelectedCategory] =
    useState<VideoCategory>("All Video");

  const filteredTemplates =
    selectedCategory === "All Video"
      ? videoTemplates
      : videoTemplates.filter(
          (template) => template.category === selectedCategory
        );

  return (
    <div className="space-y-6">
      <Tabs
        defaultValue="All Video"
        className="w-full"
        onValueChange={(value) => setSelectedCategory(value as VideoCategory)}
      >
        {/* <div className="overflow-x-auto"> */}
        <TabsList className="grid grid-cols-7 max-w-full h-auto bg-gray-100 p-4 rounded-full">
            <TabsTrigger
              value="All Video"
              className="rounded-full px-4 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              All Video
            </TabsTrigger>
            <TabsTrigger
              value="Advertisement"
              className="rounded-full px-4 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Advertisement
            </TabsTrigger>
            <TabsTrigger
              value="Breaking News"
              className="rounded-full px-4 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Breaking News
            </TabsTrigger>
            <TabsTrigger
              value="Learning & Development"
              className="rounded-full px-4 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Learning & Development
            </TabsTrigger>
            <TabsTrigger
              value="Explainer Video"
              className="rounded-full px-4 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Explainer Video
            </TabsTrigger>
            <TabsTrigger
              value="Social Media"
              className="rounded-full px-4 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Social Media
            </TabsTrigger>
            <TabsTrigger
              value="Others"
              className="rounded-full px-4 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Others
            </TabsTrigger>
          </TabsList>
        {/* </div> */}
      </Tabs>

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          //   spaceBetween={16}
          slidesPerView={3}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 16,
            },
          }}
          className="w-full"
        >
          {filteredTemplates.map((template) => (
            <SwiperSlide key={template.id}>
              <TemplateCard template={template} />
              {/* <p>{template.title}</p> */}
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-next absolute right-0 top-1/2 -translate-y-8 z-10 bg-white rounded-full  flex items-center justify-center shadow-md cursor-pointer">
          <MoveRight className="w-5 h-5 text-primary" />
        </div>
      </div>
    </div>
  ); 
}
