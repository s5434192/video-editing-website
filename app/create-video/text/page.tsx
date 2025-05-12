
import { PresentationEditor } from "@/app/components/avatar/avatar-presentation-editor";
import { SlideNavigator } from "@/app/components/avatar/avatar-slide";
import { TextEditorSidebar } from "@/app/components/text/text";

export default function Text(){
    return (
            <div className="flex h-screen bg-gray-50">
                  <TextEditorSidebar />
                  <PresentationEditor />
                  <SlideNavigator />
                </div>
    )
}