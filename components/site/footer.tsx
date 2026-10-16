import Link from "next/link";
import { footerColumns, legalLine } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-ink px-7 pt-7 pb-[18px] text-line">
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-5">
        {footerColumns.map(([title, links]) => (
          <div key={title}>
            <div className="mb-2 font-bold text-white">{title}</div>
            {links.map(([label, href]) => (
              <Link key={label} href={href} className="mb-[5px] block text-fine hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-[18px] text-[12px]">{legalLine}</div>
      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[12px]">
        <Link href="/parceiros">Parceiros</Link>
        <Link href="/estudantes">Desconto estudantil</Link>
        <Link href="/seguro">Seguro</Link>
        <Link href="/guias-de-preco">Guias de preço</Link>
        <Link href="/guias-de-servico">Guias de serviço</Link>
        <Link href="/comparacoes">Comparações</Link>
        <Link href="/tendencias">Tendências</Link>
      </div>
    </footer>
  );
}
