import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/site/header";
import { Pill } from "@/components/site/pill";
import { TaskCard } from "@/components/site/task-card";
import { browseTasks, featuredJobs, findTask, leaseTask, railTasks } from "@/lib/content";

export function generateStaticParams() {
  return [...browseTasks, ...railTasks, leaseTask, ...featuredJobs].map((task) => ({ slug: task.slug }));
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
  const { task, kind } = found;
  const lease = kind === "lease";

  return (
    <div className="min-h-screen bg-surface">
      <div className="hidden xl:block">
        <Header />
      </div>
      <main>
        <div className="hidden grid-cols-[300px_1fr] gap-3 p-3 xl:grid">
          <div>
            {(lease ? railTasks : browseTasks).map((item) => (
              <TaskCard key={item.slug} href={`/tarefas/${item.slug}`} {...item} />
            ))}
          </div>
          <article className="rounded-card bg-white p-[18px]">
            {lease ? (
              <div className="flex items-center justify-between gap-3 rounded-card bg-surface p-3">
                <span>Martha L. atribuiu Kati A. para ajudar nesta tarefa.</span>
                <Pill href="/publicar">Publicar uma tarefa parecida</Pill>
              </div>
            ) : null}
            {lease ? (
              <div className="mt-3 flex gap-2 text-[12px]">
                <span>ABERTA</span>
                <span className="rounded-full bg-success-tint px-2 py-0.5 font-bold text-success">ATRIBUÍDA</span>
                <span>CONCLUÍDA</span>
              </div>
            ) : null}
            <div className="mt-2 flex items-start justify-between gap-4">
              <h1 className="text-[32px] font-extrabold text-ink">{task.title}</h1>
              <div className="rounded-card bg-surface p-3 text-center">
                <div className="text-[11px]">ORÇAMENTO DA TAREFA</div>
                <div className="text-[28px] font-extrabold text-ink">{task.price}</div>
              </div>
            </div>
            {lease ? (
              <>
                <div className="mt-2">Publicado por Martha L. · há mais de 4 anos</div>
                <div>Local · Kensington VIC, Austrália · Ver mapa</div>
                <div>seg., 21 de fev. de 2022 · Manhã, meio-dia, tarde</div>
              </>
            ) : (
              <div className="mt-2">{task.meta}</div>
            )}
            <h2 className="mt-3 font-extrabold">Detalhes</h2>
            <p>{lease ? leaseTask.details : task.details}</p>
            {lease ? (
              <p className="mt-3 font-bold">
                <Link href="/fechadores/kati-a" className="text-link">
                  Kati A.
                </Link>{" "}
                · 4,9 · 100%
              </p>
            ) : null}
          </article>
        </div>

        <article className="p-3.5 xl:hidden">
          <h1 className="text-[24px] font-extrabold text-ink">{task.title}</h1>
          <div>
            {lease ? "Kensington VIC" : task.meta} · {task.price}
          </div>
          <p className="mt-2">{lease ? leaseTask.phone : task.details}</p>
          {lease ? (
            <div className="mt-2.5 font-bold">
              <Link href="/fechadores/kati-a">Kati A.</Link> · 4,9 · 100%
            </div>
          ) : null}
        </article>
      </main>
    </div>
  );
}
