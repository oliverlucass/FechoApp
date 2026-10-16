import type { Metadata } from "next";
import { Counts } from "@/components/site/counts";
import { serviceStats } from "@/lib/content";

export const metadata: Metadata = { title: "Serviços" };

export default function ServicesPage() {
  return (
    <Counts
      title="Descubra o que você pode resolver na Austrália"
      lede="Encontre todo tipo de oportunidade na Austrália, da limpeza residencial ao design gráfico."
      stats={serviceStats}
    />
  );
}
