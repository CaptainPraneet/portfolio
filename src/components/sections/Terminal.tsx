import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import {
  profile,
  roles,
  skillCategories,
  projects,
  experiences,
  education,
  certifications,
} from '@/data/portfolio';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type Line = { type: 'cmd' | 'out' | 'err' | 'sys'; text: string };

const prompt = 'praneet@devops:~$';

const helpText = [
  'Available commands:',
  '  help         — show this help',
  '  whoami       — who I am',
  '  about        — professional summary',
  '  skills       — technology ecosystem',
  '  projects     — list projects',
  '  experience   — work experience',
  '  education    — education timeline',
  '  certifications — certifications',
  '  devops       — DevOps focus',
  '  docker       — Docker info',
  '  kubernetes   — Kubernetes info',
  '  cloud        — cloud info',
  '  monitoring   — monitoring stack',
  '  github       — open GitHub profile',
  '  contact      — contact details',
  '  clear        — clear terminal',
];

function runCommand(raw: string): Line[] {
  const cmd = raw.trim().toLowerCase();
  if (!cmd) return [];
  switch (cmd) {
    case 'help':
      return helpText.map((t) => ({ type: 'out', text: t }));
    case 'whoami':
      return [
        { type: 'out', text: profile.name },
        { type: 'out', text: profile.role },
        { type: 'out', text: 'Computer Engineering fresher · DevOps & Cloud' },
      ];
    case 'about':
      return [{ type: 'out', text: profile.summary }];
    case 'skills': {
      const lines: Line[] = [{ type: 'out', text: 'Technology Ecosystem:' }];
      skillCategories.forEach((c) => {
        lines.push({ type: 'out', text: `  ${c.title}: ${c.skills.map((s) => s.name).join(', ')}` });
      });
      return lines;
    }
    case 'projects': {
      const lines: Line[] = [{ type: 'out', text: 'Available Projects:' }];
      projects.forEach((p, i) => {
        lines.push({ type: 'out', text: `  ${String(i + 1).padStart(2, '0')} — ${p.title}` });
        lines.push({ type: 'out', text: `      tech: ${p.tech.join(', ')}` });
        lines.push({ type: 'out', text: `      repo: ${p.github}` });
      });
      return lines;
    }
    case 'experience': {
      const lines: Line[] = [];
      experiences.forEach((e) => {
        lines.push({ type: 'out', text: `${e.role} — ${e.company}` });
        lines.push({ type: 'out', text: `  ${e.period}` });
        e.points.forEach((p) => lines.push({ type: 'out', text: `  · ${p}` }));
        if (e.certificate) lines.push({ type: 'out', text: `  certificate: ${e.certificate}` });
      });
      return lines;
    }
    case 'education': {
      const lines: Line[] = [{ type: 'out', text: 'Education:' }];
      education.forEach((e) => {
        lines.push({ type: 'out', text: `  ${e.degree}` });
        lines.push({ type: 'out', text: `    ${e.institution}` });
        lines.push({ type: 'out', text: `    CGPA: ${e.cgpa}` });
      });
      return lines;
    }
    case 'certifications': {
      const lines: Line[] = [{ type: 'out', text: 'Certifications:' }];
      certifications.forEach((c) => {
        lines.push({ type: 'out', text: `  · ${c.title} — ${c.issuer}${c.note ? ` (${c.note})` : ''}` });
      });
      return lines;
    }
    case 'devops':
      return [
        { type: 'out', text: 'DevOps focus:' },
        { type: 'out', text: '  CI/CD · Docker · Kubernetes · Jenkins · GitHub Actions' },
        { type: 'out', text: '  Linux · Shell Scripting · Deployment Automation' },
      ];
    case 'docker':
      return [
        { type: 'out', text: 'Docker — Application containerization' },
        { type: 'out', text: '  Used for consistent build & deployment environments.' },
        { type: 'out', text: '  Related project: CI/CD Pipeline Automation' },
      ];
    case 'kubernetes':
      return [
        { type: 'out', text: 'Kubernetes — Container orchestration' },
        { type: 'out', text: '  Deployed microservices on Minikube with Helm.' },
        { type: 'out', text: '  Related project: Kubernetes Deployment & Monitoring' },
      ];
    case 'cloud':
      return [
        { type: 'out', text: 'Cloud experience:' },
        { type: 'out', text: '  Microsoft Azure — VMs, Storage, Networking, Security' },
        { type: 'out', text: '  AWS — EC2, deployment basics' },
      ];
    case 'monitoring':
      return [
        { type: 'out', text: 'Monitoring stack:' },
        { type: 'out', text: '  Prometheus — metrics collection' },
        { type: 'out', text: '  Grafana — visualization & dashboards' },
        { type: 'out', text: '  Related project: Kubernetes Deployment & Monitoring' },
      ];
    case 'github':
      return [
        { type: 'out', text: `GitHub: ${profile.github}` },
        { type: 'sys', text: '(link opens in a new tab)' },
      ];
    case 'contact':
      return [
        { type: 'out', text: 'Contact:' },
        { type: 'out', text: `  Email:   ${profile.email}` },
        { type: 'out', text: `  Phone:   ${profile.phone}` },
        { type: 'out', text: `  GitHub:  ${profile.github}` },
      ];
    case 'sudo hire praneet':
      return [
        { type: 'sys', text: 'AUTHENTICATING...' },
        { type: 'out', text: 'ACCESS GRANTED ✓' },
        { type: 'out', text: '' },
        { type: 'out', text: 'CANDIDATE:' },
        { type: 'out', text: '  Praneet Hase' },
        { type: 'out', text: '' },
        { type: 'out', text: 'TARGET ROLE:' },
        { type: 'out', text: '  DevOps Engineer' },
        { type: 'out', text: '' },
        { type: 'out', text: 'SPECIALIZATION:' },
        { type: 'out', text: '  CI/CD | Docker | Kubernetes | Cloud' },
        { type: 'out', text: '' },
        { type: 'out', text: 'STATUS:' },
        { type: 'out', text: '  READY FOR OPPORTUNITIES' },
        { type: 'out', text: '' },
        { type: 'out', text: 'RECOMMENDATION:' },
        { type: 'out', text: '  DEPLOY CANDIDATE 🚀' },
      ];
    case 'clear':
      return [];
    default:
      return [
        { type: 'err', text: `command not found: ${cmd}` },
        { type: 'err', text: "type 'help' for available commands" },
      ];
  }
}

