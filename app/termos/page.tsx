import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = { title: "Termos" };

export default function TermsPage() {
  return (
    <PageHero
      title="Termos e condições"
      body="Apenas os títulos das seções: escopo dos serviços FechoApp, papel e obrigações, obrigações do usuário, taxas, pagamentos, créditos, meio de pagamento, verificação e selos."
    />
  );
}
