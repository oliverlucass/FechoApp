import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = { title: "Diretrizes da comunidade" };

export default function GuidelinesPage() {
  return (
    <PageHero
      title="Diretrizes da comunidade"
      body="Fechadores fazem uma proposta em uma tarefa. Clientes publicam uma tarefa."
    />
  );
}
