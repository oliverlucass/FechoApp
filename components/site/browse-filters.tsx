"use client";

import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { browsePlace } from "@/lib/content";
import { cn } from "cn";

const filters = [
  { id: "categoria", label: "Categoria", options: ["Limpeza", "Entrega", "Mudanças", "Faz-tudo", "Pintura"] },
  { id: "lugar", label: browsePlace, options: ["São Paulo, SP", "Rio de Janeiro, RJ", "Belo Horizonte, MG", "Remoto"] },
  { id: "preco", label: "Qualquer preço", options: ["Até R$ 100", "R$ 100 a R$ 300", "Acima de R$ 300"] },
  { id: "outros", label: "Outros filtros", options: ["Aberta", "Atribuída", "Concluída"] },
  { id: "ordenar", label: "Ordenar", options: ["Mais recentes", "Menor preço", "Maior preço"] },
];

export function BrowseFilters() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<string | null>(null);
  const [picked, setPicked] = useState<Record<string, string>>({});

  return (
    <div className="bg-white">
      <div className="mx-auto flex h-12 w-full max-w-page items-center gap-4 overflow-x-auto px-4 md:px-8">
        <label className="relative shrink-0">
          <span className="sr-only">Buscar uma tarefa</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar uma tarefa"
            className="h-8 w-[200px] rounded-search bg-surface pr-8 pl-3 text-sm font-light text-text placeholder:text-muted"
          />
          <Search className="pointer-events-none absolute top-1/2 right-2 size-4 -translate-y-1/2 text-muted" aria-hidden="true" />
        </label>
        {filters.map((filter) => {
          const label = picked[filter.id] ?? filter.label;
          const expanded = open === filter.id;
          return (
            <div key={filter.id} className="relative shrink-0">
              <button
                type="button"
                className="inline-flex items-center gap-1 text-sm text-ink"
                aria-expanded={expanded}
                onClick={() => setOpen(expanded ? null : filter.id)}
              >
                {label}
                <ChevronDown className="size-4" aria-hidden="true" />
              </button>
              {expanded ? (
                <div className="absolute top-8 left-0 z-20 min-w-40 rounded-card bg-white p-2 shadow-floating">
                  {filter.options.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={cn("block w-full rounded-md px-2 py-1.5 text-left text-sm text-ink hover:bg-surface", label === option && "font-bold")}
                      onClick={() => {
                        setPicked((current) => ({ ...current, [filter.id]: option }));
                        setOpen(null);
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
