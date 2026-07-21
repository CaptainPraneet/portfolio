import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cloud,
  Activity,
  Code2,
  Globe,
  Database,
  Wrench,
  Layers,
} from 'lucide-react';
import Section from '@/components/ui/Section';
import { skillCategories } from '@/data/portfolio';

const iconMap: Record<string, typeof Cloud> = {
  Cloud,
  Activity,
  Code2,
  Globe,
  Database,
  Wrench,
};

export default function Skills() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <Section
      id="skills"
      eyebrow="// cat skills.json"
      title="Core Skills"
      subtitle="Interactive technology ecosystem — hover any node to inspect its role and related project."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, ci) => {
          const Icon = iconMap[cat.icon] ?? Layers;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
              className="panel p-5 shadow-card-light dark:shadow-card-dark"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan/30 bg-cyan/10 text-cyan">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-bold">{cat.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => {
                  const key = `${cat.title}-${skill.name}`;
                  const active = hovered === key;
                  return (
                    <li
                      key={key}
                      onMouseEnter={() => setHovered(key)}
                      onMouseLeave={() => setHovered(null)}
                      onFocus={() => setHovered(key)}
                      onBlur={() => setHovered(null)}
                      tabIndex={0}
                      className={`group relative cursor-default rounded-lg border px-3 py-2 text-sm font-medium transition-all duration-200 ${
                        active
                          ? 'border-cyan bg-cyan/10 text-cyan shadow-glow-cyan'
                          : 'border-[rgb(var(--border))] bg-[rgb(var(--bg)/0.3)] text-[rgb(var(--text))] hover:border-cyan/50'
                      }`}
                    >
                      {skill.name}
                      {/* Tooltip */}
                      <div
                        role="tooltip"
                        className={`pointer-events-none absolute left-0 top-full z-20 mt-2 w-56 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--bg-elev))] p-3 text-left shadow-card-dark transition-all duration-200 ${
                          active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 invisible'
                        }`}
                      >
                        <div className="font-mono text-[10px] uppercase tracking-wider text-cyan/70">
                          {cat.title}
                        </div>
                        <div className="mt-1 text-sm font-semibold text-[rgb(var(--text))]">
                          {skill.name}
                        </div>
                        <p className="mt-1 text-xs text-muted">{skill.desc}</p>
                        {skill.project && (
                          <div className="mt-2 border-t border-[rgb(var(--border))] pt-1.5">
                            <span className="font-mono text-[10px] text-mint">used in:</span>{' '}
                            <span className="text-xs text-muted">{skill.project}</span>
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
