import { Link } from "react-router-dom";
import { Mail, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";
import { Modal } from "@/components/site/Modal";

const highlights = [
  { title: "Tech Talks", desc: "Hear from engineers, founders, and Googlers across modern stacks.", color: "var(--gdg-blue)" },
  { title: "Workshops", desc: "Hands-on sessions to learn by building with Web, Cloud, ML, and Android.", color: "var(--gdg-green)" },
  { title: "Community", desc: "A friendly network to collaborate, mentor, and grow careers.", color: "var(--gdg-red)" },
];

const tech = [
  { name: "Web", color: "var(--gdg-blue)" },
  { name: "Android", color: "var(--gdg-green)" },
  { name: "Cloud", color: "var(--gdg-yellow)" },
  { name: "ML/AI", color: "var(--gdg-red)" },
];

const pastEvents = [
  { title: "DevFest Recap 2024", meta: "Talks • Networking", date: "Nov 2024" },
  { title: "Cloud Run Hands‑on", meta: "Workshop • Cloud", date: "Aug 2024" },
  { title: "Compose Camp", meta: "Workshop • Android", date: "Apr 2024" },
  { title: "Web Performance 101", meta: "Talk • Web", date: "Jan 2024" },
  { title: "Intro to TensorFlowJS", meta: "Workshop • ML", date: "Oct 2023" },
];

const blogs = [
  { title: "Getting started with Vite", tag: "Web", date: "Oct 10, 2025" },
  { title: "Kotlin Coroutines made easy", tag: "Android", date: "Sep 20, 2025" },
  { title: "Serverless on Cloud Run", tag: "Cloud", date: "Sep 02, 2025" },
  { title: "Intro to TensorFlow.js", tag: "ML", date: "Aug 25, 2025" },
  { title: "Designing with Material 3", tag: "Android", date: "Aug 10, 2025" },
  { title: "PWAs in 2025", tag: "Web", date: "Jul 22, 2025" },
  { title: "Effective Firebase rules", tag: "Cloud", date: "Jul 01, 2025" },
];

type Album = { id: string; name: string; thumb: string; images: string[] };

const albumData: Album[] = [
  { id: "devfest", name: "DevFest 2024", thumb: "from-blue-100 to-blue-200", images: Array.from({ length: 9 }).map((_, i) => `from-blue-${100 + (i % 5) * 100} to-blue-${200 + (i % 5) * 100}`) },
  { id: "compose", name: "Compose Camp", thumb: "from-green-100 to-green-200", images: Array.from({ length: 8 }).map((_, i) => `from-green-${100 + (i % 5) * 100} to-green-${200 + (i % 5) * 100}`) },
  { id: "cloud", name: "Cloud Run", thumb: "from-yellow-100 to-yellow-200", images: Array.from({ length: 7 }).map((_, i) => `from-yellow-${100 + (i % 5) * 100} to-yellow-${200 + (i % 5) * 100}`) },
  { id: "webperf", name: "Web Performance", thumb: "from-slate-100 to-slate-200", images: Array.from({ length: 10 }).map((_, i) => `from-slate-${100 + (i % 5) * 100} to-slate-${200 + (i % 5) * 100}`) },
  { id: "tfjs", name: "TensorFlowJS", thumb: "from-red-100 to-red-200", images: Array.from({ length: 6 }).map((_, i) => `from-red-${100 + (i % 5) * 100} to-red-${200 + (i % 5) * 100}`) },
  { id: "android", name: "Android Study Jam", thumb: "from-emerald-100 to-emerald-200", images: Array.from({ length: 12 }).map((_, i) => `from-emerald-${100 + (i % 5) * 100} to-emerald-${200 + (i % 5) * 100}`) },
];

function AlbumCard({ album }: { album: Album }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className="min-w-[18rem] sm:min-w-[22rem] snap-start text-left rounded-2xl border bg-white p-4 shadow-sm">
        <div className={`aspect-[4/3] w-full rounded-xl bg-gradient-to-br ${album.thumb}`} />
        <div className="mt-3">
          <div className="font-semibold">{album.name}</div>
          <div className="text-xs text-muted-foreground">{album.images.length} photos</div>
        </div>
      </button>
      <Modal open={open} onClose={() => setOpen(false)} title={album.name}>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {album.images.map((g, i) => (
            <div key={i} className={`aspect-[4/3] rounded-lg bg-gradient-to-br ${g}`} />
          ))}
        </div>
      </Modal>
    </>
  );
}

