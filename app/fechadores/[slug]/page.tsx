import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/site/header";
import { Pill } from "@/components/site/pill";
import { sampleReviews, taskers } from "@/lib/content";

export function generateStaticParams() {
  return taskers.map((person) => ({ slug: person.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return { title: taskers.find((person) => person.slug === slug)?.name ?? "Fechador" };
}

export default async function ProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const person = taskers.find((item) => item.slug === slug);
  if (!person) notFound();

  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main>
        <div className="grid gap-3.5 p-4 xl:grid-cols-[300px_1fr]">
          <aside className="rounded-card bg-white p-4">
            <div className="text-[12px] tracking-[1px]">CONHEÇA</div>
            <h1 className="text-[32px] font-extrabold text-ink">{person.name}</h1>
            <div>{person.place}</div>
            <div className="mt-3 rounded-card bg-surface p-3">
              <div className="text-[22px] font-extrabold text-ink">
                {person.rating} <span className="text-ink">★</span>
              </div>
              <div>Avaliação de exemplo · {person.reviews} avaliações ilustrativas</div>
            </div>
          </aside>
          <section className="rounded-card bg-white p-4">
            <p>{person.body}</p>
            {person.slug === "marina-a" ? (
              <div className="mt-3 grid gap-2 xl:grid-cols-3">
                {sampleReviews.map(([reviewer, quote, task]) => (
                  <article key={reviewer} className="rounded-card bg-surface p-2.5">
                    <div className="font-bold">{reviewer}</div>
                    <div className="text-xs text-ink">★★★★★</div>
                    <p className="mt-1.5">{quote}</p>
                    <div className="mt-1.5 text-[12px]">{task}</div>
                  </article>
                ))}
              </div>
            ) : null}
          </section>
        </div>
        <div className="flex flex-col gap-3 bg-white px-5 py-3.5 sm:flex-row sm:items-center">
          <div className="flex-1">
            <div className="font-extrabold text-ink">Quer trabalhar com {person.name}?</div>
            <div>Publique uma tarefa e peça um orçamento</div>
          </div>
          <Pill href="/publicar">Pedir um orçamento</Pill>
        </div>
      </main>
    </div>
  );
}
