"use client"

// import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { avatars } from "@/app/data/avatars"

export default function SelectAvatar() {


  return (
    <div className="w-74 border-r bg-white p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Pick a Avatar</h2>

      <Tabs defaultValue="featured" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="featured">Public Avatar</TabsTrigger>
          <TabsTrigger value="my">My Avatars</TabsTrigger>
        </TabsList>
        <div className="w-full mb-4">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full appearance-none text-primary rounded-xl border-0 bg-[#F4F6FB] py-7 pl-10 shadow-none md:w-2/3 lg:w-full"
                />
              </div>
            </form>
          </div>
        <TabsContent value="featured" className="mt-0">
          <div className="grid grid-cols-2 gap-2">
            {avatars.map((avatar) => (
              <div key={avatar.id} className="cursor-pointer group">
                <div className="rounded-lg overflow-hidden border border-gray-200 group-hover:border-blue-500">
                  <Image
                    src={avatar.image || "/placeholder.svg"}
                    alt={avatar.title}
                    width={120}
                    height={80}
                    className="w-full h-auto object-cover aspect-video"
                  />
                </div>
                <p className="text-[10px] mt-1 text-gray-600 truncate">{avatar.title}</p>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="my" className="mt-0">
          <div className="flex items-center justify-center h-40 border border-dashed rounded-lg">
            <p className="text-sm text-gray-500">No custom avatar yet</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
