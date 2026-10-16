import type { Metadata } from "next";
import { Counts } from "@/components/site/counts";
import { jobStats } from "@/lib/content";

export const metadata: Metadata = { title: "Trabalhos" };

export default function JobsPage() {
  return (
    <Counts
      title="Encontre trabalhos na Austrália"
      lede="Da limpeza residencial ao design gráfico."
      stats={jobStats}
    />
  );
}
