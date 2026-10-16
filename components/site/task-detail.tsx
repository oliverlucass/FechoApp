import type { ReactNode } from "react";
import Link from "next/link";
import { Calendar, MapPin, UserRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
      <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.6px] text-muted uppercase">
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
      <article className="min-h-0 overflow-y-auto px-4 py-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <Link href="/tarefas" className="text-sm text-link">
            Voltar ao mapa
          </Link>
          <Badge variant="neutral">Seguir</Badge>
        </div>
        <div className="flex flex-wrap gap-2">
          {steps.map((step) => (
            <span key={step} className={`rounded-pill px-2.5 py-1 text-[11px] font-bold tracking-[0.6px] uppercase ${stepClass(step, task.status)}`}>
              {stepLabel[step]}
            </span>
          ))}
        </div>
        <h1 className="mt-3 text-h1 font-extrabold text-ink">{task.title}</h1>
        <div className="mt-4 md:hidden">
          <TaskBudgetCard price={task.price} status={task.status} />
        </div>
        <Meta icon={<UserRound className="size-3.5" aria-hidden="true" />} label="Publicado por">
          <span className="mr-2 inline-flex size-9 items-center justify-center rounded-full bg-action-tint text-[13px] font-bold align-middle">
            {task.poster}
          </span>
          {task.clientName}
        </Meta>
        <Meta icon={<MapPin className="size-3.5" aria-hidden="true" />} label="Local">
          {task.location}
        </Meta>
        <Meta icon={<Calendar className="size-3.5" aria-hidden="true" />} label="Para quando">
          {task.when} · {task.time}
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
        {task.offerCount === 0 ? (
          <p className="mt-2 text-sm text-muted">Nenhuma proposta ainda.</p>
        ) : (
          <ul className="mt-2 space-y-2">
            {Array.from({ length: Math.min(task.offerCount, 3) }, (_, index) => (
              <li key={index} className="rounded-card bg-white p-3 text-sm">
                Proposta de exemplo {index + 1}. O valor fica no chat.
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
