"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/site/logo";
import { Pill } from "@/components/site/pill";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { postSteps } from "@/lib/content";

const whenOptions = ["Em uma data ▾", "Antes de uma data ▾", "Estou flexível"];

export default function PostPage() {
  const [step, setStep] = useState(0);
  const [title, setTitle] = useState("");
  const [when, setWhen] = useState("");
  const [place, setPlace] = useState("");
  const [remote, setRemote] = useState(false);
  const [details, setDetails] = useState("");
  const [budget, setBudget] = useState("");
  const [done, setDone] = useState(false);

  function next() {
    if (step < postSteps.length - 1) {
      setStep(step + 1);
      return;
    }
    setDone(true);
  }

  return (
    <div className="relative min-h-screen bg-white">
      <header className="flex h-16 items-center px-5">
        <div className="flex-1" />
        <Logo />
        <div className="flex-1 text-right">
          <Link href="/" className="text-[22px] text-ink" aria-label="Fechar">
            ×
          </Link>
        </div>
      </header>
      <main className="grid px-5 pb-20 xl:grid-cols-[220px_1fr] xl:px-10">
        <div className="mb-4 xl:mb-0">
          <div className="mb-3 font-bold">Publicar uma tarefa</div>
          <div className="flex gap-3 overflow-x-auto xl:block">
            {postSteps.map((item, index) => (
              <button
                key={item}
                type="button"
                onClick={() => setStep(index)}
                className={`shrink-0 border-b-2 py-2 text-left xl:block xl:w-full xl:border-b-0 xl:border-l-[3px] xl:py-2 xl:pr-0 xl:pl-2.5 ${
                  index === step
                    ? "border-indicator font-bold text-ink"
                    : "border-transparent font-medium text-disabled"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="max-w-[560px]">
          {done ? (
            <>
              <h1 className="text-[32px] font-extrabold text-ink">Tarefa anotada neste aparelho</h1>
              <p className="mt-3">
                {title || "Sem título"} · {when}
                {remote ? " · Remoto" : place ? ` · ${place}` : ""} · {budget || "sem orçamento"}
              </p>
              <p className="mt-2">{details}</p>
              <p className="mt-3 text-fine">Nada foi enviado. Esta versão não tem servidor.</p>
            </>
          ) : (
            <>
              <h1 className="text-[32px] font-extrabold text-ink">
                {step === 0 ? "Vamos começar pelo básico" : postSteps[step]}
              </h1>
              {step === 0 ? (
                <>
                  <Label className="mt-4 font-bold text-text" htmlFor="titulo">
                    Em poucas palavras, o que você precisa?
                  </Label>
                  <Input
                    id="titulo"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="ex.: Ajuda para mudar meu sofá"
                    className="mt-2 h-auto rounded-[10px] border-0 bg-surface px-3.5 py-3.5 text-text placeholder:text-disabled"
                  />
                  <div className="mt-4 font-bold">Quando você precisa disso?</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {whenOptions.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setWhen(item)}
                        className={`rounded-full border px-3.5 py-2 ${when === item ? "border-ink bg-ink text-white" : "border-ink text-ink"}`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </>
              ) : null}
              {step === 1 ? (
                <>
                  <Label className="mt-4 font-bold text-text" htmlFor="local">
                    Onde isso precisa ser feito?
                  </Label>
                  <Input
                    id="local"
                    value={place}
                    onChange={(event) => setPlace(event.target.value)}
                    placeholder="ex.: Kensington VIC"
                    className="mt-2 h-auto rounded-[10px] border-0 bg-surface px-3.5 py-3.5"
                  />
                  <button
                    type="button"
                    onClick={() => setRemote((value) => !value)}
                    className={`mt-3 rounded-full border border-ink px-3.5 py-2 ${remote ? "bg-ink text-white" : "text-ink"}`}
                  >
                    Remoto
                  </button>
                </>
              ) : null}
              {step === 2 ? (
                <>
                  <Label className="mt-4 font-bold text-text" htmlFor="detalhes">
                    Conte os detalhes importantes
                  </Label>
                  <textarea
                    id="detalhes"
                    value={details}
                    onChange={(event) => setDetails(event.target.value)}
                    className="mt-2 min-h-32 w-full rounded-[10px] bg-surface px-3.5 py-3.5"
                    placeholder="ex.: Townhouse de dois quartos, só a parte interna."
                  />
                </>
              ) : null}
              {step === 3 ? (
                <>
                  <Label className="mt-4 font-bold text-text" htmlFor="orcamento">
                    Qual é o seu orçamento?
                  </Label>
                  <Input
                    id="orcamento"
                    value={budget}
                    onChange={(event) => setBudget(event.target.value)}
                    placeholder="$450"
                    className="mt-2 h-auto rounded-[10px] border-0 bg-surface px-3.5 py-3.5"
                  />
                </>
              ) : null}
            </>
          )}
        </div>
      </main>
      {done ? null : (
        <div className="px-5 pb-6 xl:px-20">
          <Pill block onClick={next}>
            {step === postSteps.length - 1 ? "Publicar tarefa" : "Avançar"}
          </Pill>
        </div>
      )}
    </div>
  );
}
