import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, Download, Mail, FolderGit2, ChevronRight } from 'lucide-react';
import { profile, roles, heroTerminal } from '@/data/portfolio';
import InfrastructureBackground from '@/components/InfrastructureBackground';
import MagneticButton from '@/components/ui/MagneticButton';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function Hero() {
  const reduced = useReducedMotion();
  const [roleIdx, setRoleIdx] = useState(0);
  const [typed, setTyped] = useState('');
  const [termLine, setTermLine] = useState(0);
  const termRef = useRef<HTMLDivElement>(null);

  // Role switching
  useEffect(() => {
    if (reduced) return;
    const interval = setInterval(() => {
      setRoleIdx((i) => (i + 1) % roles.length);
    }, 2600);
    return () => clearInterval(interval);
  }, [reduced]);

  // Terminal typing
  useEffect(() => {
    if (reduced) {
      setTermLine(heroTerminal.length);
      return;
    }
    let line = 0;
    let charIdx = 0;
    let typing = true;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (line >= heroTerminal.length) return;
      const entry = heroTerminal[line];
      if (typing) {
        charIdx++;
        setTyped(entry.cmd.slice(0, charIdx));
        if (charIdx >= entry.cmd.length) {
          typing = false;
          timer = setTimeout(tick, 700);
          return;
        }
        timer = setTimeout(tick, 55);
      } else {
        setTermLine(line + 1);
        line += 1;
        charIdx = 0;
        typing = true;
        setTyped('');
        timer = setTimeout(tick, 400);
      }
    };
    timer = setTimeout(tick, 800);
    return () => clearTimeout(timer);
  }, [reduced]);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <InfrastructureBackground />

      <div className="container-page relative z-10 grid items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        {/* Left: identity */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg-elev)/0.6)] px-3 py-1.5 font-mono text-xs text-muted backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-mint animate-pulse-glow" />
            Available for opportunities
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-2 text-lg text-muted"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="gradient-text glow-text">PRANEET HASE</span>
          </motion.h1>

          <div className="mt-3 flex h-9 items-center text-2xl font-bold sm:text-3xl">
            <span className="text-muted mr-2 font-mono text-base sm:text-lg">role:</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIdx}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="text-cyan"
              >
                {roles[roleIdx]}
              </motion.span>
            </AnimatePresence>
            {!reduced && <span className="ml-1 h-7 w-0.5 bg-cyan animate-blink" />}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-5 max-w-xl text-base text-muted sm:text-lg"
          >
            {profile.heroSub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <MagneticButton
              onClick={() => scrollTo('projects')}
              className="btn-primary"
              ariaLabel="View projects"
            >
              <FolderGit2 className="h-4 w-4" />
              View Projects
            </MagneticButton>
            <MagneticButton
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              ariaLabel="View GitHub profile"
            >
              <Github className="h-4 w-4" />
              View GitHub
            </MagneticButton>
            <MagneticButton
              href={profile.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              ariaLabel="View resume"
            >
              <Download className="h-4 w-4" />
              View Resume
            </MagneticButton>
            <MagneticButton
              onClick={() => scrollTo('contact')}
              className="btn-ghost"
              ariaLabel="Contact me"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right: terminal */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden lg:block"
        >
          <div className="panel-dark overflow-hidden rounded-xl shadow-card-dark">
            <div className="flex items-center gap-2 border-b border-ink-600 bg-ink-800/60 px-4 py-2.5">
              <span className="h-3 w-3 rounded-full bg-rose/80" />
              <span className="h-3 w-3 rounded-full bg-amber/80" />
              <span className="h-3 w-3 rounded-full bg-mint/80" />
              <span className="ml-2 font-mono text-xs text-ink-300">praneet@devops: ~/identity</span>
            </div>
            <div
              ref={termRef}
              className="h-72 overflow-hidden p-4 font-mono text-sm leading-relaxed"
            >
              {heroTerminal.slice(0, termLine).map((entry) => (
                <div key={entry.cmd} className="mb-2.5">
                  <div className="text-ink-300">
                    <span className="text-mint">praneet@devops</span>
                    <span className="text-ink-400">:~$ </span>
                    <span className="text-cyan">{entry.cmd}</span>
                  </div>
                  <div className="text-ink-100 pl-1">{'> '}{entry.out}</div>
                </div>
              ))}
              {termLine < heroTerminal.length && (
                <div className="text-ink-300">
                  <span className="text-mint">praneet@devops</span>
                  <span className="text-ink-400">:~$ </span>
                  <span className="text-cyan">{typed}</span>
                  {!reduced && <span className="ml-0.5 inline-block h-4 w-2 bg-cyan animate-blink align-middle" />}
                </div>
              )}
              {termLine >= heroTerminal.length && (
                <div className="text-ink-300">
                  <span className="text-mint">praneet@devops</span>
                  <span className="text-ink-400">:~$ </span>
                  {!reduced && <span className="inline-block h-4 w-2 bg-cyan animate-blink align-middle" />}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 font-mono text-xs text-muted transition-colors hover:text-cyan"
        aria-label="Scroll to about section"
      >
        <span className="block animate-float-soft">
          <ChevronRight className="h-5 w-5 rotate-90" />
        </span>
      </motion.button>
    </section>
  );
}
