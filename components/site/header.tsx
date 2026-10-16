"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Plus, X } from "lucide-react";
import { Container } from "@/components/site/container";
import { Logo } from "@/components/site/logo";
import { Pill } from "@/components/site/pill";
import { cn } from "cn";

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
    <header className="border-b border-line bg-white xl:h-[57px]">
      <Container className="hidden h-full items-center gap-6 xl:flex">
        <Logo />
        <Pill href="/publicar" className="h-9 px-6 py-0">
          Publicar tarefa
        </Pill>
        <nav className="flex h-full items-center">
          {links.map((item) => {
            const active = isActive(path, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative mr-[22px] flex h-full items-center text-sm font-normal text-text",
                  active && "text-link",
                )}
              >
                {active ? <span className="absolute inset-x-0 top-0 h-[3px] bg-indicator" /> : null}
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex-1" />
        <Link href="/cadastrar" className="text-sm font-normal text-text">
          Cadastrar
        </Link>
        <Link href="/entrar" className="ml-5 text-sm font-normal text-text">
          Entrar
        </Link>
        <Pill href="/ganhar" tone="tint" className="ml-5 h-9 px-6 py-0">
          Seja um Fechador
        </Pill>
      </Container>

      <div className="flex h-14 items-center px-3.5 xl:hidden">
        <button
          type="button"
          className="inline-flex size-6 items-center justify-center text-ink"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
        <div className="flex-1 text-center">
          <Logo />
        </div>
        <Link
          href="/publicar"
          className="inline-flex size-9 items-center justify-center rounded-full border border-action-edge bg-action text-on-action hover:bg-action-hover"
          aria-label="Publicar tarefa"
        >
          <Plus className="size-5" />
        </Link>
      </div>

      {open ? (
        <nav className="fixed inset-0 z-50 flex flex-col bg-white px-4 xl:hidden">
          <div className="flex h-14 items-center">
            <button
              type="button"
              className="inline-flex size-6 items-center justify-center text-ink"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
            >
              <X className="size-6" />
            </button>
            <div className="flex-1 text-center">
              <Logo />
            </div>
            <Link
              href="/publicar"
              className="inline-flex size-9 items-center justify-center rounded-full border border-action-edge bg-action text-on-action"
              aria-label="Publicar tarefa"
              onClick={() => setOpen(false)}
            >
              <Plus className="size-5" />
            </Link>
          </div>
          <div className="mt-6 flex flex-col gap-4">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn("text-lg text-ink", isActive(path, item.href) && "font-bold text-link")}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/cadastrar" onClick={() => setOpen(false)} className="text-text">
              Cadastrar
            </Link>
            <Link href="/entrar" onClick={() => setOpen(false)} className="text-text">
              Entrar
            </Link>
            <Link href="/ganhar" onClick={() => setOpen(false)} className="font-bold text-ink">
              Seja um Fechador
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
