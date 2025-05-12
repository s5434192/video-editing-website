import { PresentationEditor } from "@/app/components/avatar/avatar-presentation-editor";
import { SlideNavigator } from "@/app/components/avatar/avatar-slide";
import { ElementsSelector } from "@/app/components/element-selector/element-selector";

export default function Avatar(){
    return (
            <div className="flex h-screen bg-gray-50">
                  <ElementsSelector />
                  <PresentationEditor />
                  <SlideNavigator />
                </div>
    )
}