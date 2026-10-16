import type { Metadata } from "next";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Pill } from "@/components/site/pill";
import { cleaningChecks, cleaningPoints } from "@/lib/content";

export const metadata: Metadata = { title: "Limpeza" };

export default function CleaningPage() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <section className="m-4 grid min-h-[360px] gap-5 rounded-[28px] bg-ink p-7 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="self-center text-white">
            <h1 className="text-h1 leading-none font-extrabold xl:text-[46px]">
              Encontre um profissional de limpeza perto de você
            </h1>
            <p className="mt-3 text-[16px]">
              Preencha um formulário curto e receba orçamentos grátis de um profissional de limpeza perto de você
            </p>
          </div>
          <div className="rounded-card bg-white p-[18px]">
            <h2 className="text-[20px] font-extrabold text-ink">
              Receba ajuda de um profissional de limpeza local hoje
            </h2>
            {cleaningChecks.map((item) => (
              <div key={item} className="mt-2 flex gap-2">
                <span className="text-link">✓</span>
                <span>{item}</span>
              </div>
            ))}
            <div className="mt-3.5">
              <Pill href="/publicar" block>
                Encontrar um profissional perto de mim →
              </Pill>
            </div>
            <p className="mt-2 text-center text-[12px]">Leva só 2 minutos. E é grátis.</p>
          </div>
        </section>
        <section className="grid gap-3 px-7 pt-2 pb-7 text-center sm:grid-cols-2 xl:grid-cols-5">
          {cleaningPoints.map((item) => (
            <div key={item} className="font-bold text-ink">
              {item}
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
