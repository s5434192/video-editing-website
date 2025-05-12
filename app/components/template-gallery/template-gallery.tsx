"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutGrid, List } from "lucide-react";
import Image from "next/image";
import { templates } from "@/app/data/template";

export default function TemplateGallery() {
  const [activeView, setActiveView] = useState<"grid" | "list">("grid");
  const [activeTab, setActiveTab] = useState<"features" | "my">("features");

  const filteredTemplates = templates.filter(
    (template) => template.type === activeTab
  );

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <div className="bg-gray-100 rounded-full p-1">
          <Tabs
            defaultValue="features"
            onValueChange={(value) => setActiveTab(value as "features" | "my")}
            className="w-full"
          >
            <TabsList className="bg-transparent h-auto p-0">
              <TabsTrigger
                value="features"
                className="rounded-full px-5 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                Features Templates
              </TabsTrigger>
              <TabsTrigger
                value="my"
                className="rounded-full px-5 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                My Templates
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="flex items-center gap-2">
          <Button className="bg-emerald-500 hover:bg-emerald-600">
            Create new template
          </Button>
          <div className="flex border rounded-md overflow-hidden">
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-none h-9 w-9 ${
                activeView === "grid" ? "bg-gray-100" : "bg-white"
              }`}
              onClick={() => setActiveView("grid")}
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-none h-9 w-9 ${
                activeView === "list" ? "bg-gray-100" : "bg-white"
              }`}
              onClick={() => setActiveView("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredTemplates.map((template) => (
          <div key={template.id} className="cursor-pointer group">
            <div className="overflow-hidden rounded-lg mb-2">
              <div className="relative h-[160px] w-full overflow-hidden rounded-lg">
                <Image
                  src={template.image || "/placeholder.svg"}
                  alt={template.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-900">
              {template.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
