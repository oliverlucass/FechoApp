import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = { title: "Privacidade" };

export default function PrivacyPage() {
  return (
    <PageHero
      title="Política de privacidade"
      body="Apenas os títulos das seções: coleta de dados pessoais, informações coletadas diretamente, automaticamente e de outras fontes, e como elas são usadas."
    />
  );
}
