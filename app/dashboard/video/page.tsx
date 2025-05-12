"use client";

import VideoFilterBar from "@/app/components/video-filter/video-filter-bar";
import VideoList from "@/app/components/video-list/video-list";
import { useState } from "react";

export default function Home() {
  const [view, setView] = useState<"grid" | "list">("list");
  const [activeTab, setActiveTab] = useState<"video" | "trash">("video");
  const [dateFilter, setDateFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  return (
    <div className="container mx-auto py-8 px-4">
      <VideoFilterBar
        onViewChange={setView}
        onTabChange={setActiveTab}
        onDateFilterChange={setDateFilter}
        onStatusFilterChange={setStatusFilter}
      />
      <VideoList
        view={view}
        tab={activeTab}
        dateFilter={dateFilter}
        statusFilter={statusFilter}
      />
    </div>
  );
}
