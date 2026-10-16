import Link from "next/link";
import { Calendar, Clock, MapPin } from "lucide-react";
import type { TaskStatus } from "@/lib/content";
import { cn } from "cn";

const statusLabel: Record<TaskStatus, string> = {
  aberta: "Aberta",
  atribuida: "Atribuída",
  concluida: "Concluída",
};

const statusClass: Record<TaskStatus, string> = {
  aberta: "text-link",
  atribuida: "text-muted",
  concluida: "text-success",
};

export function TaskCard({
  href,
  title,
  location,
  when,
  time,
  price,
  status,
  offerCount,
  poster,
  selected = false,
}: {
  href: string;
  title: string;
  location: string;
  when: string;
  time?: string;
  price: string;
  status: TaskStatus;
  offerCount: number;
  poster: string;
  selected?: boolean;
}) {
  const offers = offerCount === 1 ? "1 proposta" : `${offerCount} propostas`;

  return (
    <Link
      href={href}
      aria-current={selected ? "true" : undefined}
      className={cn(
        "relative mb-2.5 block min-h-[168px] rounded-card p-4",
        selected ? "bg-action-tint" : "bg-white",
      )}
    >
      <div className="flex items-start justify-between gap-3 pr-1">
        <h3 className="line-clamp-2 font-sans text-base font-normal text-ink">{title}</h3>
        <div className="text-lg font-bold whitespace-nowrap text-ink">{price}</div>
      </div>
      <div className="mt-1.5 flex items-center gap-1.5 text-xs text-muted">
        <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
        <span>{location}</span>
      </div>
      <div className="mt-1.5 flex items-center gap-1.5 text-xs text-muted">
        <Calendar className="size-3.5 shrink-0" aria-hidden="true" />
        <span>{when}</span>
      </div>
      {time && time.trim() !== when.trim() ? (
        <div className="mt-1.5 flex items-center gap-1.5 text-xs text-muted">
          <Clock className="size-3.5 shrink-0" aria-hidden="true" />
          <span>{time}</span>
        </div>
      ) : null}
      <div className="mt-3 pr-12 text-sm font-bold">
        <span className={statusClass[status]}>{statusLabel[status]}</span>
        {offerCount > 0 ? <span className="text-xs font-normal text-muted"> · {offers}</span> : null}
      </div>
      <span className="absolute right-4 bottom-4 inline-flex size-9 items-center justify-center rounded-full bg-action-tint text-fine font-bold text-ink">
        {poster}
      </span>
    </Link>
  );
}
