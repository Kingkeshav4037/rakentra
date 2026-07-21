import React, { useEffect, useState, useRef } from 'react';

interface CountUpProps {
  to: number;
  duration?: number; // In seconds
  suffix?: string;
}

export const CountUp: React.FC<CountUpProps> = ({ to, duration = 1.5, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const end = to;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const counter = () => {
      frame++;
      // Cubic ease-out curve for smooth deceleration
      const progress = frame / totalFrames;
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.round(easeProgress * end);

      setCount(currentCount);

      if (frame < totalFrames) {
        requestAnimationFrame(counter);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(counter);
  }, [hasAnimated, to, duration]);

  return (
    <span ref={elementRef} className="count-up-number">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export default CountUp;
