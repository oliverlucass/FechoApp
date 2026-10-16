import type { Metadata } from "next";
import { BrowseFilters } from "@/components/site/browse-filters";
import { Header } from "@/components/site/header";
import { TaskCard } from "@/components/site/task-card";
import { browseTasks } from "@/lib/content";

export const metadata: Metadata = { title: "Ver tarefas" };

export default function BrowsePage() {
  return (
    <div className="min-h-screen bg-surface">
      <div className="hidden xl:block">
        <Header />
      </div>
      <main>
        <div className="hidden xl:block">
          <BrowseFilters />
        </div>
        <div className="hidden grid-cols-[380px_1fr] gap-3 p-3 xl:grid">
          <div>
            {browseTasks.map((task) => (
              <TaskCard key={task.slug} href={`/tarefas/${task.slug}`} {...task} />
            ))}
          </div>
          <div className="relative min-h-[460px] rounded-xl bg-line">
            {[
              [20, 30],
              [40, 50],
              [55, 40],
              [70, 55],
              [48, 70],
            ].map(([x, y], index) => (
              <div
                key={index}
                className="absolute flex size-[22px] items-center justify-center rounded-full bg-ink text-caps font-extrabold text-action"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                A
              </div>
            ))}
            <div className="absolute right-2.5 bottom-2.5 text-caps">MapLibre | OpenStreetMap</div>
          </div>
        </div>

        <div className="xl:hidden">
          <Header />
          <BrowseFilters />
          <div className="p-3">
            {browseTasks.map((task) => (
              <TaskCard key={task.slug} href={`/tarefas/${task.slug}`} {...task} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
