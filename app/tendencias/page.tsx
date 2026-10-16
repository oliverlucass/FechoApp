import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = { title: "Tendências" };

export default function TrendsPage() {
  return (
    <PageHero
      title="Explore os dados do marketplace FechoApp"
      body="Mudanças, 16.646 tarefas publicadas. Mudança de móveis, 11.730. Limpeza, 11.653. Remoção de entulho, 9.279. Faz-tudo, 6.455."
    />
  );
}
