import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0, duration = 1000 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.98)',
        filter: isVisible ? 'blur(0px)' : 'blur(4px)',
        transition: `opacity ${duration}ms cubic-bezier(0.2, 0.65, 0.3, 0.9), transform ${duration}ms cubic-bezier(0.2, 0.65, 0.3, 0.9), filter ${duration}ms ease-out`,
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform, filter'
      }}
    >
      {children}
    </div>
  );
};