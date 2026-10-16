import { Star } from "lucide-react";

function filledStars(rating: string) {
  const value = Number(rating.replace(",", "."));
  if (!Number.isFinite(value)) return 0;
  return Math.min(5, Math.max(0, Math.round(value)));
}

export function StarRating({ rating }: { rating: string }) {
  const filled = filledStars(rating);

  return (
    <span className="inline-flex items-center gap-1 text-ink" aria-label={`${rating} de 5`}>
      <span className="inline-flex" aria-hidden="true">
        {Array.from({ length: 5 }, (_, index) => (
          <Star key={index} className={index < filled ? "size-3.5 fill-current" : "size-3.5"} />
        ))}
      </span>
      <span className="text-sm font-bold">{rating}</span>
    </span>
  );
}
