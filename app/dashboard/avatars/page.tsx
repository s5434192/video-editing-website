"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { avatars } from "@/app/data/avatars";

export default function Avators() {
  const [activeTab, setActiveTab] = useState<"features" | "my">("features");

  const filteredAvatars = avatars.filter(
    (avatar) => avatar.type === activeTab
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
                Features Avatar
              </TabsTrigger>
              <TabsTrigger
                value="my"
                className="rounded-full px-5 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                My Avatar
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="flex items-center gap-2">
          <Button className="bg-emerald-500 hover:bg-emerald-600">
            Create Avatar
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredAvatars.map((avatar) => (
          <div key={avatar.id} className="cursor-pointer group">
            <div className="overflow-hidden rounded-lg mb-2">
              <div className="relative h-[172px] w-full overflow-hidden rounded-lg">
                <Image
                  src={avatar.image || "/placeholder.svg"}
                  alt={avatar.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-900">
              {avatar.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
