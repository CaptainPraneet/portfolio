import { motion } from 'framer-motion';
import { GraduationCap, Star } from 'lucide-react';
import Section from '@/components/ui/Section';
import { education } from '@/data/portfolio';

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="// cat education.log"
      title="Education"
      subtitle="Academic foundation in Computer & IT Engineering."
    >
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-mint via-cyan/40 to-cyan/30" />
        <ul className="space-y-6">
          {education.map((edu, i) => (
            <motion.li
              key={edu.degree}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-14"
            >
              <span className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border-2 border-mint bg-[rgb(var(--bg-elev))] text-mint shadow-glow-mint">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div className="panel p-5 shadow-card-light dark:shadow-card-dark">
                <h3 className="text-base font-bold sm:text-lg">{edu.degree}</h3>
                <p className="mt-1 text-sm text-muted">{edu.institution}</p>
                <div className="mt-3 inline-flex items-center gap-2 rounded-lg border border-cyan/30 bg-cyan/10 px-3 py-1.5">
                  <Star className="h-3.5 w-3.5 text-cyan" />
                  <span className="font-mono text-xs text-cyan">
                    CGPA: <span className="font-bold">{edu.cgpa}</span>
                  </span>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
