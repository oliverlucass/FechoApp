import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/site/header";
import { Pill } from "@/components/site/pill";
import { katiReviews, taskers } from "@/lib/content";

export function generateStaticParams() {
  return [{ slug: "kati-a" }, ...taskers.map((person) => ({ slug: person.slug }))];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "kati-a") return { title: "Kati A." };
  return { title: taskers.find((person) => person.slug === slug)?.name ?? "Fechador" };
}

export default async function ProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const person = slug === "kati-a" ? null : taskers.find((item) => item.slug === slug);
  if (slug !== "kati-a" && !person) notFound();
  const name = person?.name ?? "Kati A.";

  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main>
        <div className="grid gap-3.5 p-4 xl:grid-cols-[300px_1fr]">
          <aside className="rounded-card bg-white p-4">
            <div className="text-[12px] tracking-[1px]">CONHEÇA</div>
            <h1 className="text-[32px] font-extrabold text-ink">{name}</h1>
            {person ? null : <div className="mt-1.5">Online há 2 semanas</div>}
            <div>{person ? person.place : "Melbourne VIC, Austrália"}</div>
            <div className="mt-3 rounded-card bg-surface p-3">
              <div className="text-[22px] font-extrabold text-ink">
                {person ? person.rating : "4,9"} <span className="text-ink">★</span>
              </div>
              <div>Avaliação geral · {person ? person.reviews : "97"} avaliações</div>
              {person ? null : (
                <>
                  <div className="mt-2 text-[22px] font-extrabold text-ink">100%</div>
                  <div>Taxa de conclusão · 117 tarefas</div>
                </>
              )}
            </div>
          </aside>
          <section className="rounded-card bg-white p-4">
            {person ? (
              <p>{person.body}</p>
            ) : (
              <>
                <div className="font-extrabold text-ink">Avaliação geral 4,9 ★</div>
                <div className="text-[12px]">97 avaliações</div>
                <div className="mt-3 grid gap-2 xl:grid-cols-3">
                  {katiReviews.map(([reviewer, quote, task]) => (
                    <article key={reviewer} className="rounded-card bg-surface p-2.5">
                      <div className="font-bold">{reviewer}</div>
                      <div className="text-xs text-ink">★★★★★</div>
                      <p className="mt-1.5">{quote}</p>
                      <div className="mt-1.5 text-[12px]">{task}</div>
                    </article>
                  ))}
                </div>
                <div className="mt-3">
                  <span className="rounded-full bg-action-tint px-3 py-2 font-bold text-link">Ver todas as 97 avaliações</span>
                </div>
                <div className="mt-3.5 rounded-card bg-surface p-3.5">
                  <div className="font-extrabold text-ink">Kati entrou recentemente no FechoApp</div>
                  <p>
                    Provavelmente está explorando o marketplace, procurando tarefas para usar as habilidades e liberar o potencial.
                  </p>
                </div>
              </>
            )}
          </section>
        </div>
        <div className="flex flex-col gap-3 bg-white px-5 py-3.5 sm:flex-row sm:items-center">
          <div className="flex-1">
            <div className="font-extrabold text-ink">Quer trabalhar com {name === "Kati A." ? "a Kati" : name}?</div>
            <div>Publique uma tarefa e peça um orçamento</div>
          </div>
          <Pill href="/publicar">Pedir um orçamento</Pill>
        </div>
      </main>
    </div>
  );
}
