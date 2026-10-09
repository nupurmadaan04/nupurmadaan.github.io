import { useState } from 'react';
import { motion } from 'framer-motion';
import { achievements, credentials, education, experience, profile, projects, skillCategories } from '../data/portfolio';
import { EASE, Magnetic, SectionHeading } from './fx';

/** THE FULL STORY — designed resume preview, download actions, and verified credentials showcase. */
export default function ResumeSection({ onView }: { onView: () => void }) {
  return (
    <>
      <SectionHeading kicker="The screenplay" title="The Full Story" />
      <div className="gutter grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.1, ease: EASE }}
          style={{ transformPerspective: 1600 }}
        >
          <CollapsibleSheet />
        </motion.div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-serif text-3xl italic leading-tight text-bone">Every episode, on one page.</p>
          <p className="mt-3 text-sm leading-relaxed text-mist">
            Education, internships, projects, and {credentials.length} verified technical credentials & training programs — view here or download a copy.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Magnetic className="w-full">
              <button
                type="button"
                data-cursor="view"
                onClick={onView}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-bone px-6 text-[15px] font-bold text-ink transition hover:bg-white"
              >
                ▶ View Resume
              </button>
            </Magnetic>
            <Magnetic className="w-full">
              <a
                href={profile.resumePdf}
                download="Nupur_Madaan_Resume.pdf"
                data-cursor="link"
                className="glass flex min-h-12 w-full items-center justify-center gap-2 rounded-md px-6 text-[15px] font-semibold text-bone transition hover:bg-white/15"
              >
                ⤓ Download Resume
              </a>
            </Magnetic>
          </div>
          <dl className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-xl bg-white/10 text-center">
            {[
              { v: education[0].score.replace('CGPA ', ''), k: 'CGPA' },
              { v: String(projects.length), k: 'Originals' },
              { v: String(experience.length), k: 'Internships' },
            ].map((s) => (
              <div key={s.k} className="bg-ink-2 px-2 py-4">
                <dd className="font-display text-3xl leading-none text-bone">{s.v}</dd>
                <dt className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-smoke">{s.k}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Verified Credentials, Virtual Experiences & Training Showcase */}
      <div className="gutter mt-16 pt-8 border-t border-white/10">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-sky-400">Verified Credentials & Experience</p>
            <h3 className="mt-1 font-display text-3xl tracking-wide text-bone sm:text-4xl">Certifications & Practical Training</h3>
          </div>
          <p className="max-w-md text-xs text-mist">
            Official applied skills credentials, virtual experience completions, program certificates, and practical engineering milestones with verified links.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5% 0px' }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: EASE }}
              className="group flex flex-col justify-between rounded-xl bg-ink-2 p-5 ring-1 ring-white/10 transition duration-300 hover:ring-sky-400/40 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400">{c.issuer}</span>
                  <span className="rounded-full bg-white/[0.06] px-2.5 py-0.5 text-[10px] font-semibold text-mist">
                    {c.category}
                  </span>
                </div>
                <h4 className="mt-3 text-base font-semibold leading-snug text-bone group-hover:text-sky-200 transition">
                  {c.name}
                </h4>
                {c.description && <p className="mt-2 text-xs leading-relaxed text-bone/70">{c.description}</p>}
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="link"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-300 hover:text-white transition group-hover:underline underline-offset-4"
                >
                  <span>{c.actionText}</span>
                  <span className="text-[11px]">↗</span>
                </a>
                <span className="text-[10px] text-smoke">
                  {c.isFormalCertification ? 'Verified Credential' : 'Verified Program'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

/** On phones the sheet starts as a teaser so the page keeps its pace; desktop shows it in full. */
function CollapsibleSheet() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div className={`overflow-hidden transition-[max-height] duration-700 ease-[var(--ease-cine)] md:max-h-none ${open ? 'max-h-[4000px]' : 'max-h-[560px]'}`}>
        <ResumeSheet />
      </div>
      {!open && (
        <div className="absolute inset-x-0 bottom-0 flex h-48 items-end justify-center rounded-b-2xl bg-gradient-to-t from-ink via-ink/85 to-transparent pb-4 md:hidden">
          <button type="button" onClick={() => setOpen(true)} className="glass min-h-11 rounded-full px-5 text-sm font-semibold text-bone">
            Read the full story ↓
          </button>
        </div>
      )}
    </div>
  );
}

function H({ children }: { children: string }) {
  return <h4 className="mb-3 mt-7 border-b border-white/10 pb-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-sky-300 first:mt-0">{children}</h4>;
}

export function ResumeSheet() {
  return (
    <article className="relative overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#0f172a,#090e17)] p-6 ring-1 ring-white/10 sm:p-10">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/70 to-transparent" />
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <p className="text-[10px] font-bold tracking-[0.34em] text-smoke">STARRING</p>
          <h3 className="mt-1 font-display text-[clamp(1.9rem,4.4vw,3.2rem)] leading-[0.9] tracking-wide text-bone">{profile.fullName}</h3>
        </div>
        <div className="text-xs leading-relaxed text-mist sm:text-right">
          <a href={`mailto:${profile.email}`} className="block hover:text-bone">
            {profile.email}
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-bone">
            LinkedIn ↗
          </a>
          {' · '}
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="hover:text-bone">
            GitHub ↗
          </a>
        </div>
      </header>

      <div className="grid gap-x-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <H>Education</H>
          {education.map((e) => (
            <div key={e.school} className="mb-4">
              <div className="flex flex-wrap justify-between gap-x-3">
                <p className="text-sm font-semibold text-bone">
                  {e.school}, {e.place}
                </p>
                <p className="text-xs text-smoke">{e.period}</p>
              </div>
              <p className="text-xs text-mist">
                {e.degree} · <span className="text-bone/80">{e.score}</span>
              </p>
            </div>
          ))}

          <H>Work Experience & Internships</H>
          {experience.map((x) => (
            <div key={x.company} className="mb-5">
              <div className="flex flex-wrap justify-between gap-x-3">
                <p className="text-sm font-semibold text-bone">
                  {x.company} — {x.role}
                </p>
                <p className="text-xs text-smoke">{x.period}</p>
              </div>
              <ul className="mt-2 space-y-1.5">
                {x.points.map((p) => (
                  <li key={p} className="flex gap-2 text-xs leading-relaxed text-mist">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sky-400" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <H>Projects</H>
          {projects.map((p) => (
            <div key={p.id} className="mb-3">
              <div className="flex flex-wrap justify-between gap-x-3">
                <p className="text-sm font-semibold text-bone">{p.title}</p>
                <p className="text-xs text-smoke">{p.year}</p>
              </div>
              <p className="text-xs text-mist">{p.stack.join(', ')}</p>
            </div>
          ))}
        </div>

        <div>
          <H>Skills</H>
          <div className="space-y-2">
            {skillCategories.map((c) => (
              <p key={c.id} className="text-xs leading-relaxed text-mist">
                <span className="font-semibold text-bone">{c.title}: </span>
                {c.skills.map((s) => s.name).join(', ')}
              </p>
            ))}
          </div>

          <H>Achievements & Open Source</H>
          <ul className="space-y-2">
            {achievements.map((a) => (
              <li key={a.id} className="text-xs leading-relaxed text-mist">
                <span className="font-semibold text-bone">
                  {a.title} — {a.org}.
                </span>{' '}
                {a.detail}
              </li>
            ))}
          </ul>

          <H>Credentials & Practical Training</H>
          <ul className="space-y-2.5">
            {credentials.map((c) => (
              <li key={c.name} className="text-xs leading-snug">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <span className="font-semibold text-bone">{c.issuer}: </span>
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] text-sky-300 hover:text-white underline decoration-sky-400/40 hover:decoration-sky-300 underline-offset-2"
                  >
                    {c.actionText} ↗
                  </a>
                </div>
                <p className="text-mist text-[11px]">{c.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