export default function Index() {
  return (
    <div className="bg-gradient-to-b from-white to-slate-50">
      {/* Introduction */}
      <section id="introduction" className="relative overflow-hidden scroll-mt-24">
        <div className="h-1 w-full bg-gradient-to-r from-[hsl(var(--gdg-blue))] via-[hsl(var(--gdg-red))] to-[hsl(var(--gdg-green))]" />
        <div className="container py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Google Developer Groups
                <span
                className="block text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "url(https://media.tenor.com/agFP33l54LEAAAAM/sziv%C3%A1rv%C3%A1ny-h%C3%A1tt%C3%A9r-rainbow-background.gif)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                GLBITM
              </span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-prose">
                A professional developer community at GL Bajaj Institute of Technology & Management. Learn, share, and build with technologies from Google and the broader ecosystem.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-[hsl(var(--gdg-blue))] px-5 py-2.5 text-white shadow-sm hover:bg-[hsl(var(--gdg-blue))]/90">
                  Join the community
                </Link>
                <a href="#overview" className="inline-flex items-center justify-center rounded-md border px-5 py-2.5 text-foreground hover:bg-accent">
                  See overview
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[hsl(var(--gdg-yellow))]/30 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[hsl(var(--gdg-green))]/20 blur-2xl" />
              <div className="relative rounded-2xl border bg-white p-6 shadow-lg">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[hsl(var(--gdg-blue))]" />
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[hsl(var(--gdg-red))]" />
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[hsl(var(--gdg-green))]" />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold tracking-tight">What is GDG?</h3>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                    Google Developer Groups (GDG) are community groups for developers interested in Google developer technologies. When you join a GDG, you'll have the opportunity to learn new skills in a variety of formats.
                  </p>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-lg border p-3">
                    <div className="text-2xl font-bold">1k+</div>
                    <div className="text-xs text-muted-foreground">Members</div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-xs text-muted-foreground">Events</div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="text-2xl font-bold">10+</div>
                    <div className="text-xs text-muted-foreground">Speakers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4" id="overview">
            {highlights.map((h) => (
              <div key={h.title} className="rounded-xl border bg-white p-4 shadow-sm">
                <div className="h-1.5 w-10 rounded-full" style={{ backgroundColor: `hsl(${h.color})` }} />
                <h3 className="mt-3 font-semibold">{h.title}</h3>
                <p className="text-sm text-muted-foreground">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview (anchor) */}
      <section id="overview" className="container py-16 scroll-mt-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center">Overview</h2>

          {/* Three key cards */}
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border p-5 shadow-sm bg-[hsl(var(--gdg-red))]/5 border-[hsl(var(--gdg-red))]">
              <h3 className="font-semibold">Concept of GDG</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                The GDG program is a grassroots channel through which Google gives advancement abilities, versatile and web development skills for undergraduates, towards employability.
              </p>
            </div>
            <div className="rounded-2xl border p-5 shadow-sm bg-[hsl(var(--gdg-blue))]/5 border-[hsl(var(--gdg-blue))]">
              <h3 className="font-semibold">Why GDG?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                For undergraduates to learn development skills, tackle problems through innovation and inspire them to be world‑class developers and changemakers.
              </p>
            </div>
            <div className="rounded-2xl border p-5 shadow-sm bg-[hsl(var(--gdg-green))]/5 border-[hsl(var(--gdg-green))]">
              <h3 className="font-semibold">Target audience</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                GDG activities are targeted at University students and any others including faculty members who want to learn development skills and work to solve real‑life problems.
              </p>
            </div>
          </div>

          {/* Opportunities two-column list */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-center md:text-left">Opportunities GDGs provide students with</h3>
            <ul className="mt-4 grid gap-6 md:grid-cols-2 list-disc pl-5">
              <li className="text-sm text-muted-foreground">
                Meet other students on campus interested in developer technologies. All are welcome, including those with diverse backgrounds and different majors.
              </li>
              <li className="text-sm text-muted-foreground">
                Learn about a wide range of technical topics where new skills are gained through hands‑on workshops, in‑person training and project building activities.
              </li>
              <li className="text-sm text-muted-foreground">
                Apply your new learnings and connections to build great solutions for local problems. Advance your skills, career and network. Give back by helping others learn as well.
              </li>
              <li className="text-sm text-muted-foreground">
                Get motivation to become world‑class engineers and changemakers from sharing others' examples of overcoming adversity.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section id="technology" className="border-t bg-white scroll-mt-24">
        <div className="container py-14">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Technology tracks</h2>
              <p className="text-muted-foreground">Explore Google-aligned technologies we focus on.</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {tech.map((t) => (
              <div key={t.name} className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: `hsl(${t.color})` }} />
                <span className="text-sm font-medium">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops slider */}
      <section id="workshops" className="border-t bg-gradient-to-b from-white to-slate-50 scroll-mt-24">
        <div className="container py-14">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Workshops</h2>
              <p className="text-muted-foreground">Swipe horizontally to explore highlights.</p>
            </div>
          </div>
          <div className="mt-6 relative">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent" />
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin">
              {pastEvents.slice(0,5).map((e) => (
                <div key={e.title} className="min-w-[18rem] sm:min-w-[22rem] snap-start rounded-2xl border bg-white p-5 shadow-sm">
                  <div className="h-1 w-full rounded bg-gradient-to-r from-[hsl(var(--gdg-blue))] via-[hsl(var(--gdg-yellow))] to-[hsl(var(--gdg-green))]" />
                  <div className="mt-3 text-sm text-muted-foreground">{e.date} • {e.meta}</div>
                  <h3 className="mt-1 text-lg font-semibold leading-snug">{e.title}</h3>
                  <div className="mt-4 h-28 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200" />
                </div>
              ))}
              <Link to="/events" className="min-w-[12rem] sm:min-w-[14rem] snap-start grid place-items-center rounded-2xl border bg-white p-6 text-sm text-[hsl(var(--gdg-blue))] hover:underline">See all workshops →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs */}
      <section id="blogs" className="border-t bg-white scroll-mt-24">
        <div className="container py-14">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Tech blogs</h2>
              <p className="text-muted-foreground">Insights and tutorials from our community.</p>
            </div>
          </div>
          <div className="mt-6 relative">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent" />
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin">
              {blogs.slice(0,5).map((b) => (
                <article key={b.title} className="min-w-[18rem] sm:min-w-[22rem] snap-start rounded-2xl border bg-white p-6 shadow-sm">
                  <div className="text-xs text-muted-foreground">{b.date}</div>
                  <h3 className="mt-1 font-semibold">{b.title}</h3>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
                    <span className="h-2 w-2 rounded-full bg-[hsl(var(--gdg-blue))]" />
                    {b.tag}
                  </div>
                </article>
              ))}
              <Link to="/blogs" className="min-w-[12rem] sm:min-w-[14rem] snap-start grid place-items-center rounded-2xl border bg-white p-6 text-sm text-[hsl(var(--gdg-blue))] hover:underline">See all blogs →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="border-t bg-gradient-to-b from-white to-slate-50 scroll-mt-24">
        <div className="container py-14">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Gallery</h2>
              <p className="text-muted-foreground">Albums grouped by event/workshop.</p>
            </div>
          </div>
          <div className="mt-6 relative">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent" />
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin">
              {albumData.slice(0,5).map((a) => (
                <AlbumCard key={a.id} album={a} />
              ))}
              <Link to="/gallery" className="min-w-[12rem] sm:min-w-[14rem] snap-start grid place-items-center rounded-2xl border bg-white p-6 text-sm text-[hsl(var(--gdg-blue))] hover:underline">See all albums →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community guidelines */}
      <section id="guidelines" className="border-t bg-white scroll-mt-24">
        <div className="container py-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Community Guidelines</h2>
            <p className="mt-3 text-sm md:text-base text-muted-foreground">
              When you join our programs, you're joining a community. And like any growing community, a few ground rules about expected
              behavior are good for everyone. Violations of this code of conduct can result in members being removed from the program.
              Use your best judgement, and if you'd like more clarity or have questions feel free to reach out.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-semibold">Be nice.</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                We're all part of the same community, so be friendly, welcoming, and generally a nice person. Be someone that other people want to be around.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Be respectful and constructive.</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Remember to be respectful and constructive with your communication to fellow members. Everyone should take responsibility for the community and take the
                initiative to diffuse tension and stop a negative thread as early as possible.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Be collaborative.</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Work together! We can learn a lot from each other. Share knowledge, and help each other out.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Participate.</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Join in on discussions, show up for in‑person meetings regularly, offer feedback, and help implement that feedback.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-3xl text-center">
            <p className="text-sm text-muted-foreground">
              Questions? Please contact: <a href="mailto:dscglbajaj@gmail.com" className="text-[hsl(var(--gdg-blue))] hover:underline">dscglbajaj@gmail.com</a>
            </p>
            <div className="mt-3 flex items-center justify-center gap-4 text-muted-foreground">
              <a href="mailto:dscglbajaj@gmail.com" aria-label="Email" className="hover:text-foreground"><Mail className="h-5 w-5" /></a>
              <a href="https://www.linkedin.com/company/google-developer-groups/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-foreground"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
