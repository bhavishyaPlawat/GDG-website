import { Outlet, Link, useLocation } from "react-router-dom";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { GdgLogo } from "./Logo";

const sectionNav = [
  { to: "/#overview", label: "Overview" },
  { to: "/#technology", label: "Technology" },
  { to: "/#workshops", label: "Workshops" },
  { to: "/#blogs", label: "Tech Blogs" },
  { to: "/#gallery", label: "Gallery" },
  { to: "/#guidelines", label: "Guidelines" },
];

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = useMemo(() => {
    const hash = location.hash;
    const path = location.pathname;
    return (to: string) => path === "/" && to.endsWith(hash || "#overview");
  }, [location.hash, location.pathname]);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <GdgLogo />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {sectionNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
                isActive(item.to) ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground hover:bg-accent"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-2 flex flex-col gap-1">
            {sectionNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  isActive(item.to) ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-white/80">
      <div className="h-1 w-full bg-gradient-to-r from-[hsl(var(--gdg-blue))] via-[hsl(var(--gdg-red))] to-[hsl(var(--gdg-green))]" />
      <div className="container py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <GdgLogo />
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} GDG GLBITM</p>
        </div>
        <p className="text-sm text-muted-foreground">Made by GDG GLBITM Team</p>
      </div>
    </footer>
  );
}
