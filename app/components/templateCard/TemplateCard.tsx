import { VideoTemplate } from "@/app/types/VideoTemplate";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function TemplateCard({ template }: { template: VideoTemplate }) {
  return (
    <Card className="overflow-hidden rounded-2xl w-[90%] border-0 shadow-none cursor-pointer transition-shadow">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={template.image || "/placeholder.svg"}
          alt={template.title}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <CardContent className="p-3">
        <h3 className="text-base font-medium leading-snug line-clamp-2">
          {template.title}
        </h3>
      </CardContent>
    </Card>
  );
}
