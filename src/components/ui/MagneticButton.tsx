import { useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  download?: string | boolean;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  strength?: number;
};

export default function MagneticButton({
  children,
  className = '',
  href,
  onClick,
  download,
  target,
  rel,
  ariaLabel,
  strength = 0.3,
}: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: x * strength, y: y * strength });
  };

  const handleLeave = () => setPos({ x: 0, y: 0 });

  const motionProps = {
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    animate: { x: pos.x, y: pos.y },
    transition: { type: 'spring' as const, stiffness: 200, damping: 15, mass: 0.3 },
  };

  if (href) {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        onClick={onClick}
        download={download as string | undefined}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={className}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      onClick={onClick}
      aria-label={ariaLabel}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
