import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, ArrowDown, X } from 'lucide-react';
import Section from '@/components/ui/Section';
import { devopsLab } from '@/data/portfolio';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function DevOpsLab() {
  const reduced = useReducedMotion();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Section
      id="devops-lab"
      eyebrow="// lab inspect"
      title="My DevOps Lab"
      subtitle="The infrastructure lifecycle I work with — click any node to inspect what it is, how I used it, and the related project."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        {/* Map */}
        <div className="relative">
          <div className="relative flex flex-col items-center gap-3">
            {devopsLab.map((node, i) => (
              <div key={node.name} className="flex w-full flex-col items-center">
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setSelected(selected === i ? null : i)}
                  className={`group flex w-full max-w-xs items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-300 ${
                    selected === i
                      ? 'border-cyan bg-cyan/10 shadow-glow-cyan'
                      : 'border-[rgb(var(--border))] bg-[rgb(var(--bg-elev))] hover:border-cyan/50 hover:bg-cyan/5'
                  }`}
                >
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border font-mono text-xs font-bold transition-colors ${
                    selected === i ? 'border-cyan text-cyan' : 'border-[rgb(var(--border))] text-muted'
                  }`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm font-semibold">{node.name}</span>
                    <span className="block font-mono text-[10px] text-cyan/60">click to inspect</span>
                  </span>
                  <Server className={`h-4 w-4 transition-colors ${selected === i ? 'text-cyan' : 'text-muted'}`} />
                </motion.button>
                {i < devopsLab.length - 1 && (
                  <div className="flex h-6 items-center" aria-hidden="true">
                    {!reduced ? (
                      <motion.div
                        animate={{ y: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                      >
                        <ArrowDown className="h-3.5 w-3.5 text-cyan/50" />
                      </motion.div>
                    ) : (
                      <ArrowDown className="h-3.5 w-3.5 text-cyan/50" />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Inspector panel */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <AnimatePresence mode="wait">
            {selected !== null ? (
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="panel-dark overflow-hidden rounded-2xl shadow-card-dark"
              >
                <div className="flex items-center justify-between border-b border-ink-600 bg-ink-800/60 px-5 py-3">
                  <span className="font-mono text-xs text-ink-300">~/lab/{devopsLab[selected].name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}</span>
                  <button
                    onClick={() => setSelected(null)}
                    aria-label="Close inspector"
                    className="rounded p-1 text-ink-400 transition-colors hover:text-cyan"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="p-5">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-cyan/70">Node</div>
                  <h3 className="mt-1 text-xl font-bold text-cyan">{devopsLab[selected].name}</h3>

                  <div className="mt-4 space-y-3">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-mint">What it is</div>
                      <p className="mt-0.5 text-sm text-[rgb(var(--text))]">{devopsLab[selected].what}</p>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-mint">How I used it</div>
                      <p className="mt-0.5 text-sm text-[rgb(var(--text))]">{devopsLab[selected].how}</p>
                    </div>
                    {devopsLab[selected].project && (
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-wider text-mint">Related project</div>
                        <p className="mt-0.5 text-sm text-cyan">{devopsLab[selected].project}</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="panel flex h-full min-h-[200px] flex-col items-center justify-center p-8 text-center"
              >
                <Server className="h-10 w-10 text-muted" />
                <p className="mt-3 text-sm text-muted">
                  Select a node from the lifecycle map to inspect its role in my DevOps environment.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
