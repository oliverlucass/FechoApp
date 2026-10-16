import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = { title: "Para empresas" };

export default function BusinessPage() {
  return (
    <PageHero
      title="Ajuda sob demanda para o seu negócio"
      body="Pule a dor de cabeça da contratação e alivie sua lista de tarefas na hora. Conecte-se com Fechadores locais avaliados."
      action={{ href: "/fechadores", label: "Encontrar Fechadores locais" }}
    />
  );
}
