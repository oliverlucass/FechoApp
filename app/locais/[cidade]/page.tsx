import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/page-hero";
import { cities } from "@/lib/content";

export function generateStaticParams() {
  return cities.map(([slug]) => ({ cidade: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cidade: string }>;
}): Promise<Metadata> {
  const { cidade } = await params;
  const match = cities.find(([slug]) => slug === cidade);
  return { title: match?.[1] ?? "Local" };
}

export default async function CityPage({ params }: { params: Promise<{ cidade: string }> }) {
  const { cidade } = await params;
  const match = cities.find(([slug]) => slug === cidade);
  if (!match) notFound();
  return (
    <PageHero
      title={`Descubra o que você pode resolver em ${match[1]}`}
      body="Tarefas de exemplo nesta cidade. Os números de um marketplace real não entram nesta versão."
      action={{ href: "/tarefas", label: "Ver tarefas" }}
    />
  );
}
