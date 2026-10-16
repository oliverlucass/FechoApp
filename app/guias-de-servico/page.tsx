import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = { title: "Guias de serviço" };

export default function ServiceGuidesPage() {
  return (
    <PageHero
      title="Recurso de guias de serviço"
      body="O mesmo índice de categorias, cada título levando ao próprio guia."
    />
  );
}
