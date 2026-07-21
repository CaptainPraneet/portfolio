import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type Props = {
  steps: string[];
  accent?: 'cyan' | 'mint' | 'amber';
  horizontal?: boolean;
};

const accentColor = {
  cyan: 'text-cyan border-cyan/40 bg-cyan/10',
  mint: 'text-mint border-mint/40 bg-mint/10',
  amber: 'text-amber border-amber/40 bg-amber/10',
};

const accentGlow = {
  cyan: 'shadow-glow-cyan',
  mint: 'shadow-glow-mint',
  amber: 'shadow-[0_0_24px_-4px_rgba(251,191,36,0.45)]',
};

export default function ArchitectureFlow({ steps, accent = 'cyan', horizontal = false }: Props) {
  const reduced = useReducedMotion();

  if (horizontal) {
    return (
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`rounded-lg border px-3 py-2 text-xs font-semibold ${accentColor[accent]}`}
            >
              {step}
            </motion.div>
            {i < steps.length - 1 && (
              <motion.div
                animate={reduced ? {} : { x: [0, 3, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1 }}
              >
                <ArrowRight className="h-3.5 w-3.5 text-muted" />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-1">
      {steps.map((step, i) => (
        <div key={step} className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className={`rounded-lg border px-3 py-2 text-xs font-semibold ${accentColor[accent]} ${i === 0 ? accentGlow[accent] : ''}`}
          >
            {step}
          </motion.div>
          {i < steps.length - 1 && (
            <motion.div
              animate={reduced ? {} : { y: [0, 3, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1 }}
            >
              <ArrowDown className="my-0.5 h-3.5 w-3.5 text-muted" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
