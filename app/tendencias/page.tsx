import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = { title: "Tendências" };

export default function TrendsPage() {
  return (
    <PageHero
      title="Explore exemplos do marketplace Fechô"
      body="Mudanças, móveis, limpeza, remoção de entulho e faz-tudo. Esta página não publica contagens reais."
    />
  );
}
