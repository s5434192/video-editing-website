import { VideoTemplate } from "../types/VideoTemplate";
import first from '../../public/dashbord/sliderImage/news photo.png'
import second from '../../public/dashbord/sliderImage/Mask group (1).png'
import three from '../../public/dashbord/sliderImage/news photo (2).png'
import four from '../../public/dashbord/sliderImage/Mask group.png'
import five from '../../public/dashbord/sliderImage/Mask group (1).png'
import six from '../../public/dashbord/sliderImage/news photo (3).png'
export const videoTemplates: VideoTemplate[] = [
    {
      id: "1",
      title: "International News tv Channel",
      image: first,
      category: "Breaking News",
    },
    {
      id: "2",
      title: "Product Selling Video",
      image: second,
      category: "Advertisement",
    },
    {
      id: "3",
      title: "Collection Video",
      image: three,
      category: "Social Media",
    },
    {
      id: "4",
      title: "Man stand by road",
      image: four,
      category: "Breaking News",
    },
    {
      id: "5",
      title: "Smart Watch collection",
      image: five,
      category: "Advertisement",
    },
    {
      id: "6",
      title: "Organic Food Menu",
      image: six,
      category: "Others",
    },
    {
      id: "7",
      title: "Tech Review",
      image: first,
      category: "Explainer Video",
    },
    {
      id: "8",
      title: "Educational Tutorial",
      image: three,
      category: "Learning & Development",
    },
  ]