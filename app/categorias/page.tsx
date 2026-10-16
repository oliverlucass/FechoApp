"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/site/header";
import { menuColumns } from "@/lib/content";

export default function CategoriesPage() {
  const [mode, setMode] = useState<"fechador" | "cliente">("cliente");

  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main className="mx-auto my-3 w-[calc(100%-24px)] max-w-[860px] rounded-card bg-white p-[18px] xl:grid xl:grid-cols-[180px_1fr] xl:gap-3">
        <div>
          <h1 className="text-[20px] font-extrabold text-ink">O que você está procurando?</h1>
          <p className="mb-3 text-[12px]">Escolha um tipo de tarefa.</p>
          <button
            type="button"
            onClick={() => setMode("fechador")}
            className={`mb-2 w-full rounded-chip p-2.5 text-left ${mode === "fechador" ? "border-l-[3px] border-indicator bg-action-tint" : "bg-surface"}`}
          >
            <div className={`text-caps tracking-[0.4px] ${mode === "fechador" ? "font-bold text-link" : ""}`}>
              COMO FECHADOR
            </div>
            <div className={mode === "fechador" ? "font-bold text-ink" : ""}>Estou procurando trabalho em ...</div>
          </button>
          <button
            type="button"
            onClick={() => setMode("cliente")}
            className={`w-full rounded-chip p-2.5 text-left ${mode === "cliente" ? "border-l-[3px] border-indicator bg-action-tint" : "bg-surface"}`}
          >
            <div className={`text-caps tracking-[0.4px] ${mode === "cliente" ? "font-bold text-link" : ""}`}>
              COMO CLIENTE
            </div>
            <div className={mode === "cliente" ? "font-bold text-ink" : ""}>Quero contratar alguém para ...</div>
          </button>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 xl:mt-0 xl:grid-cols-4">
          {menuColumns.map((column) => (
            <div key={column[0]}>
              {column.map((item) => (
                <Link
                  key={item}
                  href={item === "Limpeza" ? "/limpeza" : item === "Ver tudo" ? "/servicos" : "/servicos"}
                  className={`block py-1 text-fine ${item === "Ver tudo" ? "font-bold text-link" : "font-medium text-ink"}`}
                >
                  {item}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
