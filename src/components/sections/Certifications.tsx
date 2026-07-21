import { motion } from 'framer-motion';
import { Award, BookOpen, ExternalLink, Wrench } from 'lucide-react';
import Section from '@/components/ui/Section';
import { certifications } from '@/data/portfolio';

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="// ls ./certifications"
      title="Certifications"
      subtitle="Courses, bootcamps, and self-learning — presented accurately."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="panel flex flex-col p-5 shadow-card-light dark:shadow-card-dark"
          >
            <div className="mb-3 flex items-center gap-2">
              {cert.selfLearning ? (
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber/40 bg-amber/10 text-amber">
                  <Wrench className="h-5 w-5" />
                </span>
              ) : (
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan/30 bg-cyan/10 text-cyan">
                  <Award className="h-5 w-5" />
                </span>
              )}
            </div>

            <h3 className="text-sm font-bold leading-tight">{cert.title}</h3>
            <p className="mt-1 font-mono text-[11px] text-cyan/70">{cert.issuer}</p>

            {cert.note && (
              <p className="mt-2 flex-1 text-xs text-muted">{cert.note}</p>
            )}

            {cert.selfLearning && (
              <div className="mt-3 inline-flex items-center gap-1.5 self-start rounded-md border border-amber/30 bg-amber/10 px-2 py-1 font-mono text-[10px] text-amber">
                <BookOpen className="h-3 w-3" />
                Self-learning
              </div>
            )}

            {cert.url && !cert.selfLearning && (
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 self-start rounded-md border border-cyan/30 bg-cyan/10 px-2 py-1 font-mono text-[10px] text-cyan transition-colors hover:bg-cyan/20"
              >
                <ExternalLink className="h-3 w-3" />
                View Credential
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
