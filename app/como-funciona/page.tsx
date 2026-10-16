import type { Metadata } from "next";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Pill } from "@/components/site/pill";
import { howSteps } from "@/lib/content";

export const metadata: Metadata = { title: "Como funciona" };

export default function HowPage() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <section className="m-4 grid items-center gap-6 rounded-[28px] bg-ink p-7 text-white xl:grid-cols-[1.1fr_0.9fr] xl:p-9">
          <div>
            <h1 className="text-h1 leading-none font-extrabold xl:text-[48px]">
              Publique uma tarefa. Receba propostas. Resolva!
            </h1>
            <p className="mt-3 max-w-[460px] text-lg">
              O melhor lugar para pessoas e empresas terceirizarem tarefas
            </p>
            <div className="mt-[18px]">
              <Pill href="/publicar">Publicar uma tarefa grátis →</Pill>
            </div>
          </div>
          <div className="h-[220px] rounded-[18px] bg-surface" />
        </section>
        <section className="grid gap-3.5 p-7 xl:grid-cols-3">
          {howSteps.map(([title, body]) => (
            <div key={title}>
              <h2 className="text-lg font-extrabold text-ink">{title}</h2>
              <p className="mt-1.5">{body}</p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
