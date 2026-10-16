import type { Metadata } from "next";
import { Header } from "@/components/site/header";
import { TaskCard } from "@/components/site/task-card";
import { browseTasks } from "@/lib/content";

export const metadata: Metadata = { title: "Ver tarefas" };

const filters = ["Categoria", "30 mi Ashburn VA 20149 e remoto", "Qualquer preço", "Outros filtros", "Ordenar"];

export default function BrowsePage() {
  return (
    <div className="min-h-screen bg-[#F3F3F7]">
      <div className="hidden xl:block">
        <Header />
      </div>
      <main>
        <div className="hidden items-center gap-2 px-4 py-2.5 xl:flex">
          <span className="flex-1 rounded-[10px] border border-[#E4E7F0] bg-white px-3 py-2 text-[#384179]">
            Buscar uma tarefa
          </span>
          {filters.map((item) => (
            <span key={item} className="rounded-[10px] border border-[#E4E7F0] bg-white px-2.5 py-2 text-[13px]">
              {item}
            </span>
          ))}
        </div>
        <div className="hidden grid-cols-[380px_1fr] gap-3 p-3 xl:grid">
          <div>
            {browseTasks.map((task) => (
              <TaskCard key={task.slug} href={`/tarefas/${task.slug}`} {...task} />
            ))}
          </div>
          <div className="relative min-h-[460px] rounded-xl bg-[#E7EEF2]">
            {[
              [20, 30],
              [40, 50],
              [55, 40],
              [70, 55],
              [48, 70],
            ].map(([x, y], index) => (
              <div
                key={index}
                className="absolute flex size-[22px] items-center justify-center rounded-full bg-[#0A65FC] text-[11px] font-extrabold text-white"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                A
              </div>
            ))}
            <div className="absolute right-2.5 bottom-2.5 text-[11px]">MapLibre | OpenStreetMap</div>
          </div>
        </div>

        <div className="p-3 xl:hidden">
          <h1 className="font-extrabold text-[#061257]">Você está vendo tarefas</h1>
          <div className="mt-2 rounded-xl bg-white p-2.5">Buscar uma tarefa</div>
          <div className="mt-2 text-[12px]">30 mi Ashburn VA 20149 e remoto</div>
          <div className="mt-2">
            <TaskCard href="/tarefas/livros-betty-neel" title="Ajuda para vender um lote de livros da Betty Neel" meta="Remoto" price="$30" offers="Aberta" />
            <TaskCard href="/tarefas/trabalho-no-patio" title="Trabalho no pátio" meta="Oakton VA" price="$300" offers="Aberta" />
          </div>
        </div>
      </main>
    </div>
  );
}
