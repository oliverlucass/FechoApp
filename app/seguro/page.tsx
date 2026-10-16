import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = { title: "Seguro" };

export default function InsurancePage() {
  return (
    <PageHero
      title="Seguro"
      body="Esta versão de demonstração não oferece cobertura de seguro. Combine o pagamento direto com o Fechador."
    />
  );
}
