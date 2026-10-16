import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = { title: "Seguro" };

export default function InsurancePage() {
  return (
    <PageHero
      title="Atualizado em 1º de julho de 2026"
      body="Até $10 milhões AUD para tarefas reservadas, atribuídas e concluídas. Fornecido pela Chubb. EUA e Canadá têm limite de $5 milhões AUD."
    />
  );
}
