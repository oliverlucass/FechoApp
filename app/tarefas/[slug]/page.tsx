import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/site/header";
import { TaskDetail } from "@/components/site/task-detail";
import { browseTasks, findTask, tasks } from "@/lib/content";

export function generateStaticParams() {
  return tasks.map((task) => ({ slug: task.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const found = findTask(slug);
  return { title: found?.task.title ?? "Tarefa" };
}

export default async function TaskPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const found = findTask(slug);
  if (!found) notFound();
  const rail = browseTasks.some((item) => item.slug === found.task.slug) ? browseTasks : tasks.slice(0, 6);

  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main>
        <TaskDetail task={found.task} rail={rail} />
      </main>
    </div>
  );
}
