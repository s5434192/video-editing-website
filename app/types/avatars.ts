import { StaticImageData } from "next/image"

export interface Avatars {
  id: string
  title: string
  image: string | StaticImageData
  category: string
  type: string
}