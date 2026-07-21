import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, eyebrow, title, subtitle, children, className = '' }: Props) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 py-20 sm:py-28 ${className}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 sm:mb-16"
        >
          {eyebrow && (
            <div className="mb-3 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
              {eyebrow}
            </div>
          )}
          <h2 id={`${id}-title`} className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
