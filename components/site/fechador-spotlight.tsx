import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/container";
import { StarRating } from "@/components/site/star-rating";
import { fechadorSpotlight } from "@/lib/content";

const badges = ["Identidade", "Pagamento", "Celular"];

export function FechadorSpotlight() {
  return (
    <section aria-labelledby="fechadores-destaque" className="bg-white">
      <Container className="py-12">
        <h2 id="fechadores-destaque" className="text-center text-h1 font-extrabold text-ink">
          Comece a ganhar como Fechador
        </h2>
        <p className="mt-2 text-center text-sm text-muted">
          Perfis de exemplo. As taxas de conclusão e as frases de avaliação não vêm de um cadastro real.
        </p>
        <ul className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2" aria-label="Fechadores em destaque">
          {fechadorSpotlight.map((person) => (
            <li key={person.slug} className="w-72 shrink-0 snap-start rounded-card border border-line bg-white p-4">
              <Image
                src={person.photo}
                alt=""
                width={64}
                height={64}
                unoptimized
                className="size-16 rounded-full"
              />
              <h3 className="mt-3 font-sans text-lg font-bold text-ink">
                <Link href={`/fechadores/${person.slug}`} className="text-link">
                  {person.name}
                </Link>
              </h3>
              <div className="mt-2">
                <StarRating rating={person.rating} />
              </div>
              <p className="mt-2 text-sm text-text">{person.completion} de conclusão</p>
              <p className="text-sm text-muted">{person.reviews}</p>
              <p className="mt-2 text-sm text-ink">Especialidades: {person.specialties.join(", ")}</p>
              <p className="mt-2 text-sm text-text">{person.body}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Selos de exemplo">
                {badges.map((badge) => (
                  <li key={badge} className="rounded-pill bg-action-tint px-2 py-0.5 text-caps font-bold text-ink">
                    {badge}
                  </li>
                ))}
              </ul>
              <figure className="mt-3">
                <figcaption className="text-caps font-bold tracking-[0.6px] text-muted uppercase">
                  O que as avaliações dizem
                </figcaption>
                <blockquote className="mt-1 text-sm text-text">{person.quote}</blockquote>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
