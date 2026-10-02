import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageTransition from '../components/PageTransition';
import KineticText from '../components/KineticText';
import ScrollReveal from '../components/ScrollReveal';
import '../styles/home.css';

gsap.registerPlugin(ScrollTrigger);

/* ── MAZE SVG ── */
function MazeBg({ svgRef }) {
  return (
    <svg ref={svgRef} className="hero-maze-bg" viewBox="0 0 500 800" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
        <line key={`h${i}`} x1="0" y1={i * 80} x2="500" y2={i * 80} stroke="rgba(10, 10, 12, 0.12)" strokeWidth="1" />
      ))}
      {[0, 1, 2, 3, 4, 5, 6].map(i => (
        <line key={`v${i}`} x1={i * 80} y1="0" x2={i * 80} y2="800" stroke="rgba(10, 10, 12, 0.12)" strokeWidth="1" />
      ))}
      <rect x="80" y="80" width="160" height="80" stroke="rgba(10, 10, 12, 0.3)" strokeWidth="2" fill="none" />
      <rect x="240" y="160" width="120" height="120" stroke="rgba(10, 10, 12, 0.3)" strokeWidth="2" fill="none" />
      <rect x="80" y="400" width="200" height="80" stroke="rgba(10, 10, 12, 0.12)" strokeWidth="2" fill="none" />
      <rect x="320" y="480" width="140" height="140" stroke="rgba(10, 10, 12, 0.3)" strokeWidth="1.5" fill="none" />
      <rect x="40" y="560" width="120" height="80" stroke="rgba(10, 10, 12, 0.12)" strokeWidth="1.5" fill="none" />
      {[[80, 80], [240, 80], [80, 160], [240, 160], [80, 400], [280, 400]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="rgba(10, 10, 12, 0.5)" />
      ))}
    </svg>
  );
}

/* ── TICKER ── */
const TICKER_ITEMS = [
  '🍫 Branded Chocolate Wrappers',
  '🥄 Sustainable Cutlery',
  '🌿 100% Certified Compostable',
  '🏨 Hotels & Resorts',
  '🎪 Corporate Events',
  '✈️ Airlines & Hospitality',
  '🏢 Office Programs',
  '🎉 Exhibitions & Trade Shows',
];

function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="ticker-strip">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">
            {item}
            <span className="ticker-sep" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── INDUSTRY CHIPS ── */
const INDUSTRIES = [
  { icon: '🏨', label: 'Hotels & Resorts' },
  { icon: '✈️', label: 'Airlines' },
  { icon: '🎪', label: 'Corporate Events' },
  { icon: '🏢', label: 'Office Cafeterias' },
  { icon: '🎓', label: 'Schools & Colleges' },
  { icon: '🍫', label: 'FMCG / Confectionery' },
  { icon: '🏥', label: 'Healthcare' },
  { icon: '🎉', label: 'Exhibitions' },
  { icon: '☕', label: 'Cafés & QSR' },
  { icon: '🏪', label: 'Retail & D2C' },
];

