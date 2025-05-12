import { StaticImageData } from "next/image"

export type VideoCategory =
  | "All Video"
  | "Advertisement"
  | "Breaking News"
  | "Learning & Development"
  | "Explainer Video"
  | "Social Media"
  | "Others"

export interface VideoTemplate {
  id: string
  title: string
  image: string | StaticImageData
  category: VideoCategory
}