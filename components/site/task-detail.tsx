import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronLeft, MapPin, UserRound } from "lucide-react";
import { FollowButton } from "@/components/site/follow-button";
import { TaskBudgetCard } from "@/components/site/task-budget-card";
import { TaskCard } from "@/components/site/task-card";
import type { Task, TaskStatus } from "@/lib/content";

const steps: TaskStatus[] = ["aberta", "atribuida", "concluida"];
const stepLabel: Record<TaskStatus, string> = {
  aberta: "Aberta",
  atribuida: "Atribuída",
  concluida: "Concluída",
};

function stepClass(step: TaskStatus, current: TaskStatus) {
  const order = steps.indexOf(step);
  const here = steps.indexOf(current);
  if (order === here) return "bg-action text-on-action";
  if (order < here) return "bg-action-tint text-ink";
  return "text-muted";
}

function Meta({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <div className="mt-4">
      <div className="flex items-center gap-2 text-caps font-bold tracking-[0.6px] text-muted uppercase">
        {icon}
        {label}
      </div>
      <div className="mt-1 text-base text-ink">{children}</div>
    </div>
  );
}

export function TaskDetail({ task, rail }: { task: Task; rail: Task[] }) {
  return (
    <div className="mx-auto w-full max-w-page md:grid md:h-[calc(100dvh-57px)] md:grid-cols-[minmax(0,1fr)_220px] xl:grid-cols-[248px_minmax(0,1fr)_200px]">
      <aside className="hidden min-h-0 overflow-y-auto px-3 py-3 xl:block">
        {rail.map((item) => (
          <TaskCard key={item.slug} href={`/tarefas/${item.slug}`} {...item} selected={item.slug === task.slug} />
        ))}
      </aside>
      <article className="min-h-0 overflow-y-auto bg-white px-4 py-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <Link href="/tarefas" className="inline-flex items-center gap-1 text-sm text-link">
            <ChevronLeft className="size-4" aria-hidden="true" />
            Voltar ao mapa
          </Link>
          <FollowButton />
        </div>
        <div className="flex flex-wrap gap-2">
          {steps.map((step) => (
            <span key={step} className={`rounded-pill px-2.5 py-1 text-caps font-bold tracking-[0.6px] uppercase ${stepClass(step, task.status)}`}>
              {stepLabel[step]}
            </span>
          ))}
        </div>
        <h1 className="mt-3 text-h1 font-extrabold text-ink">{task.title}</h1>
        <ul aria-label="Fotos de exemplo" className="mt-4 flex gap-2">
          {task.photos.map((src) => (
            <li key={src}>
              <Image
                src={src}
                alt=""
                width={72}
                height={72}
                unoptimized
                className="size-18 rounded-thumb"
              />
            </li>
          ))}
        </ul>
        <div className="mt-4 md:hidden">
          <TaskBudgetCard price={task.price} status={task.status} />
        </div>
        <Meta icon={<UserRound className="size-3.5" aria-hidden="true" />} label="Publicado por">
          <span className="mr-2 inline-flex size-9 items-center justify-center rounded-full bg-action-tint text-fine font-bold align-middle">
            {task.poster}
          </span>
          {task.clientName}
        </Meta>
        <Meta icon={<MapPin className="size-3.5" aria-hidden="true" />} label="Local">
          {task.location}
        </Meta>
        <Meta icon={<Calendar className="size-3.5" aria-hidden="true" />} label="Para quando">
          {task.time && task.time.trim() !== task.when.trim() ? `${task.when} · ${task.time}` : task.when}
        </Meta>
        <h2 className="mt-6 text-lg font-bold text-ink">Detalhes</h2>
        <p className="mt-2 text-base">{task.details}</p>
        {task.assigneeName ? (
          <p className="mt-4 text-sm">
            Atribuída a{" "}
            <Link href={`/fechadores/${task.assigneeSlug}`} className="font-bold text-link">
              {task.assigneeName}
            </Link>
          </p>
        ) : null}
        <h2 className="mt-6 text-lg font-bold text-ink">Propostas</h2>
        {task.proposals.length === 0 ? (
          <p className="mt-2 text-sm text-muted">Nenhuma proposta ainda.</p>
        ) : (
          <ul className="mt-2 space-y-2">
            {task.proposals.map((proposal, index) => (
              <li key={`${proposal.name}-${index}`} className="rounded-card border border-line bg-white p-3 text-sm">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-bold text-ink">{proposal.name}</span>
                  <span className="font-bold text-ink">{proposal.amount}</span>
                </div>
                <p className="mt-1 text-text">{proposal.note}</p>
              </li>
            ))}
          </ul>
        )}
        <h2 className="mt-6 text-lg font-bold text-ink">Perguntas</h2>
        <p className="mt-2 text-sm text-muted">Nenhuma pergunta ainda.</p>
      </article>
      <div className="hidden px-3 py-4 md:block md:sticky md:top-0 md:self-start">
        <TaskBudgetCard price={task.price} status={task.status} />
      </div>
    </div>
  );
}
