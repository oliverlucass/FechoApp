import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = { title: "Guias de preço" };

export default function CostGuidesPage() {
  return (
    <PageHero
      title="Recurso de guias de preço"
      body="Contabilidade, Administração, Ajustes, Eletrodomésticos, Montagem e o restante do índice de A a Z."
    />
  );
}
