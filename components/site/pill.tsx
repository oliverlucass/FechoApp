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

const sizes = {
  sm: "h-9 px-6 text-sm",
  lg: "h-12 px-8 text-base",
} as const;

export function Pill({
  href,
  tone = "action",
  size = "sm",
  block = false,
  children,
  className,
  type = "button",
  onClick,
  disabled = false,
}: {
  href?: string;
  tone?: keyof typeof tones;
  size?: keyof typeof sizes;
  block?: boolean;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}) {
  const classes = cn(
    buttonVariants({ variant: "default", size: "lg" }),
    "rounded-full py-0 text-center font-bold tracking-[0.25px] active:translate-y-0",
    sizes[size],
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
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
