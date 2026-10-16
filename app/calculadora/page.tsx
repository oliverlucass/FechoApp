"use client";

import { useMemo, useState } from "react";
import { Header } from "@/components/site/header";
import { Pill } from "@/components/site/pill";
import { earningSkills } from "@/lib/content";

export default function CalculatorPage() {
  const [skill, setSkill] = useState("");
  const [count, setCount] = useState(2);
  const [period, setPeriod] = useState<"semana" | "mês">("semana");
  const [result, setResult] = useState<number | null>(null);

  const monthly = useMemo(() => {
    const selected = earningSkills.find((item) => item[0] === skill);
    if (!selected) return null;
    const tasks = period === "semana" ? count * 4 : count;
    return selected[2] * tasks;
  }, [skill, count, period]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="m-4 grid items-center gap-6 rounded-[28px] bg-[#0A65FC] p-6 text-white xl:grid-cols-2 xl:p-9">
        <div>
          <h1 className="text-[36px] leading-none font-extrabold tracking-[-1px] xl:text-[46px]">
            Calculadora de renda extra do FechoApp
          </h1>
          <p className="mt-3.5 text-[18px]">Quer monetizar suas habilidades? Estime quanto você pode ganhar.</p>
        </div>
        <form
          className="rounded-[18px] bg-white p-[22px] text-[#061257]"
          onSubmit={(event) => {
            event.preventDefault();
            setResult(monthly);
          }}
        >
          <h2 className="text-[26px] font-extrabold">Quanto você poderia ganhar?</h2>
          <label className="mt-3 block font-bold" htmlFor="skill">
            Qual é a sua habilidade?
          </label>
          <select
            id="skill"
            required
            value={skill}
            onChange={(event) => {
              setSkill(event.target.value);
              setResult(null);
            }}
            className="mt-1.5 w-full rounded-lg bg-[#F3F3F7] px-2.5 py-2.5 text-[#384179]"
          >
            <option value="">Selecione sua habilidade/categoria</option>
            {earningSkills.map(([id, label]) => (
              <option key={id} value={id}>
                {label}
              </option>
            ))}
          </select>
          <div className="mt-2.5">com</div>
          <div className="mt-1.5 flex flex-wrap gap-2">
            <input
              aria-label="Quantidade de tarefas"
              className="w-16 rounded-lg bg-[#F3F3F7] px-3.5 py-2"
              type="number"
              min={1}
              max={40}
              value={count}
              onChange={(event) => {
                setCount(Number(event.target.value));
                setResult(null);
              }}
            />
            <span className="rounded-lg bg-[#F3F3F7] px-3.5 py-2">tarefas por</span>
            <select
              aria-label="Período"
              className="rounded-lg bg-[#F3F3F7] px-3.5 py-2"
              value={period}
              onChange={(event) => {
                setPeriod(event.target.value as "semana" | "mês");
                setResult(null);
              }}
            >
              <option value="semana">semana</option>
              <option value="mês">mês</option>
            </select>
          </div>
          <div className="mt-3.5">
            <Pill type="submit">Calcular seus ganhos →</Pill>
          </div>
          {result !== null ? (
            <p className="mt-3 font-extrabold">Estimativa: ${result.toLocaleString("pt-BR")} por mês</p>
          ) : null}
        </form>
      </main>
    </div>
  );
}
