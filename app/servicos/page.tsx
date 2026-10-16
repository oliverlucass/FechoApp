import type { Metadata } from "next";
import { Counts } from "@/components/site/counts";
import { serviceStats } from "@/lib/content";

export const metadata: Metadata = { title: "Serviços" };

export default function ServicesPage() {
  return (
    <Counts
      title="Descubra o que você pode resolver no Brasil"
      lede="Da limpeza residencial ao design. Os exemplos abaixo não são contagens reais."
      stats={serviceStats}
    />
  );
}
