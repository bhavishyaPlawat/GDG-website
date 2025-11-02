import { Link } from "react-router-dom";

const allBlogs = Array.from({ length: 18 }).map((_, i) => ({
  title: `Insight ${i + 1}: Building better apps`,
  tag: ["Web", "Android", "Cloud", "ML"][i % 4],
  date: new Date(2025, 8, (i % 28) + 1).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }),
}));

export default function Blogs() {
  return (
    <section className="container py-16">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">All Tech Blogs</h1>
          <p className="text-muted-foreground">Articles and tutorials from GDG GLBITM members.</p>
        </div>
        <Link to="/#blogs" className="text-sm text-[hsl(var(--gdg-blue))] hover:underline">Back to homepage</Link>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allBlogs.map((b, idx) => (
          <article key={idx} className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-xs text-muted-foreground">{b.date}</div>
            <h3 className="mt-1 font-semibold">{b.title}</h3>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
              <span className="h-2 w-2 rounded-full bg-[hsl(var(--gdg-blue))]" />
              {b.tag}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
