import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * Wraps each letter/word for GSAP stagger animation.
 * mode: 'letters' | 'words'
 */
export default function KineticText({ text, tag: Tag = 'h1', className = '', mode = 'words', delay = 0 }) {
  const ref = useRef(null);

  const tokens = mode === 'letters'
    ? text.split('').map((ch, i) => ({ ch, key: i }))
    : text.split(' ').map((w, i) => ({ ch: w, key: i }));

  useEffect(() => {
    if (!ref.current) return;
    const chars = ref.current.querySelectorAll('.char');
    const ctx = gsap.context(() => {
      gsap.fromTo(chars,
        { y: '110%', opacity: 0, rotateX: -40 },
        {
          y: '0%',
          opacity: 1,
          rotateX: 0,
          duration: 0.75,
          ease: 'power3.out',
          stagger: mode === 'letters' ? 0.025 : 0.08,
          delay,
        }
      );
    }, ref);
    return () => ctx.revert();
  }, [text, delay, mode]);

  return (
    <Tag className={className} ref={ref} style={{ perspective: '600px' }}>
      {tokens.map(({ ch, key }, i) => (
        <span key={key} className="char-wrap" style={{ display: 'inline-block', overflow: 'hidden' }}>
          <span className="char" style={{ display: 'inline-block' }}>
            {ch}
          </span>
          {mode === 'words' && i < tokens.length - 1 ? '\u00A0' : null}
        </span>
      ))}
    </Tag>
  );
}
