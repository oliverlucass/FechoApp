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
    <Link href={href} className="mb-2.5 flex items-start justify-between gap-3 rounded-2xl bg-white p-3.5">
      <div>
        <div className="font-extrabold text-[#061257]">{title}</div>
        <div className="mt-1 text-[12px]">{meta}</div>
        <div className="mt-1.5 font-bold text-[#0A65FC]">{offers}</div>
      </div>
      <div className="font-extrabold text-[#061257]">{price}</div>
    </Link>
  );
}
