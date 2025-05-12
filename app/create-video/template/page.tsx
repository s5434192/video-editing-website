import { PresentationEditor } from "@/app/components/presentation-editor/PresentationEditor";
import { SlideNavigator } from "@/app/components/slide-navigator/SlideNavigator";
import { TemplateSelector } from "@/app/components/template-selector/TemplateSelector";

export default function Templaate(){
return(
    <div className="flex h-screen bg-gray-50">
      <TemplateSelector  />
      <PresentationEditor />
      <SlideNavigator />
    </div>
)
}