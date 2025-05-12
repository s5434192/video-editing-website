import { StaticImageData } from "next/image"

export interface Template {
  id: string
  title: string
  image: string | StaticImageData
  category: string,
  type:string
}