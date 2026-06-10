import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  GithubLogo,
  EnvelopeSimple,
  Lightning,
  Brain,
  Graph,
  Gauge,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, StaggerGroup, StaggerItem } from "./components/motion-primitives";

const specializations = [
  {
    icon: Graph,
    title: "Workflow orchestration",
    body: "Production n8n systems that connect APIs, queue events, and run unattended.",
  },
  {
    icon: Brain,
    title: "AI-powered automation",
    body: "OpenAI, Claude, and Google Cloud AI wired into pipelines that make decisions, not just calls.",
  },
  {
    icon: Lightning,
    title: "Real-time data pipelines",
    body: "Event-driven flows with webhooks, retries, and idempotency built in from the start.",
  },
  {
    icon: Gauge,
    title: "Process and cost optimization",
    body: "Automation that replaces manual work and keeps monthly run-cost measurable and low.",
  },
];

const architecture = [
  { tool: "OpenAI GPT", role: "script generation" },
  { tool: "Google Cloud TTS", role: "voiceover synthesis" },
  { tool: "InVideo AI", role: "video rendering" },
  { tool: "YouTube Data API", role: "automated publishing" },
  { tool: "Google Sheets", role: "content pipeline management" },
  { tool: "n8n", role: "end-to-end orchestration" },
];

const stats = [
  { value: "18", label: "Workflow nodes" },
  { value: "6", label: "API integrations" },
  { value: "95%+", label: "Run reliability" },
  { value: "$29.30", label: "Monthly cost" },
];

const skillGroups = [
  { heading: "Workflow automation", items: ["n8n", "Zapier", "Make"] },
  {
    heading: "AI and APIs",
    items: ["OpenAI", "Claude API", "Google Cloud AI", "HeyGen", "ElevenLabs"],
  },
  {
    heading: "Backend and infrastructure",
    items: ["Node.js", "TypeScript", "Express", "AWS", "Docker"],
  },
  {
    heading: "Data and integration",
    items: ["Google Sheets", "Airtable", "Supabase", "REST APIs", "Webhooks"],
  },
];

