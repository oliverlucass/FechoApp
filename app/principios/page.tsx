import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = { title: "Princípios do Fechador" };

export default function PrinciplesPage() {
  return (
    <PageHero
      title="Princípios essenciais"
      body="Seja profissional. Seja confiável. Seja ágil na resposta. Seja honesto."
    />
  );
}
