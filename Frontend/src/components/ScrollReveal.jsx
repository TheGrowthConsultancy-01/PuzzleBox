import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Wraps children in a scroll-triggered reveal animation.
 * variant: 'rise' | 'clip' | 'fade'
 */
export default function ScrollReveal({ children, className = '', variant = 'rise', delay = 0, stagger = false }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = stagger ? el.children : el;

    const getFrom = () => {
      switch (variant) {
        case 'clip':
          return { clipPath: 'inset(100% 0 0 0)', opacity: 1 };
        case 'fade':
          return { opacity: 0 };
        case 'rise':
        default:
          return { y: 50, opacity: 0 };
      }
    };

    const getTo = () => {
      switch (variant) {
        case 'clip':
          return { clipPath: 'inset(0% 0 0 0)', opacity: 1, duration: 0.9, ease: 'power3.out' };
        case 'fade':
          return { opacity: 1, duration: 0.8, ease: 'power2.out' };
        case 'rise':
        default:
          return { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' };
      }
    };

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        getFrom(),
        {
          ...getTo(),
          delay,
          stagger: stagger ? 0.1 : 0,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [variant, delay, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
