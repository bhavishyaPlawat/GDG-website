import { useState } from "react";
import { cn } from "@/lib/utils";

export function GdgLogo({ className }: { className?: string }) {
  const [src, setSrc] = useState<string | null>("/logo.svg");

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {src ? (
        // Try /logo.svg then /logo.png; fall back to mark if both fail
        <img
          src={src}
          alt="Logo"
          className="h-6 w-auto"
          onError={() => setSrc(src === "/logo.svg" ? "/logo.png" : null)}
        />
      ) : (
        <>
          <span className="sr-only">Google Developer Groups</span>
          <svg width="28" height="20" viewBox="0 0 28 20" fill="none" aria-hidden>
            <rect x="0" y="8" width="10" height="4" rx="2" fill="hsl(var(--gdg-blue))" />
            <rect x="0.9" y="1.6" width="10" height="4" rx="2" transform="rotate(30 0.9 1.6)" fill="hsl(var(--gdg-green))" />
            <rect x="17.1" y="14.4" width="10" height="4" rx="2" transform="rotate(30 17.1 14.4)" fill="hsl(var(--gdg-yellow))" />
            <rect x="18" y="8" width="10" height="4" rx="2" fill="hsl(var(--gdg-red))" />
          </svg>
        </>
      )}
    </div>
  );
}
