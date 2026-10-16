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
        <div className="mt-8 flex items-center gap-4 text-white">
          {socials.map(({ icon: Icon, label }) => (
            <span key={label} role="img" aria-label={label} className="inline-flex size-9 items-center justify-center">
              <Icon className="size-5" />
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
