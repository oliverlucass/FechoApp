import { Star } from "lucide-react";

export function StarRating({ rating }: { rating: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-ink" aria-label={`${rating} de 5`}>
      <span className="inline-flex" aria-hidden="true">
        {Array.from({ length: 5 }, (_, index) => (
          <Star key={index} className="size-3.5 fill-current" />
        ))}
      </span>
      <span className="text-sm font-bold">{rating}</span>
    </span>
  );
}
