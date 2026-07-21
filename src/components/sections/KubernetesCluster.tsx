import { motion } from 'framer-motion';
import { Ship, Server, Activity, BarChart3 } from 'lucide-react';
import Section from '@/components/ui/Section';
import { k8sControlPlane, k8sWorkerNodes } from '@/data/portfolio';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function KubernetesCluster() {
  const reduced = useReducedMotion();

  return (
    <Section
      id="kubernetes"
      eyebrow="// kubectl get all"
      title="Kubernetes Cluster"
      subtitle="An interactive view of the cluster architecture I deployed and monitored — control plane, worker nodes, pods, and the monitoring signal path."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        {/* Control plane */}
        <div className="panel p-5 shadow-card-light dark:shadow-card-dark">
          <div className="mb-4 flex items-center gap-2">
            <Ship className="h-5 w-5 text-cyan" />
            <h3 className="text-base font-bold">Control Plane</h3>
            <span className="ml-auto rounded-md border border-cyan/30 bg-cyan/10 px-2 py-0.5 font-mono text-[10px] text-cyan">
              master
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {k8sControlPlane.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--bg)/0.4)] p-3 transition-colors hover:border-cyan/50"
              >
                <div className="font-mono text-xs font-bold text-cyan">{c.name}</div>
                <p className="mt-1 text-[11px] text-muted">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Worker nodes */}
        <div className="space-y-4">
          {k8sWorkerNodes.map((node, ni) => (
            <motion.div
              key={node.name}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ni * 0.1 }}
              className="panel p-5 shadow-card-light dark:shadow-card-dark"
            >
              <div className="mb-3 flex items-center gap-2">
                <Server className="h-5 w-5 text-mint" />
                <h4 className="text-sm font-bold">{node.name}</h4>
                <span className="ml-auto rounded-md border border-mint/30 bg-mint/10 px-2 py-0.5 font-mono text-[10px] text-mint">
                  worker
                </span>
              </div>
              <div className="mb-3 flex gap-2">
                <span className="rounded-md border border-[rgb(var(--border))] bg-[rgb(var(--bg)/0.4)] px-2 py-1 font-mono text-[10px] text-muted">
                  {node.kubelet}
                </span>
                <span className="rounded-md border border-[rgb(var(--border))] bg-[rgb(var(--bg)/0.4)] px-2 py-1 font-mono text-[10px] text-muted">
                  {node.runtime}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {node.pods.map((pod, pi) => (
                  <div
                    key={pod}
                    className="relative overflow-hidden rounded-lg border border-mint/30 bg-mint/5 p-2.5"
                  >
                    <div className="flex items-center gap-1.5">
                      <motion.span
                        animate={reduced ? {} : { scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity, delay: (ni * 2 + pi) * 0.3 }}
                        className="h-2 w-2 rounded-full bg-mint"
                      />
                      <span className="font-mono text-[11px] font-semibold text-mint">{pod}</span>
                    </div>
                    {!reduced && (
                      <motion.div
                        className="absolute inset-x-0 h-px bg-mint/40"
                        animate={{ top: ['0%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, delay: pi * 0.5 }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Monitoring signal path */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-8 flex flex-col items-center gap-3 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-elev)/0.5)] p-6 sm:flex-row sm:justify-center"
      >
        <div className="flex items-center gap-2">
          <Ship className="h-5 w-5 text-cyan" />
          <span className="font-mono text-sm font-bold text-cyan">Kubernetes</span>
        </div>
        <motion.div
          animate={reduced ? {} : { x: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-muted"
        >
          →
        </motion.div>
        <div className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-amber" />
          <span className="font-mono text-sm font-bold text-amber">Prometheus</span>
        </div>
        <motion.div
          animate={reduced ? {} : { x: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
          className="text-muted"
        >
          →
        </motion.div>
        <div className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-mint" />
          <span className="font-mono text-sm font-bold text-mint">Grafana</span>
        </div>
        {!reduced && (
          <motion.span
            className="h-2 w-2 rounded-full bg-cyan shadow-glow-cyan sm:absolute"
            animate={{ x: [-120, 120] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ left: '50%' }}
          />
        )}
      </motion.div>
    </Section>
  );
}
