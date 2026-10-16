import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/container";
import { FechadorSpotlight } from "@/components/site/fechador-spotlight";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { HomeReviews } from "@/components/site/home-reviews";
import { Pill } from "@/components/site/pill";
import { categories } from "@/lib/content";

const steps = [
  "Descreva o que você precisa",
  "Defina seu orçamento",
  "Receba orçamentos e escolha o melhor Fechador",
];

export default function HomePage() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <section className="bg-ink text-white">
          <Container className="py-16 text-center">
            <h1 className="font-heading text-display font-extrabold">RESOLVA QUALQUER COISA</h1>
            <p className="mt-4 text-base">Publique qualquer tarefa. Escolha a melhor pessoa. Resolva.</p>
            <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
              <Pill href="/publicar" size="lg" block className="sm:w-auto">
                Publique sua tarefa grátis →
              </Pill>
              <Pill href="/ganhar" tone="white" size="lg" block className="sm:w-auto">
                Ganhe dinheiro como Fechador
              </Pill>
            </div>
          </Container>
        </section>

        <Container className="grid gap-6 py-12 xl:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-display font-extrabold text-ink">Publique sua primeira tarefa em segundos</h2>
            <p className="mt-3 text-base">Economize horas e conclua sua lista de tarefas</p>
            {steps.map((step, index) => (
              <div key={step} className="mt-3 flex items-center gap-2.5">
                <span className="inline-flex size-7 items-center justify-center rounded-full bg-action text-sm font-bold text-on-action">
                  {index + 1}
                </span>
                <span>{step}</span>
              </div>
            ))}
            <div className="mt-4">
              <Pill href="/publicar">Publicar sua tarefa</Pill>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 rounded-card bg-surface p-4 sm:grid-cols-2">
            {categories.map(([title, body, image]) => (
              <Link
                key={title}
                href={title === "Limpeza residencial" ? "/limpeza" : "/categorias"}
                className="flex gap-4 rounded-card bg-white p-4"
              >
                <Image src={image} alt="" width={56} height={56} unoptimized className="size-14 shrink-0 rounded-thumb" />
                <div>
                  <div className="text-base font-bold text-ink">{title}</div>
                  <div className="text-sm text-muted">{body}</div>
                </div>
              </Link>
            ))}
          </div>
        </Container>

        <section className="bg-surface">
          <Container className="py-12">
            <h2 className="text-center text-h1 font-extrabold text-ink">Veja o que outras pessoas estão resolvendo</h2>
            <p className="mt-2 text-center text-sm text-muted">Avaliações de exemplo, ligadas a tarefas de amostra.</p>
            <HomeReviews />
            <div className="mt-6 text-center">
              <Pill href="/publicar">Publique sua tarefa grátis</Pill>
            </div>
          </Container>
        </section>

        <FechadorSpotlight />
      </main>
      <Footer />
    </div>
  );
}
