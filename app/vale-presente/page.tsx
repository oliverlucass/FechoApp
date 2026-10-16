"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/site/logo";
import { giftAmounts, giftDesigns } from "@/lib/content";

export default function GiftPage() {
  const [who, setWho] = useState<"eu" | "outro">("eu");
  const [design, setDesign] = useState(giftDesigns[0]);
  const [count, setCount] = useState(1);
  const [amount, setAmount] = useState("$50");

  return (
    <div className="min-h-screen bg-white">
      <header className="flex h-16 items-center px-5 xl:px-7">
        <Logo />
        <div className="flex-1" />
        <span className="rounded-full border border-action-edge bg-action px-3 py-2 text-on-action">Carrinho</span>
        <Link href="/" className="ml-3 text-link">
          fechoapp.com →
        </Link>
      </header>
      <main className="grid gap-7 p-5 xl:grid-cols-2 xl:p-7">
        <div>
          <h1 className="text-[32px] leading-none font-extrabold text-ink xl:text-[40px]">
            Escolha seu vale-presente FechoApp
          </h1>
          <h2 className="mt-4 font-bold">Para quem você quer enviar este vale-presente?</h2>
          <div className="mt-2 flex gap-2">
            <button
              type="button"
              onClick={() => setWho("eu")}
              className={`rounded-full px-4 py-2 ${who === "eu" ? "bg-ink text-white" : "bg-surface"}`}
            >
              Para mim
            </button>
            <button
              type="button"
              onClick={() => setWho("outro")}
              className={`rounded-full px-4 py-2 ${who === "outro" ? "bg-ink text-white" : "bg-surface"}`}
            >
              Para outra pessoa
            </button>
          </div>
          <h2 className="mt-4 font-bold">Como você quer que o vale-presente fique?</h2>
          <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {giftDesigns.map((tile) => (
              <button
                key={tile}
                type="button"
                onClick={() => setDesign(tile)}
                className="flex h-[52px] items-center justify-center rounded-lg border border-action-edge bg-action px-1 text-center text-[11px] font-bold text-on-action"
              >
                {tile}
              </button>
            ))}
          </div>
          <h2 className="mt-4 font-bold">Quantos você precisa?</h2>
          <div className="mt-2 flex items-center gap-3 text-[16px]">
            <button type="button" aria-label="Diminuir" onClick={() => setCount((value) => Math.max(1, value - 1))}>
              −
            </button>
            <span>{count}</span>
            <button type="button" aria-label="Aumentar" onClick={() => setCount((value) => value + 1)}>
              +
            </button>
          </div>
          <h2 className="mt-4 font-bold">Qual o valor deste vale-presente?</h2>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {giftAmounts.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setAmount(value)}
                className={`rounded-chip border px-2 py-1.5 ${amount === value ? "border-link text-link" : "border-line text-ink"}`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
        <div className="flex min-h-[240px] flex-col items-center justify-center rounded-3xl bg-ink text-white">
          <div className="text-[36px] font-extrabold">FechoApp</div>
          <div>{design}</div>
        </div>
      </main>
    </div>
  );
}
