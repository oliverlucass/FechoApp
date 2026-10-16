"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/site/logo";
import { Pill } from "@/components/site/pill";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const providers = ["Google", "Facebook", "Apple"];

export function AuthScreen({
  title,
  altPrompt,
  alt,
  altHref,
}: {
  title: string;
  altPrompt: string;
  alt: string;
  altHref: string;
}) {
  const [note, setNote] = useState(false);

  return (
    <div className="min-h-screen bg-white px-5 pt-7 pb-10">
      <div className="text-center">
        <Logo />
      </div>
      <form
        className="mx-auto mt-12 max-w-[420px]"
        onSubmit={(event) => {
          event.preventDefault();
          setNote(true);
        }}
      >
        <h1 className="text-center font-heading text-[28px] font-extrabold text-ink">{title}</h1>
        <Label htmlFor="email" className="mt-[18px] text-text">
          E-mail
        </Label>
        <Input id="email" type="email" required placeholder="voce@email.com" className="mt-1.5" />
        <div className="mt-3">
          <Pill type="submit" block>
            Continuar
          </Pill>
        </div>
        {note ? (
          <p className="mt-3 text-fine">
            Esta tela não envia seus dados. O Fechô aqui é só a interface, sem servidor de login.
          </p>
        ) : null}
        <div className="mt-3">
          {altPrompt}{" "}
          <Link href={altHref} className="font-bold text-link">
            {alt}
          </Link>
        </div>
        <div className="my-3 text-center text-disabled">OU</div>
        {providers.map((item) => (
          <Button
            key={item}
            type="button"
            variant="outline"
            className="mb-2 h-12 w-full rounded-full border-line bg-white font-semibold text-ink hover:bg-white"
          >
            Continuar com {item}
          </Button>
        ))}
        <p className="mt-4 text-xs text-text">
          Ao continuar, concordo com os{" "}
          <Link href="/termos" className="text-link underline">
            Termos e condições
          </Link>
          , as{" "}
          <Link href="/diretrizes" className="text-link underline">
            Diretrizes da comunidade
          </Link>{" "}
          e a{" "}
          <Link href="/privacidade" className="text-link underline">
            Política de privacidade
          </Link>{" "}
          do Fechô.
        </p>
      </form>
    </div>
  );
}
