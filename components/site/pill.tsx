import type { ReactNode } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

const tones = {
  action: "border-action-edge bg-action text-on-action hover:bg-action-hover",
  white: "border-white bg-white text-ink hover:bg-white",
  ink: "border-transparent bg-ink text-white hover:bg-ink",
  tint: "border-transparent bg-action-tint text-ink hover:bg-action-tint",
} as const;

export function Pill({
  href,
  tone = "action",
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
    "h-auto rounded-full px-[18px] py-[10px] text-center text-sm font-bold active:translate-y-0",
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
