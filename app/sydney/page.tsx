import type { Metadata } from "next";
import { Counts } from "@/components/site/counts";
import { sydneyStats } from "@/lib/content";

export const metadata: Metadata = { title: "Sydney" };

export default function SydneyPage() {
  return (
    <Counts
      title="Descubra o que você pode resolver em Sydney"
      lede="Categorias com o maior número de tarefas publicadas nos últimos 30 dias."
      stats={sydneyStats}
    />
  );
}
