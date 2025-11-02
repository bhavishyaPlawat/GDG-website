import { Link } from "react-router-dom";

export default function Placeholder({ title, description }: { title: string; description?: string }) {
  return (
    <section className="container py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">{title}</h1>
        {description && <p className="text-muted-foreground mb-6">{description}</p>}
        <div className="inline-flex items-center gap-2 rounded-lg border bg-card p-2 pr-4 text-sm">
          <div className="h-5 w-5 rounded bg-[hsl(var(--gdg-blue))]" />
          <span>
            Want this page implemented? Continue the prompt and we’ll fill it in. Go back to <Link to="/" className="text-[hsl(var(--gdg-blue))] hover:underline">Home</Link>.
          </span>
        </div>
      </div>
    </section>
  );
}
