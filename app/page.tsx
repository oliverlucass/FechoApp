import Link from "next/link";
import { Container } from "@/components/site/container";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { HeroArt } from "@/components/site/hero-art";
import { Pill } from "@/components/site/pill";
import { categories, homeJobs, homeTabs } from "@/lib/content";

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
        <section className="m-3 rounded-[22px] bg-ink px-[18px] py-[18px] text-center text-white xl:m-4 xl:rounded-[28px] xl:px-7 xl:pt-9 xl:pb-7">
          <div className="xl:flex xl:items-center xl:justify-between">
            <HeroArt />
            <h1 className="text-[28px] leading-[0.95] font-extrabold xl:max-w-[720px] xl:text-[46px] xl:leading-[0.92] xl:whitespace-nowrap">
              RESOLVA QUALQUER COISA
            </h1>
            <HeroArt />
          </div>
          <p className="mt-2.5 text-[16px] xl:mt-[18px] xl:text-[18px]">
            Publique qualquer tarefa. Escolha a melhor pessoa. Resolva.
          </p>
          <div className="mt-3 flex flex-col items-stretch gap-2 xl:mt-4 xl:flex-row xl:justify-center xl:gap-3">
            <Pill href="/publicar" block className="xl:w-auto">
              Publique sua tarefa grátis →
            </Pill>
            <Pill href="/ganhar" tone="white" block className="xl:w-auto">
              Ganhe dinheiro como Fechador
            </Pill>
          </div>
        </section>

        <Container className="grid gap-6 py-3 pb-7 xl:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-[32px] leading-none font-extrabold text-ink xl:text-display">
              Publique sua primeira tarefa em segundos
            </h2>
            <p className="mt-3 text-[16px]">Economize horas e conclua sua lista de tarefas</p>
            {steps.map((step, index) => (
              <div key={step} className="mt-3 flex items-center gap-2.5">
                <span className="inline-flex size-[26px] items-center justify-center rounded-full border-2 border-link font-bold text-link">
                  {index + 1}
                </span>
                <span>{step}</span>
              </div>
            ))}
            <div className="mt-4">
              <Pill href="/publicar">Publicar sua tarefa</Pill>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2.5 rounded-3xl bg-action-tint p-4 sm:grid-cols-2">
            {categories.map(([title, body]) => (
              <Link key={title} href={title === "Limpeza residencial" ? "/limpeza" : "/categorias"} className="flex gap-2.5 rounded-card bg-white p-3">
                <div className="size-[54px] shrink-0 rounded-[10px] bg-surface" />
                <div>
                  <div className="font-extrabold text-ink">{title}</div>
                  <div className="text-[12px]">{body}</div>
                </div>
              </Link>
            ))}
          </div>
        </Container>

        <Container className="pt-2 pb-7">
          <h2 className="text-center text-[28px] font-extrabold text-ink xl:text-h1">
            Veja o que outras pessoas estão resolvendo
          </h2>
          <div className="my-3.5 flex flex-wrap justify-center gap-x-[18px] gap-y-2">
            {homeTabs.map((tab, index) => (
              <span
                key={tab}
                className={
                  index === 0
                    ? "border-b-2 border-indicator pb-1.5 font-bold text-link"
                    : "font-medium text-text"
                }
              >
                {tab}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {homeJobs.map(([kind, title, price, href]) => (
              <Link key={title} href={href} className="min-h-[120px] rounded-card bg-surface p-3.5">
                <div className="text-caps tracking-[0.6px]">{kind}</div>
                <div className="mt-1 font-extrabold text-ink">{title}</div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-ink">5 estrelas</span>
                  <span className="font-extrabold text-ink">{price}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-[18px] text-center">
            <Pill href="/publicar">Publique sua tarefa grátis</Pill>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
