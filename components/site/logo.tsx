import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`text-[22px] font-extrabold tracking-[-0.6px] text-[#0A65FC] ${className}`}
    >
      FechoApp
    </Link>
  );
}
