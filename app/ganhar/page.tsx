import type { Metadata } from "next";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Pill } from "@/components/site/pill";

export const metadata: Metadata = { title: "Ganhe dinheiro" };

export default function EarnPage() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <section className="m-4 grid items-center gap-5 rounded-[28px] bg-ink p-7 text-white xl:grid-cols-[1.1fr_0.9fr] xl:p-9">
          <div>
            <h1 className="text-display font-extrabold xl:text-[52px]">Seja seu próprio chefe</h1>
            <p className="mt-2.5 text-lg">Combine o valor de cada tarefa e organize a própria agenda.</p>
            <div className="mt-4">
              <Pill href="/cadastrar">
                Entrar no Fechô →
              </Pill>
            </div>
          </div>
          <div className="h-[230px] rounded-2xl bg-surface" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
