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
        <section className="m-4 grid items-center gap-5 rounded-[28px] bg-[#0A65FC] p-7 text-white xl:grid-cols-[1.1fr_0.9fr] xl:p-9">
          <div>
            <h1 className="text-[40px] font-extrabold tracking-[-1px] xl:text-[52px]">Seja seu próprio chefe</h1>
            <p className="mt-2.5 text-[18px]">Ganhe até $10.750 por mês no FechoApp*</p>
            <div className="mt-4">
              <Pill href="/cadastrar" tone="navy">
                Entrar no FechoApp →
              </Pill>
            </div>
            <p className="mt-3.5 text-[12px]">*Com base na média mensal de quem está no 1% que mais ganha</p>
          </div>
          <div className="h-[230px] rounded-2xl bg-[#D7C4A8]" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
