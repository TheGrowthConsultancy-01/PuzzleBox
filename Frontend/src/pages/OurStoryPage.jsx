import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageTransition from '../components/PageTransition';
import KineticText from '../components/KineticText';
import ScrollReveal from '../components/ScrollReveal';
import '../styles/story.css';

gsap.registerPlugin(ScrollTrigger);

const PROBLEM_STATS = [
  { num: '500B+', text: 'Plastic bags used globally per year' },
  { num: '8M T',  text: 'Tonnes of plastic enter oceans annually' },
  { num: '40%',   text: 'Of all plastic is single-use packaging' },
  { num: '450yr', text: 'Time for a plastic bag to decompose' },
];

const PROCESS_STEPS = [
  {
    n: '01',
    title: 'Audit',
    desc: 'We map every single-use plastic touchpoint in your operation — wrappers, cutlery, trays, straws.',
  },
  {
    n: '02',
    title: 'Design',
    desc: 'Our team designs sustainable alternatives that carry your brand identity with the same premium feel.',
  },
  {
    n: '03',
    title: 'Material Lab',
    desc: 'We test certified compostable, recycled, and plant-based materials for durability and printability.',
  },
  {
    n: '04',
    title: 'Prototype',
    desc: 'You receive physical samples before we commit to production — no surprises, full transparency.',
  },
  {
    n: '05',
    title: 'Produce',
    desc: 'Scaled manufacturing with verified sustainable suppliers who meet our strict quality standards.',
  },
  {
    n: '06',
    title: 'Deploy',
    desc: 'Full rollout support — staff training, waste bin placement, and ongoing impact reporting.',
  },
];

export default function OurStoryPage() {
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Counter animation for stats
      const els = statsRef.current?.querySelectorAll('.prob-stat-num');
      if (els) {
        els.forEach(el => {
          ScrollTrigger.create({
            trigger: el,
            start: 'top 90%',
            onEnter: () => {
              gsap.from(el, { opacity: 0, scale: 0.6, duration: 0.6, ease: 'back.out(1.6)' });
            },
            once: true,
          });
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <PageTransition>
      {/* ── MANIFESTO HERO ── */}
      <section className="story-hero">
        <div className="story-hero-bg" />
        <div className="container">
          <div className="story-hero-content">
            <div className="section-label" style={{ color: 'rgba(255, 255, 255, 0.6)', marginBottom: '2rem' }}>
              Our Story
            </div>
            <KineticText
              text="We believe packaging should leave no trace"
              tag="h1"
              mode="words"
              delay={0.2}
            />
            <p className="story-hero-sub">
              PUZZLE BOXX was born from one question: why do brands that care about
              their image still wrap their products in plastic that outlives everything?
              We set out to solve that puzzle — one sustainable alternative at a time.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="problem-section section-pad" ref={statsRef}>
        <div className="container">
          <ScrollReveal>
            <div className="problem-intro">
              <div className="section-label" style={{ justifyContent: 'center' }}>The Problem</div>
              <h2 className="h-display h-lg" style={{ marginTop: '0.75rem', marginBottom: '1rem' }}>
                Plastic Doesn't Disappear.
                <br />It Just Changes Form.
              </h2>
              <p style={{ color: 'var(--ink-soft)', fontSize: '0.95rem', lineHeight: 1.75 }}>
                Every wrapper, every fork, every straw that gets thrown away after
                a single use becomes part of a growing crisis. Brands have the power
                — and now the tools — to change that.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="problem-stats-strip">
              {PROBLEM_STATS.map((s, i) => (
                <div key={i} className="prob-stat">
                  <div className="prob-stat-num">{s.num}</div>
                  <div className="prob-stat-text">{s.text}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── OUR PROCESS ── */}
      <section className="process-section section-pad">
        <div className="container">
          <ScrollReveal className="process-header">
            <div className="section-label" style={{ justifyContent: 'center' }}>Our Process</div>
            <h2 className="h-display h-lg" style={{ marginTop: '0.75rem' }}>
              Six Steps to Sustainable
            </h2>
            <p style={{ color: 'var(--ink-soft)', marginTop: '1rem', maxWidth: '480px', marginInline: 'auto', lineHeight: 1.7 }}>
              We don't just swap materials — we redesign the entire experience of
              your packaging to be better for the planet and better for your brand.
            </p>
          </ScrollReveal>

          <ScrollReveal stagger className="process-steps">
            {PROCESS_STEPS.map((s, i) => (
              <div key={i} className="process-step">
                <div className="step-number">{s.n}</div>
                <div className="step-title">{s.title}</div>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── FOUNDING NARRATIVE ── */}
      <section className="founding-section section-pad">
        <div className="container">
          <div className="founding-inner">
            <ScrollReveal>
              <div className="founding-left">
                <div className="founding-quote-card">
                  <blockquote className="founding-quote">
                    "We watched brands spend thousands on beautiful logos, then wrap
                    their products in plastic that would sit in a landfill for
                    centuries. That disconnect felt like the real puzzle we needed to solve."
                  </blockquote>
                  <div className="founding-cite">— Founding Team, PUZZLE BOXX</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="founding-right">
                <div className="section-label" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>How We Started</div>
                <h2 style={{ marginTop: '1rem' }}>
                  A Puzzle Worth Solving
                </h2>
                <p>
                  It started with a chocolate wrapper — specifically, the realisation
                  that the same brand that spent lakhs on its identity was undoing all
                  that work with a foil wrapper that would never biodegrade.
                </p>
                <p>
                  PUZZLE BOXX was built to close that gap. We're a team of material
                  scientists, brand designers, and sustainability advocates who believe
                  every packaging choice is an opportunity — to reinforce your brand
                  values, not contradict them.
                </p>
                <p>
                  Our name says it all: we take the complex puzzle of sustainable
                  packaging and make the solution fit perfectly into your brand's story.
                </p>
                <div style={{ marginTop: '2rem' }}>
                  <span className="section-label">Innovation · Creation · Customization</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
