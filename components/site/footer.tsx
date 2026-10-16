import Link from "next/link";
import { AtSign, MessageCircle, Share2 } from "lucide-react";
import { Container } from "@/components/site/container";
import { footerColumns, legalLine } from "@/lib/content";

const socials = [
  { icon: Share2, label: "Compartilhar" },
  { icon: MessageCircle, label: "Mensagens" },
  { icon: AtSign, label: "Contato" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-line">
      <Container className="py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 xl:grid-cols-5">
          {footerColumns.map(([title, links]) => (
            <div key={title}>
              <div className="mb-3 font-bold text-white">{title}</div>
              {links.map(([label, href]) => (
                <Link key={label} href={href} className="mb-2 block text-sm text-line hover:text-action">
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs text-line">Redes e lojas de aplicativos. Os links ainda não existem.</p>
        <div className="mt-3 flex items-center gap-4 text-white">
          {socials.map(({ icon: Icon, label }) => (
            <span
              key={label}
              role="link"
              aria-disabled="true"
              aria-label={`${label}, link provisório`}
              className="inline-flex size-9 items-center justify-center"
            >
              <Icon className="size-5" />
            </span>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-3">
          {[
            ["Baixar na", "App Store"],
            ["Disponível no", "Google Play"],
          ].map(([detail, name]) => (
            <span
              key={name}
              role="link"
              aria-disabled="true"
              aria-label={`${detail} ${name}, link provisório`}
              className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/40 bg-white px-3 py-1 text-ink"
            >
              <span className="text-caps leading-none uppercase">{detail}</span>
              <span className="text-sm font-bold">{name}</span>
            </span>
          ))}
        </div>
        <div className="mt-6 text-xs text-line">{legalLine}</div>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-line">
          <Link href="/parceiros" className="hover:text-action">
            Parceiros
          </Link>
          <Link href="/estudantes" className="hover:text-action">
            Desconto estudantil
          </Link>
          <Link href="/seguro" className="hover:text-action">
            Seguro
          </Link>
          <Link href="/guias-de-preco" className="hover:text-action">
            Guias de preço
          </Link>
          <Link href="/guias-de-servico" className="hover:text-action">
            Guias de serviço
          </Link>
          <Link href="/comparacoes" className="hover:text-action">
            Comparações
          </Link>
          <Link href="/tendencias" className="hover:text-action">
            Tendências
          </Link>
        </div>
      </Container>
    </footer>
  );
}
