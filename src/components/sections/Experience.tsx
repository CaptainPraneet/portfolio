import { motion } from 'framer-motion';
import { Briefcase, Award, ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import { experiences } from '@/data/portfolio';

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="// git log --career"
      title="Experience"
      subtitle="Professional internships and hands-on DevOps & cloud experience."
    >
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-cyan via-cyan/40 to-mint/30 sm:left-1/2" />

        <ul className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.li
              key={exp.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative pl-12 sm:w-1/2 sm:pl-0 ${
                i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:ml-auto sm:pl-12'
              }`}
            >
              <span
                className={`absolute top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-cyan bg-[rgb(var(--bg-elev))] text-cyan shadow-glow-cyan ${
                  i % 2 === 0 ? 'left-0 sm:left-auto sm:-right-4' : 'left-0 sm:-left-4'
                }`}
              >
                <Briefcase className="h-4 w-4" />
              </span>

              <div className="panel p-5 shadow-card-light dark:shadow-card-dark">
                <div className={`font-mono text-[10px] uppercase tracking-wider text-cyan/70 ${i % 2 === 0 ? 'sm:text-right' : ''}`}>
                  {exp.period}
                </div>
                <h3 className="mt-1 text-lg font-bold">{exp.role}</h3>
                <p className="text-sm text-mint">{exp.company}</p>

                <ul className={`mt-3 space-y-1.5 ${i % 2 === 0 ? 'sm:list-inside' : ''}`}>
                  {exp.points.map((p, pi) => (
                    <li
                      key={pi}
                      className={`flex gap-2 text-sm text-muted ${i % 2 === 0 ? 'sm:flex-row-reverse sm:text-right' : ''}`}
                    >
                      <ArrowRight className={`mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan/60 ${i % 2 === 0 ? 'sm:rotate-180' : ''}`} />
                      {p}
                    </li>
                  ))}
                </ul>

                {exp.certificate && (
                  <div className={`mt-4 ${i % 2 === 0 ? 'sm:text-right' : ''}`}>
                    <a
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-mint/40 bg-mint/10 px-3 py-2 text-xs font-semibold text-mint transition-colors hover:bg-mint/20"
                    >
                      <Award className="h-3.5 w-3.5" />
                      View Certificate
                    </a>
                  </div>
                )}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
