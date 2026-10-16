"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/site/logo";
import { Pill } from "@/components/site/pill";

const links = [
  { href: "/categorias", label: "Categorias" },
  { href: "/tarefas", label: "Ver tarefas" },
  { href: "/como-funciona", label: "Como funciona" },
  { href: "/vale-presente", label: "Vale-presente" },
];

function isActive(path: string, href: string) {
  if (href === "/tarefas") return path.startsWith("/tarefas");
  return path === href || path.startsWith(`${href}/`);
}

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="hidden h-16 items-center gap-[18px] px-7 xl:flex">
        <Logo />
        <Pill href="/publicar">Publicar tarefa</Pill>
        <nav className="flex items-center gap-[18px]">
          {links.map((item) => {
            const active = isActive(path, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "text-sm font-bold text-link" : "text-sm font-medium text-text"}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex-1" />
        <Link href="/cadastrar" className="text-text">
          Cadastrar
        </Link>
        <Link href="/entrar" className="text-text">
          Entrar
        </Link>
        <Link href="/ganhar" className="rounded-full bg-surface px-3.5 py-2 font-semibold text-text">
          Seja um Fechador
        </Link>
      </div>

      <div className="flex h-14 items-center px-3.5 xl:hidden">
        <button
          type="button"
          className="text-[20px] text-ink"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "×" : "≡"}
        </button>
        <div className="flex-1 text-center" onClick={() => setOpen(false)}>
          <Logo />
        </div>
        <Link
          href="/publicar"
          className="inline-flex size-9 items-center justify-center rounded-full border border-action-edge bg-action text-lg font-extrabold text-on-action hover:bg-action-hover"
          aria-label="Publicar tarefa"
        >
          +
        </Link>
      </div>
      {open ? (
        <nav className="flex flex-col gap-3 border-t border-line px-4 py-4 xl:hidden">
          {links.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="font-semibold text-ink">
              {item.label}
            </Link>
          ))}
          <Link href="/cadastrar" onClick={() => setOpen(false)} className="text-text">
            Cadastrar
          </Link>
          <Link href="/entrar" onClick={() => setOpen(false)} className="text-text">
            Entrar
          </Link>
          <Link href="/ganhar" onClick={() => setOpen(false)} className="text-text">
            Seja um Fechador
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
