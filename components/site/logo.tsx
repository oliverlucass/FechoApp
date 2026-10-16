import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`font-heading text-[22px] font-extrabold text-ink ${className}`}>
      FechoApp
    </Link>
  );
}