export default function Home() {
  return (
    <>
      <div className="grain" aria-hidden />
      <main className="relative min-h-[100dvh] w-full overflow-x-hidden">
        {/* HERO */}
        <section className="mx-auto grid max-w-[1400px] grid-cols-1 gap-0 px-6 pt-10 md:grid-cols-12 md:px-10 md:pt-12">
          <div className="md:col-span-7 md:pr-8">
            <div className="flex items-center justify-between border-b border-ink/20 pb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
              <span>Cob Bautista</span>
              <span>Available for work</span>
            </div>
            <h1 className="display mt-8 text-[clamp(2.8rem,6.5vw,6rem)] text-ink">
              n8n
              <br />
              Automation
              <br />
              Specialist
            </h1>
          </div>

          <div className="mt-8 md:col-span-5 md:mt-0">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-night">
              <Image
                src="/hero.png"
                alt="Abstract amber workflow node graph on a dark background"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="mx-auto max-w-[1400px] px-6 pt-12 md:px-10 md:pt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <Reveal className="md:col-span-8">
              <p className="max-w-[60ch] text-2xl leading-snug text-ink md:text-4xl">
                I design and build sophisticated n8n workflows that connect
                APIs, automate business processes, and deliver measurable
                results.
              </p>
            </Reveal>
            <div className="flex items-end md:col-span-4 md:justify-end">
              <Reveal delay={0.1} className="flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-wide text-paper transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  View work <ArrowRight size={16} weight="bold" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ink transition-colors duration-200 hover:bg-ink hover:text-paper"
                >
                  Get in touch
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SPECIALIZATIONS */}
        <section className="mx-auto max-w-[1400px] px-6 pt-24 md:px-10 md:pt-36">
          <Reveal>
            <h2 className="display text-[clamp(2.4rem,6vw,5rem)] text-ink">
              What I do
            </h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink/15 bg-ink/15 md:grid-cols-2">
            {specializations.map((s) => {
              const Icon = s.icon;
              return (
                <StaggerItem
                  key={s.title}
                  className="bg-paper p-8 transition-colors duration-300 hover:bg-paper-deep md:p-10"
                >
                  <Icon size={32} weight="duotone" className="text-ink" />
                  <h3 className="mt-6 text-xl font-bold text-ink">{s.title}</h3>
                  <p className="mt-3 max-w-[42ch] leading-relaxed text-ink-soft">
                    {s.body}
                  </p>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </section>

        {/* FEATURED PROJECT — deliberate dark color-block (single theme switch) */}
        <section id="work" className="mt-24 md:mt-36">
          <div className="bg-night py-20 md:py-28">
            <div className="mx-auto max-w-[1400px] px-6 md:px-10">
              <Reveal>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber">
                  Featured project
                </p>
                <h2 className="display mt-5 text-[clamp(2.6rem,8vw,7rem)] text-paper">
                  True Crime
                  <br />
                  Content Factory
                </h2>
                <p className="mt-6 max-w-[55ch] text-lg text-paper/70">
                  An automated YouTube production system that ships a daily
                  12-minute video with zero manual intervention.
                </p>
              </Reveal>

              <StaggerGroup className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-paper/10 lg:grid-cols-4">
                {stats.map((s) => (
                  <StaggerItem key={s.label} className="bg-night px-6 py-8">
                    <div className="display text-4xl text-amber md:text-5xl">
                      {s.value}
                    </div>
                    <div className="mt-2 text-sm text-paper/60">{s.label}</div>
                  </StaggerItem>
                ))}
              </StaggerGroup>

              <div className="mt-16">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-paper/50">
                  Technical architecture
                </h3>
                <StaggerGroup className="mt-6 flex flex-col gap-3">
                  {architecture.map((a, i) => (
                    <StaggerItem
                      key={a.tool}
                      className="flex items-center gap-4 border-b border-paper/10 pb-3 md:gap-6"
                    >
                      <span className="display w-12 shrink-0 text-2xl text-paper/25">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="w-44 shrink-0 text-lg font-bold text-paper md:w-56 md:text-xl">
                        {a.tool}
                      </span>
                      <span className="text-paper/60">{a.role}</span>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>

              <Reveal delay={0.1}>
                <a
                  href="https://github.com/cobautista/true-crime-content-factory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-12 inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-semibold uppercase tracking-wide text-night transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <GithubLogo size={18} weight="fill" /> View on GitHub
                  <ArrowUpRight size={16} weight="bold" />
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="mx-auto max-w-[1400px] px-6 pt-24 md:px-10 md:pt-36">
          <Reveal>
            <h2 className="display text-[clamp(2.4rem,6vw,5rem)] text-ink">
              Stack
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-16">
            {skillGroups.map((g) => (
              <Reveal key={g.heading}>
                <div className="border-t border-ink/20 pt-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-soft">
                    {g.heading}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-ink/25 px-4 py-2 text-sm font-medium text-ink"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="mx-auto max-w-[1400px] px-6 pt-24 pb-16 md:px-10 md:pt-36"
        >
          <Reveal>
            <h2 className="display text-[clamp(3rem,11vw,9rem)] text-ink">
              Let&apos;s build
              <br />
              something
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <p className="max-w-[50ch] text-lg leading-relaxed text-ink-soft">
                Available for n8n automation projects from $200 to $500.
                Specializing in AI-powered workflows, API integrations, and
                production-grade automation systems.
              </p>
            </Reveal>
            <div className="flex flex-col gap-3 md:col-span-5 md:items-end">
              <a
                href="mailto:cobautista@gmail.com"
                className="inline-flex items-center gap-2 text-xl font-bold text-ink underline-offset-4 hover:underline"
              >
                <EnvelopeSimple size={22} weight="bold" />
                cobautista@gmail.com
              </a>
              <a
                href="https://github.com/cobautista"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xl font-bold text-ink underline-offset-4 hover:underline"
              >
                <GithubLogo size={22} weight="fill" />
                github.com/cobautista
              </a>
            </div>
          </div>
          <div className="mt-20 flex items-center justify-between border-t border-ink/20 pt-6 text-sm text-ink-soft">
            <span>Cob Bautista</span>
            <span>{new Date().getFullYear()}</span>
          </div>
        </section>
      </main>
    </>
  );
}
