import Link from "next/link";

export function TaskCard({
  href,
  title,
  meta,
  price,
  offers,
}: {
  href: string;
  title: string;
  meta: string;
  price: string;
  offers: string;
}) {
  return (
    <Link href={href} className="mb-2.5 flex items-start justify-between gap-3 rounded-card bg-white p-3.5">
      <div>
        <div className="font-extrabold text-ink">{title}</div>
        <div className="mt-1 text-xs">{meta}</div>
        <div className="mt-1.5 font-bold text-link">{offers}</div>
      </div>
      <div className="font-extrabold text-ink">{price}</div>
    </Link>
  );
}
