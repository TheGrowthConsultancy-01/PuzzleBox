import { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Use useLayoutEffect on client, useEffect on SSR (avoids React warning)
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * Wraps a page and animates it in on mount.
 * Uses useLayoutEffect so GSAP hides the element
 * BEFORE the first browser paint — prevents blank-page flash on hard reload.
 */
export default function PageTransition({ children }) {
  const ref = useRef(null);

  // Hide immediately (before paint) so there's no flicker
  useIsomorphicLayoutEffect(() => {
    if (ref.current) {
      gsap.set(ref.current, { autoAlpha: 0, y: 28 });
    }
  }, []);

  // Animate in after mount
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        autoAlpha: 1,   // sets both opacity AND visibility
        y: 0,
        duration: 0.65,
        ease: 'power3.out',
        clearProps: 'all',  // remove inline styles after anim so element stays visible
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="page-wrapper">
      {children}
    </div>
  );
}
