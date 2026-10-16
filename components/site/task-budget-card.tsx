"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Pill } from "@/components/site/pill";
import { Input } from "@/components/ui/input";
import type { TaskStatus } from "@/lib/content";

export function TaskBudgetCard({ price, status }: { price: string; status: TaskStatus }) {
  const [open, setOpen] = useState(false);
  const [more, setMore] = useState(false);
  const [sent, setSent] = useState(false);
  const [amount, setAmount] = useState("");
  const locked = status !== "aberta";
  const label = status === "atribuida" ? "Atribuída" : status === "concluida" ? "Concluída" : "Fazer proposta";

  return (
    <aside className="rounded-card border border-line bg-white p-3">
      <div className="text-caps font-bold tracking-[0.6px] text-muted uppercase">Orçamento da tarefa</div>
      <div className="font-heading text-display leading-none font-extrabold text-ink">{price}</div>
      {locked ? (
        <Pill block className="mt-3" disabled>
          {label}
        </Pill>
      ) : (
        <Pill block className="mt-3" onClick={() => setOpen((value) => !value)}>
          {label}
        </Pill>
      )}
      {open && !locked ? (
        <form
          className="mt-3"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          <label className="text-xs text-muted" htmlFor="proposta">
            Sua proposta
          </label>
          <Input id="proposta" value={amount} onChange={(event) => setAmount(event.target.value)} placeholder="R$ 0" className="mt-1" />
          <Pill type="submit" block className="mt-2">
            Enviar proposta
          </Pill>
          {sent ? <p className="mt-2 text-xs text-muted">Anotado neste aparelho. Nada foi enviado.</p> : null}
        </form>
      ) : null}
      <button
        type="button"
        className="mt-3 flex w-full items-center justify-between rounded-card border border-line bg-white px-3 py-2 text-sm text-ink"
        aria-expanded={more}
        onClick={() => setMore((value) => !value)}
      >
        Mais opções
        <ChevronDown className="size-4" aria-hidden="true" />
      </button>
      {more ? <p className="mt-2 text-xs text-muted">Compartilhar e salvar ficam fora desta versão.</p> : null}
      <button type="button" className="mt-3 text-sm text-link">
        Denunciar esta tarefa
      </button>
    </aside>
  );
}
