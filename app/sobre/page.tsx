import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = { title: "Sobre" };

export default function AboutPage() {
  return (
    <PageHero
      title="Estamos fazendo diferença na vida das pessoas"
      body="Mais de 2,1 milhões de pessoas usando o FechoApp. Mais de $382 milhões em trabalhos criados. Mais de $37 milhões em trabalhos disponíveis por mês."
    />
  );
}
