import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
};

const nodes: Node[] = [
  { id: 'code', label: 'CODE', x: 8, y: 78 },
  { id: 'git', label: 'GIT', x: 20, y: 30 },
  { id: 'github', label: 'GITHUB', x: 33, y: 72 },
  { id: 'jenkins', label: 'JENKINS', x: 46, y: 26 },
  { id: 'docker', label: 'DOCKER', x: 58, y: 64 },
  { id: 'k8s', label: 'KUBERNETES', x: 72, y: 24 },
  { id: 'cloud', label: 'AWS / AZURE', x: 85, y: 68 },
  { id: 'prom', label: 'PROMETHEUS', x: 94, y: 34 },
  { id: 'grafana', label: 'GRAFANA', x: 80, y: 12 },
];

const edges: [string, string][] = [
  ['code', 'git'],
  ['git', 'github'],
  ['github', 'jenkins'],
  ['jenkins', 'docker'],
  ['docker', 'k8s'],
  ['k8s', 'cloud'],
  ['cloud', 'prom'],
  ['prom', 'grafana'],
];

const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

export default function InfrastructureBackground() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [reduced]);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="tech-grid absolute inset-0 opacity-40 dark:opacity-25" />

      {/* Cloud blobs (day) / glow (night) */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cloud-200/40 blur-3xl dark:bg-cyan/10 dark:blur-3xl" />
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-cloud-100/50 blur-3xl dark:bg-mint/10" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-cloud-200/30 blur-3xl dark:bg-cyan/5" />

      {/* Nodes & edges */}
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="edge-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgb(var(--accent))" stopOpacity="0.1" />
            <stop offset="100%" stopColor="rgb(var(--accent-2))" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {edges.map(([from, to], i) => {
          const a = nodeMap[from];
          const b = nodeMap[to];
          return (
            <g key={i}>
              <line
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="url(#edge-grad)"
                strokeWidth="0.25"
                strokeDasharray="1.5 1.5"
                className={reduced ? '' : 'animate-dash-flow'}
                style={{ animationDelay: `${i * 0.2}s` }}
              />
              {!reduced && (
                <motion.circle
                  r="0.6"
                  fill="rgb(var(--accent))"
                  initial={{ cx: a.x, cy: a.y }}
                  animate={{ cx: [a.x, b.x], cy: [a.y, b.y] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: 'easeInOut',
                  }}
                  style={{ filter: 'drop-shadow(0 0 2px rgb(var(--accent)))' }}
                />
              )}
            </g>
          );
        })}
      </svg>

      {/* Floating node labels */}
      {nodes.map((n, i) => (
        <motion.div
          key={n.id}
          className="absolute"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
          animate={
            reduced
              ? {}
              : {
                  y: [0, -10, 0],
                  x: [0, mouse.x * 6, 0],
                }
          }
          transition={{
            y: { duration: 5 + i * 0.4, repeat: Infinity, ease: 'easeInOut' },
            x: { duration: 0.6, ease: 'easeOut' },
          }}
        >
          <div className="-translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-md border border-[rgb(var(--border))] bg-[rgb(var(--bg-elev)/0.6)] px-2 py-1 font-mono text-[9px] font-semibold tracking-wider text-muted backdrop-blur-sm sm:text-[10px]">
            <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan/70 animate-pulse-glow" />
            {n.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
