import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/site/header";
import { Pill } from "@/components/site/pill";
import { taskers } from "@/lib/content";

export const metadata: Metadata = { title: "Encontrar Fechadores" };

const filters = ["Categoria", "Sydney, NSW", "Selos", "Avaliação", "Idioma"];

export default function TaskersPage() {
  return (
    <div className="min-h-screen bg-[#F3F3F7]">
      <Header />
      <main>
        <div className="flex flex-wrap gap-2 px-5 py-3">
          {filters.map((item) => (
            <span key={item} className="rounded-full bg-white px-3 py-2">
              {item}
            </span>
          ))}
          <span className="rounded-full bg-[#061257] px-3 py-2 text-white">Avaliação: maiores primeiro</span>
        </div>
        <div className="px-5 pt-1 pb-4">
          <h1 className="text-[32px] font-extrabold text-[#061257] xl:text-[36px]">Encontre Fechadores perto de você</h1>
          <div>40.803 resultados</div>
          <div className="mt-3 grid grid-cols-1 gap-3 xl:grid-cols-3">
            {taskers.map((person) => (
              <article key={person.slug} className="rounded-2xl bg-white p-3.5">
                <Link href={`/fechadores/${person.slug}`} className="flex gap-2.5">
                  <div className="size-[42px] rounded-full bg-[#F3F3F7]" />
                  <div>
                    <div className="font-extrabold text-[#061257]">{person.name}</div>
                    <div className="text-[12px]">
                      <span className="text-[#F5A524]">{person.rating}</span> ({person.reviews}) · {person.place}
                    </div>
                  </div>
                </Link>
                <p className="mt-2">{person.body}</p>
                <div className="mt-3">
                  <Pill href={`/publicar?fechador=${person.slug}`} block>
                    Pedir um orçamento
                  </Pill>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
