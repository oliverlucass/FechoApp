"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/site/logo";
import { Pill } from "@/components/site/pill";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
  const [human, setHuman] = useState(false);
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
        <h1 className="text-center text-[28px] font-extrabold text-ink">{title}</h1>
        <Label htmlFor="email" className="sr-only">
          E-mail
        </Label>
        <Input
          id="email"
          type="email"
          required
          placeholder="E-mail*"
          className="mt-[18px] h-auto rounded-lg border-0 bg-surface px-3 py-3 text-text placeholder:text-text"
        />
        <label className="mt-2.5 flex items-center gap-2 rounded-lg bg-surface px-3 py-3">
          <Checkbox checked={human} onCheckedChange={(checked) => setHuman(checked === true)} />
          <span>Confirme que você é humano</span>
        </label>
        <div className="mt-3">
          <Pill type="submit" block>
            Continuar
          </Pill>
        </div>
        {note ? (
          <p className="mt-3 text-[13px]">
            Esta tela não envia seus dados. O FechoApp aqui é só a interface, sem servidor de login.
          </p>
        ) : null}
        <div className="mt-3">
          {altPrompt}{" "}
          <Link href={altHref} className="font-bold text-link">
            {alt}
          </Link>
        </div>
        <div className="my-3 text-center text-disabled">OU</div>
        {["Continuar com Google", "Continuar com Facebook", "Continuar com Apple"].map((item) => (
          <Button
            key={item}
            type="button"
            variant="outline"
            className="mb-2 h-auto w-full rounded-full border-line bg-white py-2.5 font-semibold text-ink hover:bg-white"
          >
            {item}
          </Button>
        ))}
        <p className="mt-4 text-xs text-text">
          Ao continuar, concordo com os{" "}
          <Link href="/termos" className="underline">
            Termos e condições
          </Link>
          , as{" "}
          <Link href="/diretrizes" className="underline">
            Diretrizes da comunidade
          </Link>{" "}
          e a{" "}
          <Link href="/privacidade" className="underline">
            Política de privacidade
          </Link>{" "}
          do FechoApp.
        </p>
      </form>
    </div>
  );
}