export default function Terminal() {
  const reduced = useReducedMotion();
  const [lines, setLines] = useState<Line[]>([
    { type: 'sys', text: 'Praneet Hase — DevOps Portfolio Terminal' },
    { type: 'sys', text: "Type 'help' to list commands. Try 'sudo hire praneet'." },
  ]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [lines]);

  const submit = (raw: string) => {
    if (raw.trim().toLowerCase() === 'clear') {
      setLines([]);
      setHistory((h) => [...h, raw]);
      setHistIdx(-1);
      return;
    }
    const out = runCommand(raw);
    if (raw.trim().toLowerCase() === 'github') {
      window.open(profile.github, '_blank', 'noopener,noreferrer');
    }
    setLines((prev) => [...prev, { type: 'cmd', text: raw }, ...out]);
    setHistory((h) => [...h, raw]);
    setHistIdx(-1);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      submit(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      const idx = histIdx === -1 ? history.length - 1 : Math.max(0, histIdx - 1);
      setHistIdx(idx);
      setInput(history[idx]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (histIdx === -1) return;
      const idx = histIdx + 1;
      if (idx >= history.length) {
        setHistIdx(-1);
        setInput('');
      } else {
        setHistIdx(idx);
        setInput(history[idx]);
      }
    }
  };

  return (
    <Section
      id="terminal"
      eyebrow="// ./terminal"
      title="Interactive Terminal"
      subtitle="A live portfolio terminal — run commands to explore my profile. Keyboard accessible."
    >
      <div
        className="panel-dark mx-auto max-w-3xl overflow-hidden rounded-xl shadow-card-dark"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="flex items-center gap-2 border-b border-ink-600 bg-ink-800/60 px-4 py-2.5">
          <span className="h-3 w-3 rounded-full bg-rose/80" />
          <span className="h-3 w-3 rounded-full bg-amber/80" />
          <span className="h-3 w-3 rounded-full bg-mint/80" />
          <span className="ml-2 font-mono text-xs text-ink-300">praneet@devops: ~/portfolio</span>
        </div>

        <div
          ref={scrollRef}
          className="h-80 overflow-y-auto p-4 font-mono text-sm leading-relaxed"
          role="log"
          aria-live="polite"
        >
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15 }}
              className={
                line.type === 'cmd'
                  ? 'text-ink-100'
                  : line.type === 'err'
                  ? 'text-rose'
                  : line.type === 'sys'
                  ? 'text-ink-400'
                  : 'text-ink-200'
              }
            >
              {line.type === 'cmd' ? (
                <>
                  <span className="text-mint">{prompt.split(':')[0]}</span>
                  <span className="text-ink-400">:~$ </span>
                  <span className="text-cyan">{line.text}</span>
                </>
              ) : (
                line.text || '\u00A0'
              )}
            </motion.div>
          ))}

          <div className="flex items-center">
            <span className="text-mint">{prompt.split(':')[0]}</span>
            <span className="text-ink-400">:~$&nbsp;</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
              aria-label="Terminal command input"
              className="flex-1 bg-transparent text-cyan caret-cyan outline-none"
            />
            {!reduced && <span className="ml-0.5 inline-block h-4 w-2 bg-cyan animate-blink" />}
          </div>
        </div>
      </div>

      <p className="mt-4 text-center font-mono text-xs text-muted">
        Tip: use ↑ / ↓ for command history · try <span className="text-cyan">help</span>
      </p>
    </Section>
  );
}
