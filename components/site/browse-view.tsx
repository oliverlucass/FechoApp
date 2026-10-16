"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { BrowseFilters } from "@/components/site/browse-filters";
import { TaskCard } from "@/components/site/task-card";
import type { MapMarker } from "@/components/site/task-map";
import type { Task } from "@/lib/content";
import { cn } from "cn";

const TaskMap = dynamic(() => import("@/components/site/task-map").then((mod) => mod.TaskMap), {
  ssr: false,
  loading: () => <div className="h-full min-h-0 w-full bg-line" />,
});

export function BrowseView({ tasks }: { tasks: Task[] }) {
  const [query, setQuery] = useState("");
  const [mapOnPhone, setMapOnPhone] = useState(false);
  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return tasks;
    return tasks.filter((task) => `${task.title} ${task.location} ${task.category}`.toLowerCase().includes(needle));
  }, [query, tasks]);
  const markers: MapMarker[] = filtered.map((task) => ({
    id: task.slug,
    lng: task.lng,
    lat: task.lat,
    count: Math.max(task.offerCount, 1),
  }));

  return (
    <>
      <BrowseFilters onQueryChange={setQuery} />
      <div className="flex items-center justify-between px-4 py-2 md:hidden">
        <p className="text-sm text-muted">{filtered.length === 1 ? "1 tarefa" : `${filtered.length} tarefas`}</p>
        <button type="button" className="text-sm font-bold text-link" onClick={() => setMapOnPhone((value) => !value)}>
          {mapOnPhone ? "Lista" : "Mapa"}
        </button>
      </div>
      <div className="mx-auto w-full md:grid md:h-[calc(100dvh-105px)] md:grid-cols-[minmax(240px,340px)_minmax(0,1fr)] xl:max-w-[1024px] xl:grid-cols-[248px_minmax(0,1fr)]">
        <div className={cn("min-h-0 overflow-y-auto px-3 py-3", mapOnPhone && "hidden md:block")}>
          {filtered.length === 0 ? <p className="text-sm text-muted">Nenhuma tarefa com esse texto.</p> : null}
          {filtered.map((task) => (
            <TaskCard key={task.slug} href={`/tarefas/${task.slug}`} {...task} />
          ))}
        </div>
        <div className={cn("min-h-0", mapOnPhone ? "h-[calc(100dvh-168px)] md:h-full" : "hidden h-full md:block")}>
          <TaskMap markers={markers} />
        </div>
      </div>
    </>
  );
}
