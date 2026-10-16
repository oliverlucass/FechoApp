import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = { title: "Carreiras" };

export default function CareersPage() {
  return (
    <PageHero
      title="Somos uma comunidade de gente que vai atrás"
      body="Fique aberto. Feito para o propósito. Quando está ligado, está ligado. Trabalho híbrido, Dias de Recarga e o Fundo de Empoderamento."
      action={{ href: "/trabalhos", label: "Ver vagas abertas" }}
    />
  );
}
