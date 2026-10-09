import { useEffect, useRef, type ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { useReducedMotionPref } from '../hooks/useMedia';

export const EASE = [0.22, 1, 0.36, 1] as const;

/** Clean wrapper for controls — stable, no pointer drifting or magnetic jumping. */
export function Magnetic({ children, className = '' }: { children: ReactNode; strength?: number; className?: string }) {
  return <span className={`inline-flex ${className}`}>{children}</span>;
}

/** Clean wrapper for cards and elements — stable, no 3D tilt jitter. */
export function Tilt({
  children,
  className = '',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  max: _max,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  glare: _glare,
  ...rest
}: { children: ReactNode; max?: number; className?: string; glare?: boolean } & Omit<HTMLMotionProps<'div'>, 'children'>) {
  return (
    <motion.div {...rest} className={className}>
      {children}
    </motion.div>
  );
}

/** Word-by-word blur-to-focus reveal for headings. */
export function RevealText({ text, className = '', delay = 0, as = 'span' }: { text: string; className?: string; delay?: number; as?: 'span' | 'h2' | 'h3' | 'p' }) {
  const Tag = motion[as];
  const words = text.split(' ');
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-4% 0px' }}
      transition={{ staggerChildren: 0.06, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '105%', opacity: 0, filter: 'blur(8px)' },
              show: { y: '0%', opacity: 1, filter: 'blur(0px)', transition: { duration: 0.9, ease: EASE } },
            }}
          >
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/** Small kicker + big title used at the top of every section. */
export function SectionHeading({ kicker, title, aside }: { kicker: string; title: string; aside?: ReactNode }) {
  return (
    <div className="gutter mb-6 flex flex-wrap items-end justify-between gap-4 md:mb-9">
      <div>
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-2 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-crimson-2"
        >
          <span className="h-px w-8 bg-crimson-2" />
          {kicker}
        </motion.div>
        <RevealText as="h2" text={title} className="font-display text-[clamp(2.4rem,6vw,5rem)] leading-[0.9] tracking-wide text-bone" />
      </div>
      {aside}
    </div>
  );
}

/** Lightweight drifting dust particles on a canvas — pauses when off screen. */
export function Particles({ count = 46, color = '255,90,110', className = '' }: { count?: number; color?: string; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotionPref();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || reduced) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const dots = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.6 + 0.3,
      vx: (Math.random() - 0.5) * 0.00012,
      vy: -Math.random() * 0.00028 - 0.00006,
      a: Math.random() * 0.6 + 0.15,
      tw: Math.random() * Math.PI * 2,
    }));

    let raf = 0;
    let running = false;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(50, now - last);
      last = now;
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        d.x += d.vx * dt;
        d.y += d.vy * dt;
        d.tw += dt * 0.002;
        if (d.y < -0.02) {
          d.y = 1.02;
          d.x = Math.random();
        }
        if (d.x < -0.02) d.x = 1.02;
        if (d.x > 1.02) d.x = -0.02;
        const alpha = d.a * (0.6 + 0.4 * Math.sin(d.tw));
        ctx.beginPath();
        ctx.fillStyle = `rgba(${color},${alpha})`;
        ctx.arc(d.x * w, d.y * h, d.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !running) {
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(tick);
      } else if (!entry.isIntersecting && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
    io.observe(canvas);
    return () => {
      io.disconnect();
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [count, color, reduced]);

  return <canvas ref={ref} aria-hidden className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} />;
}
