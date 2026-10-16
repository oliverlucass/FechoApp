import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = { title: "Central de ajuda" };

export default function HelpPage() {
  return (
    <PageHero
      title="Central de ajuda"
      body="Publique uma tarefa, veja o que está aberto ou encontre um Fechador. O Fechô nesta versão é só a interface: nada é enviado a um servidor."
      action={{ href: "/publicar", label: "Publicar uma tarefa" }}
    />
  );
}
