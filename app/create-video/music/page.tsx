import { PresentationEditor } from "@/app/components/avatar/avatar-presentation-editor";
import { SlideNavigator } from "@/app/components/avatar/avatar-slide";
import { MusicSelector } from "@/app/components/music-selector/music-selector";

export default function Music(){
    return (
            <div className="flex h-screen bg-gray-50">
                  <MusicSelector />
                  <PresentationEditor />
                  <SlideNavigator />
                </div>
    )
}