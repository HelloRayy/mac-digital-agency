import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useTransform, animate } from 'framer-motion';

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  to,
  from = 0,
  duration = 1.8,
  delay = 0.3,
  suffix = '+',
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Update textContent directly for 120fps performance without triggering React re-renders
    const unsubscribe = rounded.on('change', (v) => {
      node.textContent = `${v}${suffix}`;
    });

    if (isInView) {
      const controls = animate(count, to, {
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      });

      return () => {
        controls.stop();
        unsubscribe();
      };
    }

    return unsubscribe;
  }, [isInView, count, rounded, to, duration, delay, suffix]);

  return (
    <span ref={ref} className={className}>
      {from}
      {suffix}
    </span>
  );
};

export default CountUp;
