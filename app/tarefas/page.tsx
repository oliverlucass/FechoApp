import type { Metadata } from "next";
import { BrowseView } from "@/components/site/browse-view";
import { Header } from "@/components/site/header";
import { browseTasks } from "@/lib/content";

export const metadata: Metadata = { title: "Ver tarefas" };

export default function BrowsePage() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main>
        <BrowseView tasks={browseTasks} />
      </main>
    </div>
  );
}
