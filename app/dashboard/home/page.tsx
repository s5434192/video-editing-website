import VideoList from "@/app/components/video-list/video-list";
import VideoTemplateSelector from "@/app/components/video-template-selector";


export default function CreateVideoPage() {
  return (
    <div className="container max-w-[72rem] py-8 px-4">
      <h1 className="text-2xl font-bold mb-8">Create new video</h1>
      <VideoTemplateSelector />
      <h1 className="text-2xl font-bold mb-8">Recent Video</h1>
      <VideoList/>
    </div>
  )
}