/* ── IMPACT CALCULATOR ── */
function ImpactCalculator() {
  const [employees, setEmployees] = useState(500);
  const [mealsPerDay, setMealsPerDay] = useState(2);
  const [daysPerYear, setDaysPerYear] = useState(250);

  const items = employees * mealsPerDay * daysPerYear;
  const kgPlastic = (items * 2) / 1000;
  const trees = Math.round(kgPlastic * 0.17);
  const co2kg = Math.round(kgPlastic * 6);

  return (
    <section className="impact-calc section-pad">
      <div className="container">
        <ScrollReveal className="text-center" style={{ marginBottom: '3rem' }}>
          <div className="section-label">Impact Calculator</div>
          <h2 className="h-display h-lg" style={{ marginTop: '.75rem' }}>See Your Switch In Numbers</h2>
        </ScrollReveal>

        <div className="calc-wrapper">
          <div className="calc-left">
            <h2>How much plastic does your organisation use?</h2>
            <p>Adjust the values to estimate your annual plastic footprint.</p>
            <div className="calc-input-group">
              <div>
                <label className="calc-label">Employees / Attendees</label>
                <input
                  type="range" min="50" max="5000" step="50"
                  value={employees}
                  onChange={e => setEmployees(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--bronze-light)' }}
                />
                <div className="calc-range-val">{employees.toLocaleString()}</div>
              </div>
              <div>
                <label className="calc-label">Meals / Events per Day</label>
                <select className="calc-input" value={mealsPerDay} onChange={e => setMealsPerDay(Number(e.target.value))}>
                  {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
              <div>
                <label className="calc-label">Working Days per Year</label>
                <select className="calc-input" value={daysPerYear} onChange={e => setDaysPerYear(Number(e.target.value))}>
                  {[100, 150, 200, 250, 300, 365].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
            </div>
          </div>

          <div className="calc-right">
            <div className="calc-result-title">Your Annual Plastic Footprint</div>
            {[
              { num: items.toLocaleString(), label: 'Single-use items discarded per year' },
              { num: `${kgPlastic.toLocaleString()} kg`, label: 'Plastic waste generated' },
              { num: `${co2kg.toLocaleString()} kg`, label: 'CO₂ equivalent emissions' },
              { num: trees.toString(), label: 'Trees needed to offset' },
            ].map((m, i) => (
              <div key={i} className="calc-metric">
                <div className="calc-metric-num">{m.num}</div>
                <div className="calc-metric-label">{m.label}</div>
              </div>
            ))}
            <Link to="/contact" className="btn-primary" style={{ marginTop: '.5rem', justifyContent: 'center' }}>
              Start Switching Today →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── HERO SHOWCASE COMPONENT ── */
function HeroShowcase() {
  const [activeTab, setActiveTab] = useState('chocolate');

  const tabs = [
    { id: 'chocolate', icon: '🍫', name: 'Chocolates' },
    { id: 'cutlery', icon: '🥄', name: 'Cutlery Sets' },
  ];

  const showcaseData = {
    chocolate: {
      title: 'Branded Chocolate Wrappers',
      badge: 'Zero Plastic Foil',
      metric1: { val: '100%', label: 'Home Compostable' },
      metric2: { val: '0g', label: 'Single-Use Plastic' },
      tagline: 'Luxury belgian & artisan cocoa encased in custom-printed plant wrappers with metallic gold foil stamping.',
      specs: ['Custom Pantone Matching', 'Food-Grade Certified', 'Bulk Event Dispatch']
    },
    cutlery: {
      title: 'Bespoke Cutlery Kits',
      badge: 'Birchwood & CPLA',
      metric1: { val: '100%', label: 'Renewable Materials' },
      metric2: { val: '90 Days', label: 'Soil Breakdown' },
      tagline: 'Laser-etched logo cutlery wrapped in custom branded paper sleeves for high-end hospitality & corporate events.',
      specs: ['Hot & Cold Resistant', 'Laser Logo Engraving', 'Custom Napkin Sleeves']
    }
  };

  const activeData = showcaseData[activeTab];

  return (
    <div className="hero-showcase">
      <div className="hero-glow-orb" />
      <div className="hero-glow-orb-secondary" />

      <div className="hero-showcase-header">
        <div className="hero-right-label">Custom Branded Eco Catalog</div>
        <div className="hero-tabs">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`hero-tab ${activeTab === t.id ? 'active' : ''}`}
              onClick={() => setActiveTab(t.id)}
            >
              <span className="hero-tab-icon">{t.icon}</span>
              <span>{t.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Display Card */}
      <div className="hero-display-card">
        <div className="hero-card-header">
          <span className="hero-card-badge">✨ {activeData.badge}</span>
          <span className="hero-card-live">● Live Spec Preview</span>
        </div>

        <h3 className="hero-card-title">{activeData.title}</h3>
        <p className="hero-card-tagline">{activeData.tagline}</p>

        {/* Metrics Grid */}
        <div className="hero-card-metrics">
          <div className="hero-card-metric">
            <span className="hero-metric-val">{activeData.metric1.val}</span>
            <span className="hero-metric-label">{activeData.metric1.label}</span>
          </div>
          <div className="hero-card-metric-divider" />
          <div className="hero-card-metric">
            <span className="hero-metric-val">{activeData.metric2.val}</span>
            <span className="hero-metric-label">{activeData.metric2.label}</span>
          </div>
        </div>

        {/* Spec Chips */}
        <div className="hero-spec-chips">
          {activeData.specs.map((spec, i) => (
            <span key={i} className="hero-spec-chip">✓ {spec}</span>
          ))}
        </div>

        {/* Link Footer */}
        <div className="hero-card-footer">
          <Link to="/projects" className="hero-card-link">
            Explore {activeData.title} Projects →
          </Link>
        </div>
      </div>

      {/* Quick Floating Badge */}
      <div className="hero-floating-pill">
        <div className="pill-icon">🌱</div>
        <div>
          <div className="pill-title">ISO 14001 & EN 13432 Compliant</div>
          <div className="pill-desc">100% Certified Eco Materials</div>
        </div>
      </div>
    </div>
  );
}

/* ── HOME PAGE ── */
export default function HomePage() {
  const heroRef = useRef(null);
  const mazeBgRef = useRef(null);
  const scrollDotRef = useRef(null);
  const [isEcoSwitch, setIsEcoSwitch] = useState(true);

  useEffect(() => {
    const hero = heroRef.current;
    const mazeBg = mazeBgRef.current;
    const dot = scrollDotRef.current;
    if (!hero || !mazeBg) return;

    const ctx = gsap.context(() => {
      gsap.to(mazeBg, {
        y: '20%',
        ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
      });
      if (dot) {
        gsap.fromTo(dot,
          { top: '6px', opacity: 1 },
          { top: '20px', opacity: 0, duration: 1.6, repeat: -1, ease: 'power2.inOut' }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const solutions = [
    { icon: '🍫', title: 'Chocolate & Confectionery', desc: 'Compostable wrappers with full brand printing — same premium feel, zero plastic guilt.', link: '/projects/chocolate' },
    { icon: '🥄', title: 'Branded Cutlery Sets', desc: 'Birchwood, bamboo & CPLA cutlery with your logo — for events, hotels, cafeterias.', link: '/projects/cutlery' },
  ];

  return (
    <PageTransition>

      {/* ── HERO ── */}
      <section className="hero" ref={heroRef}>
        {/* LEFT */}
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            Sustainable Branding Solutions
          </div>

          <KineticText
            text="We Replace Plastic With Purpose"
            tag="h1"
            className="h-display h-xl hero-title"
            mode="words"
            delay={0.25}
          />

          <p className="hero-sub">
            PUZZLE BOXX builds premium branded sustainable alternatives to
            single-use plastic — for corporate events, exhibitions, hospitality,
            and FMCG brands that want their packaging to mean something.
          </p>

          {/* Interactive Switcher */}
          <div className="hero-switch-bar">
            <span className="switch-toggle-label">Compare Packaging Impact:</span>
            <div className="switch-toggle-buttons">
              <button
                type="button"
                className={`switch-btn ${!isEcoSwitch ? 'active-plastic' : ''}`}
                onClick={() => setIsEcoSwitch(false)}
              >
                Traditional Plastic
              </button>
              <button
                type="button"
                className={`switch-btn ${isEcoSwitch ? 'active-eco' : ''}`}
                onClick={() => setIsEcoSwitch(true)}
              >
                ✨ Puzzle Boxx Switch
              </button>
            </div>
          </div>

          {/* Dynamic Impact Comparison Box */}
          <div className={`hero-impact-box ${isEcoSwitch ? 'state-eco' : 'state-plastic'}`}>
            <div className="impact-box-header">
              <span className="impact-indicator-dot" />
              <span>{isEcoSwitch ? 'Puzzle Boxx Eco Alternative' : 'Standard Single-Use Plastic'}</span>
            </div>
            <div className="impact-box-grid">
              <div className="impact-stat-item">
                <span className="impact-stat-lbl">Degradation</span>
                <span className="impact-stat-val">{isEcoSwitch ? '90 Days (Compost)' : '450+ Years'}</span>
              </div>
              <div className="impact-stat-item">
                <span className="impact-stat-lbl">Microplastics</span>
                <span className="impact-stat-val">{isEcoSwitch ? '0% Clean Foil' : 'Toxic Leaching'}</span>
              </div>
              <div className="impact-stat-item">
                <span className="impact-stat-lbl">Brand Impact</span>
                <span className="impact-stat-val">{isEcoSwitch ? 'Gold Stamp / Custom' : 'Generic Sticker'}</span>
              </div>
            </div>
          </div>

          <div className="hero-ctas">
            <Link to="/contact" className="btn-primary">Start Your Switch →</Link>
            <Link to="/our-story" className="btn-outline">Our Story</Link>
          </div>

          {/* Trust Metrics */}
          <div className="hero-trust">
            {[
              { num: '50+', label: 'Schools in Phase 1' },
              { num: '8T', label: 'Plastic Diverted' },
              { num: '100%', label: 'Custom Branded' },
              { num: '3', label: 'Product Lines' },
            ].map((t, i, arr) => (
              <>
                <div key={i} className="hero-trust-item">
                  <span className="hero-trust-num">{t.num}</span>
                  <span className="hero-trust-label">{t.label}</span>
                </div>
                {i < arr.length - 1 && <div key={`sep-${i}`} className="hero-trust-sep" />}
              </>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="hero-scroll-indicator">
            <div className="scroll-mouse">
              <div className="scroll-dot" ref={scrollDotRef} />
            </div>
            <span>Scroll</span>
          </div>
        </div>

        {/* RIGHT — dark panel with interactive showcase */}
        <div className="hero-right">
          <MazeBg svgRef={mazeBgRef} />
          <HeroShowcase />
        </div>
      </section>

      {/* ── TICKER ── */}
      <Ticker />

      {/* ── SOLUTIONS ── */}
      <section className="solutions-teaser section-pad">
        <div className="container">
          <div className="solutions-header">
            <div>
              <div className="section-label" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>What We Do</div>
              <h2 className="h-display h-lg" style={{ color: '#FFFFFF', marginTop: '.75rem' }}>
                Two Ways To Switch
              </h2>
            </div>
            <Link to="/projects" className="btn-outline" style={{ color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.3)', fontSize: '.82rem', padding: '.6rem 1.4rem', flexShrink: 0 }}>
              See All Projects →
            </Link>
          </div>

          <ScrollReveal stagger>
            <div className="solutions-grid">
              {solutions.map((s, i) => (
                <div key={i} className="solution-card">
                  <div className="solution-icon">{s.icon}</div>
                  <div className="solution-title">{s.title}</div>
                  <p className="solution-desc">{s.desc}</p>
                  <Link to={s.link} className="solution-link">Learn More →</Link>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* ── INDUSTRY STRIP ── */}
      <section className="industry-strip">
        <div className="container">
          <p>Trusted across industries</p>
          <ScrollReveal stagger className="industry-chips">
            {INDUSTRIES.map((ind, i) => (
              <span key={i} className="industry-chip">
                {ind.icon} {ind.label}
              </span>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── BRAND ETHOS BANNER ── */}
      <section className="ethos-banner">
        <div className="container">
          <ScrollReveal>
            <div className="ethos-card">
              <div className="ethos-quote-mark">“</div>
              <blockquote className="ethos-quote">
                We don’t want companies to buy more, we want to do more with what you already buy.
              </blockquote>
              <div className="ethos-author">
                <span className="ethos-author-name">The Puzzle Boxx Philosophy</span>
                <span className="ethos-author-title">Sustainable Packaging & Custom Innovation</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PROJECT <70 TEASER ── */}
      <section className="p70-teaser section-pad">
        <div className="container">
          <div className="p70-inner">
            <ScrollReveal>
              <div className="p70-badge">🏫 School Initiative</div>
              <h2 className="h-display h-lg">
                Project&nbsp;<span style={{ color: 'var(--bronze)' }}>&lt;70</span>
              </h2>
              <p style={{ color: 'var(--ink-soft)', marginTop: '1rem', marginBottom: '2rem', maxWidth: '460px', lineHeight: 1.78 }}>
                We partner with schools to install branded collection bins and reward
                students for keeping daily plastic waste under 70mm — turning recycling
                into a competition kids actually want to win.
              </p>
              <Link to="/projects" className="btn-primary">Discover Project &lt;70 →</Link>

              <div className="p70-stat-grid">
                {[
                  { num: '70mm', label: 'Daily plastic target per student' },
                  { num: '50+', label: 'Schools targeted in first phase' },
                  { num: '8T', label: 'Tonnes diverted from landfill' },
                  { num: '∞', label: 'Brand impressions per bin' },
                ].map((s, i) => (
                  <div key={i} className="p70-stat">
                    <div className="p70-stat-num">{s.num}</div>
                    <div className="p70-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="p70-visual-inner">
                <div className="p70-big-number">&lt;70</div>
                <div className="p70-visual-text">
                  <h3>Every Gram Counts</h3>
                  <p>Students track their daily haul. Schools compete. Brands get noticed. The planet gets a break.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── IMPACT CALCULATOR ── */}
      <ImpactCalculator />

      {/* ── CTA BAND ── */}
      <section className="home-cta-band">
        <div className="home-cta-watermark">PUZZLE BOXX</div>
        <div className="container">
          <h2>Ready to make your brand sustainable?</h2>
          <p>
            Join the brands switching from single-use plastic to premium sustainable
            packaging — for events, offices, hotels, and beyond.
          </p>
          <div className="cta-band-buttons">
            <Link to="/contact" className="btn-primary">Start Your Switch →</Link>
            <Link to="/projects" className="btn-outline" style={{ color: 'var(--cream)', borderColor: 'rgba(251,247,239,.4)' }}>
              View Projects
            </Link>
          </div>
        </div>
      </section>

    </PageTransition>
  );
}
