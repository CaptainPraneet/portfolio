import { motion } from 'framer-motion';
import {
  GraduationCap,
  Terminal,
  GitBranch,
  Cloud,
  Workflow,
  Box,
  Ship,
  Activity,
  Infinity as InfinityIcon,
  User,
} from 'lucide-react';
import Section from '@/components/ui/Section';
import { profile, learningJourney } from '@/data/portfolio';

const iconMap: Record<string, typeof User> = {
  GraduationCap,
  Terminal,
  GitBranch,
  Cloud,
  Workflow,
  Box,
  Ship,
  Activity,
  Infinity: InfinityIcon,
};

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="// whoami"
      title="About Me"
      subtitle="The engineer behind the environment."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="panel p-6 shadow-card-light dark:shadow-card-dark sm:p-8"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan/30 bg-cyan/10 text-cyan">
              <User className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold">{profile.name}</h3>
              <p className="font-mono text-xs text-cyan">{profile.role}</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-muted sm:text-base">{profile.summary}</p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              { label: 'Focus', value: 'DevOps & Cloud' },
              { label: 'Cloud', value: 'Azure • AWS' },
              { label: 'Containers', value: 'Docker • K8s' },
              { label: 'CI/CD', value: 'Jenkins • GH Actions' },
              { label: 'Monitoring', value: 'Prometheus • Grafana' },
              { label: 'OS', value: 'Linux' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--bg)/0.4)] p-3"
              >
                <div className="font-mono text-[10px] uppercase tracking-wider text-cyan/70">
                  {item.label}
                </div>
                <div className="mt-0.5 text-sm font-semibold">{item.value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Learning journey */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
            <Activity className="h-4 w-4" />
            Learning Journey
          </div>
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan via-mint to-cyan/30" />
            <ul className="space-y-3">
              {learningJourney.map((step, i) => {
                const Icon = iconMap[step.icon] ?? User;
                return (
                  <motion.li
                    key={step.label}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group relative flex items-center gap-4"
                  >
                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-elev))] text-cyan transition-all group-hover:border-cyan group-hover:shadow-glow-cyan">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <div className="flex-1 rounded-lg border border-transparent px-3 py-2 transition-all group-hover:border-[rgb(var(--border))] group-hover:bg-[rgb(var(--bg-elev)/0.5)]">
                      <span className="text-sm font-semibold">{step.label}</span>
                    </div>
                    {i < learningJourney.length - 1 && (
                      <span className="absolute left-[15px] -bottom-3 text-cyan/40">↓</span>
                    )}
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
