import { useEffect, useState } from 'react';
import { useIsDesktop } from '@/hooks/useIsDesktop';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function CustomCursor() {
  const isDesktop = useIsDesktop();
  const reduced = useReducedMotion();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isDesktop || reduced) return;
    document.body.classList.add('no-cursor');

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [role="button"], input, textarea, [data-cursor="hover"]');
      setHovering(Boolean(interactive));
    };
    const onLeave = () => setVisible(false);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.body.classList.remove('no-cursor');
    };
  }, [isDesktop, reduced]);

  if (!isDesktop || reduced) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]">
      <div
        className="absolute h-2 w-2 rounded-full bg-cyan transition-transform duration-150 ease-out"
        style={{
          transform: `translate(${pos.x - 4}px, ${pos.y - 4}px) scale(${hovering ? 0 : 1})`,
          opacity: visible ? 1 : 0,
        }}
      />
      <div
        className="absolute h-9 w-9 rounded-full border border-cyan/60 transition-all duration-200 ease-out"
        style={{
          transform: `translate(${pos.x - 18}px, ${pos.y - 18}px) scale(${hovering ? 1.5 : 1})`,
          opacity: visible ? 0.8 : 0,
          backgroundColor: hovering ? 'rgba(34,211,238,0.08)' : 'transparent',
        }}
      />
    </div>
  );
}
