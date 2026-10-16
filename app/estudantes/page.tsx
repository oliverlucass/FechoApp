import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = { title: "Desconto estudantil" };

export default function StudentsPage() {
  return (
    <PageHero
      title="Desconto estudantil FechoApp"
      body="Verifique seu status de estudante na UNiDAYS para receber um código promocional e aplicá-lo quando atribuir sua tarefa."
      action={{ href: "/publicar", label: "Publicar uma tarefa" }}
    />
  );
}
