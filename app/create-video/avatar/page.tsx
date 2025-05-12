import { PresentationEditor } from "@/app/components/avatar/avatar-presentation-editor";
import { SlideNavigator } from "@/app/components/avatar/avatar-slide";
import SelectAvatar from "@/app/components/avatar/select-avatar";

export default function Avatar(){
    return (
            <div className="flex h-screen bg-gray-50">
                  <SelectAvatar />
                  <PresentationEditor />
                  <SlideNavigator />
                </div>
    )
}