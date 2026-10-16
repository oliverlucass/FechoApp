"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/site/header";
import { menuColumns } from "@/lib/content";

export default function CategoriesPage() {
  const [mode, setMode] = useState<"fechador" | "cliente">("cliente");

  return (
    <div className="min-h-screen bg-[#F3F3F7]">
      <Header />
      <main className="mx-auto my-3 w-[calc(100%-24px)] max-w-[860px] rounded-2xl bg-white p-[18px] xl:grid xl:grid-cols-[180px_1fr] xl:gap-3">
        <div>
          <h1 className="text-[20px] font-extrabold text-[#061257]">O que você está procurando?</h1>
          <p className="mb-3 text-[12px]">Escolha um tipo de tarefa.</p>
          <button
            type="button"
            onClick={() => setMode("fechador")}
            className={`mb-2 w-full rounded-[10px] p-2.5 text-left ${mode === "fechador" ? "border-l-[3px] border-[#0A65FC] bg-[#EAF1FF]" : "bg-[#F3F3F7]"}`}
          >
            <div className={`text-[11px] tracking-[0.4px] ${mode === "fechador" ? "font-bold text-[#0A65FC]" : ""}`}>
              COMO FECHADOR
            </div>
            <div className={mode === "fechador" ? "font-bold text-[#061257]" : ""}>Estou procurando trabalho em ...</div>
          </button>
          <button
            type="button"
            onClick={() => setMode("cliente")}
            className={`w-full rounded-[10px] p-2.5 text-left ${mode === "cliente" ? "border-l-[3px] border-[#0A65FC] bg-[#EAF1FF]" : "bg-[#F3F3F7]"}`}
          >
            <div className={`text-[11px] tracking-[0.4px] ${mode === "cliente" ? "font-bold text-[#0A65FC]" : ""}`}>
              COMO CLIENTE
            </div>
            <div className={mode === "cliente" ? "font-bold text-[#061257]" : ""}>Quero contratar alguém para ...</div>
          </button>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 xl:mt-0 xl:grid-cols-4">
          {menuColumns.map((column) => (
            <div key={column[0]}>
              {column.map((item) => (
                <Link
                  key={item}
                  href={item === "Limpeza" ? "/limpeza" : item === "Ver tudo" ? "/servicos" : "/servicos"}
                  className={`block py-1 text-[13px] ${item === "Ver tudo" ? "font-bold text-[#0A65FC]" : "font-medium text-[#061257]"}`}
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
