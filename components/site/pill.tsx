import type { ReactNode } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

const tones = {
  blue: "bg-[#0A65FC] text-white hover:bg-[#0A65FC]",
  white: "bg-white text-[#061257] hover:bg-white",
  navy: "bg-[#061257] text-white hover:bg-[#061257]",
  ghost: "bg-[#F3F3F7] text-[#061257] hover:bg-[#F3F3F7]",
} as const;

export function Pill({
  href,
  tone = "blue",
  block = false,
  children,
  className,
  type = "button",
  onClick,
}: {
  href?: string;
  tone?: keyof typeof tones;
  block?: boolean;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const classes = cn(
    buttonVariants({ variant: "default", size: "lg" }),
    "h-auto rounded-full border-0 px-[18px] py-[10px] text-center text-[14px] font-bold tracking-[0.2px] shadow-none active:translate-y-0",
    tones[tone],
    block && "flex w-full",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
