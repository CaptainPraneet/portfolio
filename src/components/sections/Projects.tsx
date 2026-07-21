import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Eye, FolderGit2, Cpu, Wrench, Layers, BookOpen, ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import TiltCard from '@/components/ui/TiltCard';
import Modal from '@/components/ui/Modal';
import ArchitectureFlow from '@/components/ArchitectureFlow';
import { projects } from '@/data/portfolio';
import type { Project } from '@/data/portfolio';

const accentBorder = {
  cyan: 'hover:border-cyan/60',
  mint: 'hover:border-mint/60',
  amber: 'hover:border-amber/60',
};

const accentText = {
  cyan: 'text-cyan',
  mint: 'text-mint',
  amber: 'text-amber',
};

const accentBadge = {
  cyan: 'border-cyan/30 bg-cyan/10 text-cyan',
  mint: 'border-mint/30 bg-mint/10 text-mint',
  amber: 'border-amber/30 bg-amber/10 text-amber',
};

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const open = projects.find((p) => p.id === openId) ?? null;

  return (
    <Section
      id="projects"
      eyebrow="// ls ./projects"
      title="Projects"
      subtitle="Engineering case studies — each project includes architecture, implementation, tools, and source code."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <TiltCard max={6} className="h-full">
              <div className={`panel flex h-full flex-col p-5 shadow-card-light transition-colors dark:shadow-card-dark ${accentBorder[project.accent]}`}>
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <div className={`font-mono text-[10px] uppercase tracking-wider ${accentText[project.accent]}`}>
                      {project.type}
                    </div>
                    <h3 className="mt-1 text-lg font-bold leading-tight">{project.title}</h3>
                  </div>
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${accentBadge[project.accent]}`}>
                    <Cpu className="h-5 w-5" />
                  </span>
                </div>

                <p className="mb-4 text-sm text-muted">{project.description}</p>

                {/* Architecture preview */}
                <div className="mb-4 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg)/0.4)] p-3">
                  <div className="mb-2 font-mono text-[10px] uppercase tracking-wider text-muted">
                    Architecture
                  </div>
                  <ArchitectureFlow steps={project.architecture} accent={project.accent} horizontal />
                </div>

                {/* Tech badges */}
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-[rgb(var(--border))] bg-[rgb(var(--bg)/0.3)] px-2 py-1 font-mono text-[10px] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-2">
                  <button
                    onClick={() => setOpenId(project.id)}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[rgb(var(--border))] px-3 py-2 text-xs font-semibold transition-colors hover:border-cyan hover:text-cyan"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    View Details
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[rgb(var(--border))] px-3 py-2 text-xs font-semibold transition-colors hover:border-cyan hover:text-cyan"
                  >
                    <Github className="h-3.5 w-3.5" />
                    GitHub
                  </a>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      <ProjectModal project={open} onClose={() => setOpenId(null)} />
    </Section>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  if (!project) return null;
  return (
    <Modal open={Boolean(project)} onClose={onClose} title={project.title}>
      <div className="space-y-5">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-wider text-cyan/70">Project Overview</div>
          <p className="mt-1 text-sm text-muted">{project.description}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <div className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-mint">
              <Layers className="h-3.5 w-3.5" /> Architecture
            </div>
            <ArchitectureFlow steps={project.architecture} accent={project.accent} />
          </div>
          <div>
            <div className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-mint">
              <Wrench className="h-3.5 w-3.5" /> Tools Used
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-[rgb(var(--border))] bg-[rgb(var(--bg)/0.4)] px-2 py-1 font-mono text-[10px] text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-3">
              <div className="mb-1.5 font-mono text-[10px] uppercase tracking-wider text-cyan/70">Tech Stack</div>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-cyan/30 bg-cyan/10 px-2 py-1 font-mono text-[10px] text-cyan"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-mint">
            <Cpu className="h-3.5 w-3.5" /> Implementation
          </div>
          <ul className="space-y-1.5">
            {project.implementation.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-muted">
                <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan/60" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-mint">
            <BookOpen className="h-3.5 w-3.5" /> What I Learned
          </div>
          <ul className="space-y-1.5">
            {project.whatILearned.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-muted">
                <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan/60" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-3 border-t border-[rgb(var(--border))] pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Github className="h-4 w-4" />
            View on GitHub
          </a>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <FolderGit2 className="h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
}
