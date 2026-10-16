import Link from "next/link";
import { cn } from "cn";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Fechô"
      className={cn(
        "inline-flex items-center font-heading text-[26px] leading-none font-extrabold tracking-[0.3px] text-ink",
        className,
      )}
    >
      Fech
      <span className="ml-px rounded-[6px] bg-action px-1.5 text-on-action">ô</span>
    </Link>
  );
}
