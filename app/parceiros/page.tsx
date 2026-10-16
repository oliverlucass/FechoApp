import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = { title: "Parceiros" };

export default function PartnersPage() {
  return (
    <PageHero
      title="Dê mais escolha aos seus clientes"
      body="Ao fazer parceria com o Fechô, você oferece mais uma forma de montagem e instalação para os seus clientes no Brasil."
      action={{ href: "/ajuda", label: "Fale conosco" }}
    />
  );
}
