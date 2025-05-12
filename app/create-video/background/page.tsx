import { PresentationEditor } from "@/app/components/avatar/avatar-presentation-editor";
import { SlideNavigator } from "@/app/components/avatar/avatar-slide";
import { BackgroundSelector } from "@/app/components/background/background-selector";

export default function Avatar(){
    return (
            <div className="flex h-screen bg-gray-50">
                  <BackgroundSelector />
                  <PresentationEditor />
                  <SlideNavigator />
                </div>
    )
}