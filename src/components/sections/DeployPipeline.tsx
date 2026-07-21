import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Workflow } from 'lucide-react';
import Section from '@/components/ui/Section';
import { deployPipeline } from '@/data/portfolio';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function DeployPipeline() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);

  return (
    <Section
      id="deploy"
      eyebrow="// pipeline.yaml"
      title="How I Deploy Applications"
      subtitle="An end-to-end DevOps workflow — from a developer's commit to a monitored, production-ready deployment."
    >
      {/* Desktop horizontal pipeline */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* base line */}
          <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-gradient-to-r from-cyan/20 via-cyan/40 to-mint/30" />
          {/* animated signal */}
          {!reduced && (
            <motion.div
              className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-cyan shadow-glow-cyan"
              animate={{ left: ['0%', '100%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}
          <div className="relative flex justify-between">
            {deployPipeline.map((stage, i) => (
              <div
                key={stage.name}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="group relative flex w-1/11 flex-col items-center"
              >
                {/* node */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-[rgb(var(--bg-elev))] font-mono text-xs font-bold transition-all duration-300 ${
                    active === i
                      ? 'border-cyan text-cyan shadow-glow-cyan scale-110'
                      : 'border-[rgb(var(--border))] text-muted group-hover:border-cyan/60'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </motion.div>
                {/* label */}
                <div className="mt-3 max-w-[110px] text-center">
                  <div className={`text-xs font-semibold ${active === i ? 'text-cyan' : 'text-[rgb(var(--text))]'}`}>
                    {stage.name}
                  </div>
                </div>

                {/* tooltip */}
                <div
                  role="tooltip"
                  className={`pointer-events-none absolute top-16 z-20 w-56 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--bg-elev))] p-3 shadow-card-dark transition-all duration-200 ${
                    active === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 invisible'
                  }`}
                >
                  <div className="font-mono text-[10px] uppercase tracking-wider text-cyan/70">Stage {i + 1}</div>
                  <div className="mt-1 text-sm font-bold text-cyan">{stage.name}</div>
                  <p className="mt-1 text-xs text-muted">{stage.purpose}</p>
                  <p className="mt-1.5 text-xs text-[rgb(var(--text))]">{stage.use}</p>
                  {stage.project && (
                    <div className="mt-2 border-t border-[rgb(var(--border))] pt-1.5">
                      <span className="font-mono text-[10px] text-mint">related:</span>{' '}
                      <span className="text-xs text-muted">{stage.project}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile vertical timeline */}
      <div className="lg:hidden">
        <div className="relative pl-10">
          <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-cyan via-cyan/40 to-mint/30" />
          {!reduced && (
            <motion.div
              className="absolute left-[11px] h-3 w-3 rounded-full bg-cyan shadow-glow-cyan"
              animate={{ top: ['0%', '100%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}
          <ul className="space-y-4">
            {deployPipeline.map((stage, i) => (
              <motion.li
                key={stage.name}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="relative"
              >
                <span className="absolute -left-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[rgb(var(--border))] bg-[rgb(var(--bg-elev))] font-mono text-[10px] font-bold text-cyan">
                  {i + 1}
                </span>
                <div className="panel p-3.5">
                  <div className="flex items-center gap-2">
                    <Workflow className="h-4 w-4 text-cyan" />
                    <h4 className="text-sm font-bold">{stage.name}</h4>
                  </div>
                  <p className="mt-1.5 text-xs text-muted">{stage.purpose}</p>
                  <p className="mt-1 text-xs">{stage.use}</p>
                  {stage.project && (
                    <div className="mt-2 inline-flex items-center gap-1 rounded-md bg-mint/10 px-2 py-1 font-mono text-[10px] text-mint">
                      <ArrowDown className="h-3 w-3" />
                      {stage.project}
                    </div>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
