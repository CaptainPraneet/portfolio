import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { bootSequence } from '@/data/portfolio';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type Props = { onDone: () => void };

export default function BootScreen({ onDone }: Props) {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduced) {
      const t = setTimeout(onDone, 400);
      return () => clearTimeout(t);
    }
    const stepDuration = 380;
    const timers: ReturnType<typeof setTimeout>[] = [];
    bootSequence.forEach((_, i) => {
      timers.push(setTimeout(() => setStep(i + 1), stepDuration * (i + 1)));
    });
    const total = stepDuration * bootSequence.length;
    timers.push(setTimeout(() => setDone(true), total + 250));
    timers.push(setTimeout(onDone, total + 900));
    return () => timers.forEach(clearTimeout);
  }, [onDone, reduced]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-ink-950 px-6"
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <div className="tech-grid absolute inset-0 opacity-30" />
          <div className="relative w-full max-w-lg">
            <div className="mb-6 text-center">
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-cyan/70">
                PRANEET DEVOPS ENVIRONMENT
              </div>
              <div className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
            </div>

            <div className="panel-dark rounded-xl p-5 font-mono text-sm">
              {bootSequence.map((s, i) => {
                const complete = i < step;
                const active = i === step;
                return (
                  <div key={s.label} className="mb-2 last:mb-0">
                    {!complete && !active && (
                      <div className="text-ink-500/40">{`> ${s.label}`}</div>
                    )}
                    {active && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-ink-200"
                      >
                        {`> ${s.label}`}
                      </motion.div>
                    )}
                    {complete && (
                      <motion.div
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 text-mint"
                      >
                        <Check className="h-3.5 w-3.5" />
                        <span>{s.done}</span>
                      </motion.div>
                    )}
                  </div>
                );
              })}

              {step >= bootSequence.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 border-t border-ink-600 pt-3"
                >
                  <div className="text-ink-300">SYSTEM STATUS:</div>
                  <div className="mt-1 text-lg font-bold text-cyan glow-text">
                    READY TO DEPLOY 🚀
                  </div>
                </motion.div>
              )}
            </div>

            <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-ink-700">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan to-mint"
                animate={{ width: `${(step / bootSequence.length) * 100}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
