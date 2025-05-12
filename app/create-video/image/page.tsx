import { PresentationEditor } from "@/app/components/avatar/avatar-presentation-editor";
import { SlideNavigator } from "@/app/components/avatar/avatar-slide";
import { ImageSelector } from "@/app/components/image-selector/image-selector";

export default function Avatar(){
    return (
            <div className="flex h-screen bg-gray-50">
                  <ImageSelector />
                  <PresentationEditor />
                  <SlideNavigator />
                </div>
    )
}