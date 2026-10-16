"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { StarRating } from "@/components/site/star-rating";
import { homeReviews, homeTabs } from "@/lib/content";

export function HomeReviews() {
  const [current, setCurrent] = useState(0);
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const cards = homeReviews.filter((item) => item.tab === homeTabs[current]);

  function select(index: number) {
    const next = (index + homeTabs.length) % homeTabs.length;
    setCurrent(next);
    tabsRef.current[next]?.focus();
  }

  return (
    <div>
      <div role="tablist" aria-label="Tipos de tarefa" className="my-4 flex flex-wrap justify-center gap-x-4 gap-y-2">
        {homeTabs.map((tab, index) => {
          const selected = index === current;
          return (
            <button
              key={tab}
              ref={(node) => {
                tabsRef.current[index] = node;
              }}
              type="button"
              role="tab"
              id={`home-tab-${index}`}
              aria-selected={selected}
              aria-controls="home-review-panel"
              tabIndex={selected ? 0 : -1}
              className={selected ? "border-b-2 border-indicator pb-1.5 font-bold text-link" : "font-medium text-text"}
              onClick={() => setCurrent(index)}
              onKeyDown={(event) => {
                if (event.key === "ArrowRight") {
                  event.preventDefault();
                  select(index + 1);
                } else if (event.key === "ArrowLeft") {
                  event.preventDefault();
                  select(index - 1);
                } else if (event.key === "Home") {
                  event.preventDefault();
                  select(0);
                } else if (event.key === "End") {
                  event.preventDefault();
                  select(homeTabs.length - 1);
                }
              }}
            >
              {tab}
            </button>
          );
        })}
      </div>
      <div
        role="tabpanel"
        id="home-review-panel"
        aria-labelledby={`home-tab-${current}`}
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3"
      >
        {cards.map((card) => (
          <Link key={card.href} href={card.href} className="rounded-card border border-line bg-white p-4">
            <Image src={card.photo} alt="" width={56} height={56} unoptimized className="size-14 rounded-thumb" />
            <div className="mt-3 text-caps font-bold tracking-[0.6px] text-muted uppercase">{card.kind}</div>
            <h3 className="mt-1 font-sans text-base font-bold text-ink">{card.title}</h3>
            <p className="mt-2 text-sm text-text">{card.review}</p>
            <p className="mt-1 text-sm text-muted">{card.name}</p>
            <div className="mt-3 flex items-center justify-between gap-3">
              <StarRating rating={card.rating} />
              <span className="font-bold text-ink">{card.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
