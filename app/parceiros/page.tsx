import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = { title: "Parceiros" };

export default function PartnersPage() {
  return (
    <PageHero
      title="Dê mais escolha aos seus clientes"
      body="Ao fazer parceria com o FechoApp, você oferece escolha e flexibilidade para montagem e instalação. A confiança de mais de 50 varejistas em toda a Austrália."
      action={{ href: "/ajuda", label: "Fale conosco" }}
    />
  );
}
