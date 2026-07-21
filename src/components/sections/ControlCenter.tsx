import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Server,
  Workflow,
  Box,
  Ship,
  Activity,
  Rocket,
  Cpu,
  HardDrive,
  Network,
  TrendingUp,
} from 'lucide-react';
import Section from '@/components/ui/Section';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const statusCards = [
  { label: 'System', value: 'Operational', icon: Server, color: 'mint' },
  { label: 'CI/CD Pipeline', value: 'Passing', icon: Workflow, color: 'cyan' },
  { label: 'Docker', value: 'Containers Running', icon: Box, color: 'cyan' },
  { label: 'Kubernetes', value: 'Cluster Healthy', icon: Ship, color: 'mint' },
  { label: 'Monitoring', value: 'Active', icon: Activity, color: 'amber' },
  { label: 'Deployment', value: 'Successful', icon: Rocket, color: 'mint' },
];

const colorMap: Record<string, string> = {
  cyan: 'text-cyan border-cyan/30 bg-cyan/10',
  mint: 'text-mint border-mint/30 bg-mint/10',
  amber: 'text-amber border-amber/30 bg-amber/10',
};

const dotColor: Record<string, string> = {
  cyan: 'bg-cyan',
  mint: 'bg-mint',
  amber: 'bg-amber',
};

function useAnimatedSeries(base: number[], amplitude: number) {
  const reduced = useReducedMotion();
  const [series, setSeries] = useState(base);
  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      setSeries((prev) => {
        const next = [...prev.slice(1)];
        const last = prev[prev.length - 1];
        const delta = (Math.random() - 0.5) * amplitude;
        next.push(Math.max(8, Math.min(95, last + delta)));
        return next;
      });
    }, 900);
    return () => clearInterval(id);
  }, [reduced, amplitude]);
  return series;
}

function MiniChart({
  data,
  color,
  height = 56,
}: {
  data: number[];
  color: string;
  height?: number;
}) {
  const max = 100;
  const w = 100;
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = height - (v / max) * height;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <svg viewBox={`0 0 ${w} ${height}`} preserveAspectRatio="none" className="h-14 w-full">
      <defs>
        <linearGradient id={`fill-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color === 'cyan' ? '#22d3ee' : color === 'mint' ? '#34d399' : '#fbbf24'} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color === 'cyan' ? '#22d3ee' : color === 'mint' ? '#34d399' : '#fbbf24'} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`0,${height} ${points} ${w},${height}`} fill={`url(#fill-${color})`} />
      <polyline
        points={points}
        fill="none"
        stroke={color === 'cyan' ? '#22d3ee' : color === 'mint' ? '#34d399' : '#fbbf24'}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function ControlCenter() {
  const cpu = useAnimatedSeries([42, 48, 45, 52, 49, 55, 51, 58, 54, 60, 57, 62], 14);
  const mem = useAnimatedSeries([60, 62, 58, 64, 61, 66, 63, 68, 65, 70, 67, 72], 10);
  const net = useAnimatedSeries([30, 45, 38, 52, 44, 60, 50, 65, 55, 70, 60, 75], 22);

  const charts = [
    { label: 'CPU', icon: Cpu, data: cpu, color: 'cyan', unit: '%' },
    { label: 'Memory', icon: HardDrive, data: mem, color: 'mint', unit: '%' },
    { label: 'Network', icon: Network, data: net, color: 'amber', unit: 'MB/s' },
  ];

  return (
    <Section
      id="control-center"
      eyebrow="// dashboard --demo"
      title="DevOps Control Center"
      subtitle="Portfolio Lab — Demo Environment"
    >
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-3 py-1.5 font-mono text-[11px] font-semibold text-amber">
        <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse-glow" />
        DEMO ENVIRONMENT — illustrative metrics, not production data
      </div>

      {/* Status cards */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {statusCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="panel flex items-center gap-3 p-4 shadow-card-light dark:shadow-card-dark"
            >
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${colorMap[card.color]}`}>
                <Icon className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted">
                  {card.label}
                </div>
                <div className="text-sm font-bold">{card.value}</div>
              </div>
              <span className={`h-2.5 w-2.5 rounded-full ${dotColor[card.color]} animate-pulse-glow`} />
            </motion.div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {charts.map((chart, i) => {
          const Icon = chart.icon;
          const current = chart.data[chart.data.length - 1].toFixed(0);
          return (
            <motion.div
              key={chart.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="panel p-5 shadow-card-light dark:shadow-card-dark"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon className={`h-4 w-4 ${chart.color === 'cyan' ? 'text-cyan' : chart.color === 'mint' ? 'text-mint' : 'text-amber'}`} />
                  <span className="text-sm font-semibold">{chart.label}</span>
                </div>
                <span className={`font-mono text-lg font-bold ${chart.color === 'cyan' ? 'text-cyan' : chart.color === 'mint' ? 'text-mint' : 'text-amber'}`}>
                  {current}
                  <span className="text-xs text-muted">{chart.unit}</span>
                </span>
              </div>
              <MiniChart data={chart.data} color={chart.color} />
            </motion.div>
          );
        })}
      </div>

      {/* Deployment activity */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-4 panel p-5 shadow-card-light dark:shadow-card-dark"
      >
        <div className="mb-4 flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-cyan" />
          <span className="text-sm font-semibold">Deployment Activity</span>
          <span className="ml-auto font-mono text-[10px] text-muted">last 7 days · demo</span>
        </div>
        <div className="flex items-end gap-2">
          {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex-1 rounded-t-md bg-gradient-to-t from-cyan/30 to-cyan"
              style={{ minHeight: 8 }}
            />
          ))}
        </div>
        <div className="mt-2 flex justify-between font-mono text-[10px] text-muted">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
