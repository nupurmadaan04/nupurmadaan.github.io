import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { profile, projects, type ProfileId } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE, Magnetic, Particles } from './fx';
import { SeriesMark } from './Poster';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.25 } } };
const item = {
  hidden: { opacity: 0, y: 32, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: EASE } },
};

export default function Hero({
  onPlay,
  onResume,
  profileId,
}: {
  onPlay: () => void;
  onResume: () => void;
  profileId: ProfileId;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollTo } = useSmoothScroll();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // scroll parallax
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);
  const fade = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const blackout = useTransform(scrollYProgress, [0.35, 1], [0, 1]);

  const meta = [
    'B.Tech CSE (2023–2027)',
    'Mody University',
    `${projects.length} Originals`,
    '4 Internships',
  ];

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] overflow-hidden">
      {/* atmosphere */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute right-[-10%] top-[-10%] h-[90vh] w-[80vw] rounded-full bg-[radial-gradient(closest-side,rgba(56,189,248,0.28),rgba(129,140,248,0.08)_55%,transparent)] blur-2xl lg:right-[-4%] lg:w-[60vw]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[70vh] w-[60vw] rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.22),transparent)] blur-2xl" />
      </div>
      <Particles className="z-[1]" />
      <div aria-hidden className="absolute inset-0 z-[1] overflow-hidden">
        <span className="light-streak left-[40%] top-[22%] w-[50vw]" style={{ animationDelay: '1.2s' }} />
        <span className="light-streak left-[30%] top-[64%] w-[40vw]" style={{ animationDelay: '3.6s' }} />
        <span className="light-streak left-[55%] top-[44%] w-[30vw]" style={{ animationDelay: '5.2s' }} />
      </div>

      {/* portrait (clean, stable, no overlapping popups) */}
      <motion.div
        className="absolute inset-x-0 top-12 z-[2] flex h-[64svh] items-end justify-center sm:h-[70svh] lg:bottom-0 lg:left-auto lg:right-[3vw] lg:top-20 lg:h-auto lg:w-[54vw] xl:right-[6vw] xl:w-[48vw]"
        style={{ y: imgY, scale: imgScale, opacity: fade }}
      >
        <motion.div
          className="relative h-full w-full lg:h-[86vh]"
          initial={{ clipPath: 'inset(100% -30% -10% -30%)', opacity: 0 }}
          animate={{ clipPath: 'inset(-30% -30% -10% -30%)', opacity: 1 }}
          transition={{ duration: 1.6, ease: EASE, delay: 0.1 }}
        >
          {/* rim light ring */}
          <div aria-hidden className="absolute bottom-[8%] left-1/2 h-[78%] w-[78%] -translate-x-1/2 rounded-full border border-sky-400/20 shadow-[0_0_120px_rgba(56,189,248,0.25),inset_0_0_80px_rgba(129,140,248,0.18)]" />
          <img
            src={profile.portrait.src}
            srcSet={profile.portrait.srcSet}
            sizes="(max-width: 1024px) 100vw, 54vw"
            alt={profile.portrait.alt}
            className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 rounded-2xl object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] [mask-image:linear-gradient(to_bottom,black_75%,transparent_98%)]"
          />
          {/* soft cyan / periwinkle rim light on the image edge */}
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_80%_30%,rgba(56,189,248,0.18),transparent_70%)] mix-blend-screen" />
        </motion.div>
      </motion.div>

      {/* readability gradients */}
      <div aria-hidden className="absolute inset-x-0 top-[40svh] z-[3] h-[36svh] bg-gradient-to-b from-transparent via-ink/70 to-ink lg:hidden" />
      <div aria-hidden className="absolute inset-0 z-[3] hidden bg-[linear-gradient(90deg,var(--color-ink)_0%,rgba(7,7,10,0.7)_32%,transparent_58%)] lg:block" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 z-[3] h-48 bg-gradient-to-t from-ink to-transparent" />

      {/* copy */}
      <motion.div
        className="gutter relative z-[4] flex min-h-[100svh] flex-col justify-end pb-16 pt-[54svh] sm:pb-20 lg:max-w-[54vw] lg:justify-center lg:pb-0 lg:pt-24"
        style={{ y: textY, opacity: fade }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="mb-3 text-lg">
          <SeriesMark />
        </motion.div>
        <motion.h1 variants={item} className="font-display leading-[0.88] tracking-normal text-bone" style={{ fontSize: 'clamp(2.8rem, 7.5vw, 6.8rem)' }}>
          <span className="shimmer-text">NUPUR MADAAN</span>
        </motion.h1>
        <motion.p variants={item} className="mt-1 font-sans text-sm font-bold tracking-[0.4em] text-sky-300 sm:text-base">
          {profile.role.toUpperCase()}
        </motion.p>

        <motion.div variants={item} className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] font-medium text-mist">
          <span className="rounded border border-sky-400/30 bg-sky-950/40 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-sky-300">DATA &amp; AI</span>
          {meta.map((m, i) => (
            <span key={m} className="flex items-center gap-3">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-smoke" />}
              {m}
            </span>
          ))}
        </motion.div>

        <motion.p variants={item} className="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-bone/90 sm:text-xs sm:tracking-[0.24em]">
          {profile.tagline.join(' • ')}
        </motion.p>

        <motion.p variants={item} className="mt-4 max-w-xl text-[15px] leading-relaxed text-bone/80 sm:text-base">
          {profile.intro}
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
          <Magnetic>
            <button
              type="button"
              onClick={onPlay}
              className="flex min-h-12 items-center gap-3 rounded-md bg-sky-400 px-6 py-3 text-[15px] font-bold text-slate-950 transition hover:bg-sky-300 sm:px-8"
            >
              <span className="text-lg">▶</span> Play Intro
            </button>
          </Magnetic>
          <Magnetic>
            {profileId === 'recruiter' ? (
              <button type="button" onClick={onResume} className="glass flex min-h-12 items-center gap-3 rounded-md px-6 py-3 text-[15px] font-semibold text-bone transition hover:bg-white/15 sm:px-8">
                <span className="text-lg">⤓</span> View Resume
              </button>
            ) : (
              <button
                type="button"
                onClick={() => scrollTo('#originals')}
                className="glass flex min-h-12 items-center gap-3 rounded-md px-6 py-3 text-[15px] font-semibold text-bone transition hover:bg-white/15 sm:px-8"
              >
                <span className="text-xl leading-none">＋</span> Featured Projects
              </button>
            )}
          </Magnetic>
          <Magnetic>
            <button
              type="button"
              onClick={() => scrollTo('#contact')}
              className="glass flex min-h-12 items-center gap-2 rounded-md px-5 py-3 text-[15px] font-semibold text-sky-200 transition hover:bg-sky-950/40"
            >
              <span>✉</span> Contact
            </button>
          </Magnetic>
          <button
            type="button"
            onClick={() => scrollTo('#about')}
            aria-label="More info"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-lg text-bone transition hover:border-bone hover:bg-white/10"
          >
            ⓘ
          </button>
        </motion.div>
      </motion.div>

      <motion.div aria-hidden className="pointer-events-none absolute inset-0 z-[5] bg-ink" style={{ opacity: blackout }} />
    </section>
  );
}
