import { motion } from 'framer-motion';
import { education, profile } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';

export default function About() {
  const facts = [
    { k: 'Education', v: 'B.Tech in CSE', s: `${education[0].school} · ${education[0].score}` },
    { k: 'Specialization', v: 'Data Science & ML', s: 'Statistical modeling, deep learning & applied AI' },
    { k: 'Core Languages', v: 'Python, SQL, C++', s: 'Algorithms, data manipulation & API backends' },
    { k: 'Location', v: profile.location, s: 'Punjab / Rajasthan, India' },
  ];

  return (
    <>
      <SectionHeading kicker="Background & Profile" title="About Me" />
      <div className="gutter grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
        <motion.div
          className="mx-auto w-full max-w-md lg:max-w-none"
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1, ease: EASE }}
        >
          {/* Clean portrait frame without television badge overlays */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-sky-400/25 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_30%,#1e3a8a,#0f172a_60%,#090e17)]" />
            <div className="absolute inset-0 opacity-20 [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_28px)]" />
            <img
              src="/assets/portrait-720.webp"
              srcSet={profile.portrait.srcSet}
              sizes="(max-width: 1024px) 90vw, 40vw"
              alt={profile.portrait.alt}
              loading="lazy"
              className="absolute bottom-0 left-1/2 h-[94%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent" />
          </div>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="space-y-4"
          >
            <h3 className="font-sans text-2xl font-bold tracking-tight text-bone sm:text-3xl">
              Nupur Madaan
            </h3>
            <p className="font-sans text-sm font-semibold tracking-wide text-sky-400 sm:text-base">
              {profile.role}
            </p>
            <p className="font-sans text-base leading-relaxed text-slate-300 sm:text-lg">
              {profile.intro}
            </p>
          </motion.div>

          <motion.dl
            className="mt-8 grid gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08 }}
          >
            {facts.map((f) => (
              <motion.div
                key={f.k}
                className="bg-ink-2 p-5"
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
              >
                <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-300">{f.k}</dt>
                <dd className="mt-1.5 text-base font-semibold text-bone">{f.v}</dd>
                <dd className="mt-0.5 text-xs text-mist">{f.s}</dd>
              </motion.div>
            ))}
          </motion.dl>

          <div className="mt-8">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-sky-300">Technical Interests</p>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((i) => (
                <span key={i} className="glass rounded-full px-3 py-1.5 text-xs font-medium text-bone">
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
