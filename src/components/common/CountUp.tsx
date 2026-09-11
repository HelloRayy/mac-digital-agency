import React, { useEffect, useRef, useState } from 'react';
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
  delay = 0.2,
  suffix = '+',
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [displayValue, setDisplayValue] = useState(from);
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      setDisplayValue(latest);
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
  }, [isInView, count, rounded, to, duration, delay]);

  return (
    <span ref={ref} className={`inline-block tabular-nums ${className}`}>
      {displayValue}
      {suffix}
    </span>
  );
};

export default CountUp;
