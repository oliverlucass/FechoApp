import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = { title: "Comparações" };

export default function ComparisonsPage() {
  return (
    <PageHero
      title="Recurso de comparações de serviço"
      body="Títulos de categorias do índice de comparações."
    />
  );
}
