"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { cn } from "cn";

export function FollowButton() {
  const [following, setFollowing] = useState(false);

  return (
    <button
      type="button"
      aria-pressed={following}
      onClick={() => setFollowing((value) => !value)}
      className={cn(
        "inline-flex h-7 items-center gap-1 rounded-pill bg-surface px-2.5 text-caps font-bold tracking-caps text-text uppercase",
        following && "bg-action-tint text-ink",
      )}
    >
      <Heart className={cn("size-3.5", following && "fill-current")} aria-hidden="true" />
      {following ? "Seguindo" : "Seguir"}
    </button>
  );
}
