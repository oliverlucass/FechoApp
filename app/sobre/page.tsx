import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = { title: "Sobre" };

export default function AboutPage() {
  return (
    <PageHero
      title="Estamos fazendo diferença na vida das pessoas"
      body="O Fechô conecta quem precisa de um serviço a quem pode fazer. Esta versão é só a interface, sem números de um marketplace real."
    />
  );
}
