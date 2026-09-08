import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import KineticText from '../components/KineticText';
import ScrollReveal from '../components/ScrollReveal';
import '../styles/projects.css';

const USE_CASES = [
  { icon: '🏨', title: 'Hotels & Resorts', desc: 'Guest amenity kits and dining cutlery with resort branding.' },
  { icon: '☕', title: 'Cafés & QSR', desc: 'Compostable cups, stirrers, and branded takeaway packaging.' },
  { icon: '🎓', title: 'Schools & Colleges', desc: 'Canteen cutlery sets and Project <70 bin installation.' },
  { icon: '🏪', title: 'FMCG Brands', desc: 'Chocolate, confectionery, and snack brand wrapper replacement.' },
  { icon: '🏥', title: 'Healthcare', desc: 'Single-use medical-grade sustainable disposables.' },
  { icon: '✈️', title: 'Airlines & Hospitality', desc: 'In-flight meal packaging, cutlery, and napkin alternatives.' },
  { icon: '🎉', title: 'Events & Weddings', desc: 'Branded sustainable tableware for large-scale events.' },
  { icon: '🏢', title: 'Corporate Offices', desc: 'Pantry and cafeteria sustainable cutlery programs.' },
];

const FAQS = [
  {
    q: 'Are your sustainable alternatives actually cheaper than plastic?',
    a: 'At scale, yes. Our plant-based cutlery and compostable wrappers are within 15–25% of equivalent plastic costs — and that gap closes when you account for CSR compliance benefits, ESG reporting value, and avoided waste disposal fees.',
  },
  {
    q: 'What certifications do your materials carry?',
    a: 'Our materials are certified under ISO 17088 (compostable plastics), BIS standards for food-contact materials, and we source from suppliers with FSC certification for wood-based products.',
  },
  {
    q: 'What is the minimum order quantity?',
    a: 'MOQs vary by product type. Branded cutlery starts at 5,000 units per SKU. Chocolate wrappers start at 10,000 units. Project <70 bin installations have no MOQ — we price per school.',
  },
  {
    q: 'How long does the design-to-delivery process take?',
    a: 'Typically 4–8 weeks from brief sign-off to first production run. This includes material testing, sample approval, and print proofing. Rush orders can be accommodated at a premium.',
  },
  {
    q: 'Can you match our exact Pantone or brand colors?',
    a: 'Yes. We use 4-colour CMYK and Pantone spot matching on our compostable substrates. Sample swatches are provided for approval before production.',
  },
  {
    q: 'How does Project <70 work for schools?',
    a: 'We partner with the school to install branded collection bins, provide measurement tools, and run weekly weigh-ins. Winning classes and students receive rewards. Brands fund the program in exchange for bin branding and CSR visibility.',
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <button
        className={`faq-question${open ? ' open' : ''}`}
        onClick={() => setOpen(o => !o)}
      >
        {q}
        <span className="faq-icon">+</span>
      </button>
      <div className={`faq-answer${open ? ' open' : ''}`}>
        <div className="faq-answer-inner">{a}</div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <PageTransition>
      {/* ── PAGE HERO ── */}
      <section className="projects-hero">
        <div className="container">
          <div className="section-label">Our Projects</div>
          <KineticText
            text="Where Sustainability Meets Brand Power"
            tag="h1"
            mode="words"
            delay={0.2}
          />
          <p>
            From chocolate wrappers to school recycling bins — every PUZZLE BOXX
            project is a chance to turn your brand into a force for good.
          </p>
        </div>
      </section>

      {/* ── SOLUTIONS DETAIL ── */}
      <section className="solutions-detail section-pad">
        <div className="container">
          <ScrollReveal>
            <div className="section-label" style={{ marginBottom: '2.5rem' }}>Core Solutions — Click Any Card For Detailed Page</div>
          </ScrollReveal>
          <ScrollReveal stagger className="solutions-detail-grid">
            {/* Card 1: Chocolate Packaging */}
            <Link
              to="/projects/chocolate"
              className="solution-detail-card puzzle-hover"
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div className="solution-card-top">
                <div className="solution-card-top-bg" />
                <div className="solution-card-badge">Packaging</div>
                <h3>Branded Chocolate<br />& Confectionery Wrappers</h3>
              </div>
              <div className="solution-card-body">
                <p>
                  Replace foil-lined and PET plastic chocolate wrappers with
                  certified compostable, food-safe substrates that print as
                  beautifully as any premium packaging — because your brand
                  deserves better than landfill-bound foil.
                </p>
                <div className="feature-pills" style={{ marginBottom: '1.5rem' }}>
                  {['Compostable PLA', 'Kraft + Coating', 'Food-Safe Ink', 'Custom Shape Dies', 'Pantone Match', 'Bulk MOQ'].map(f => (
                    <span key={f} className="feature-pill">{f}</span>
                  ))}
                </div>
                <div
                  className="btn-primary"
                  style={{ width: '100%', fontSize: '0.85rem', padding: '0.65rem 1rem', textAlign: 'center' }}
                >
                  Explore Detailed Page →
                </div>
              </div>
            </Link>

            {/* Card 2: Cutlery */}
            <Link
              to="/projects/cutlery"
              className="solution-detail-card puzzle-hover"
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div className="solution-card-top">
                <div className="solution-card-top-bg" />
                <div className="solution-card-badge">Serviceware</div>
                <h3>Branded Sustainable<br />Cutlery Sets</h3>
              </div>
              <div className="solution-card-body">
                <p>
                  Birchwood, bamboo, and CPLA plant-based cutlery — individually
                  branded with laser etching or heat stamping — for restaurants,
                  hotels, airlines, and corporate cafeterias that want every
                  touchpoint to tell their sustainability story.
                </p>
                <div className="feature-pills" style={{ marginBottom: '1.5rem' }}>
                  {['Birchwood FSC', 'Bamboo', 'CPLA', 'Laser Etch', 'Heat Stamp', 'Full Sets'].map(f => (
                    <span key={f} className="feature-pill">{f}</span>
                  ))}
                </div>
                <div
                  className="btn-primary"
                  style={{ width: '100%', fontSize: '0.85rem', padding: '0.65rem 1rem', textAlign: 'center' }}
                >
                  Explore Detailed Page →
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PROJECT <70 FULL DETAIL ── */}
      <section className="p70-full section-pad">
        <div className="container p70-full-inner">
          <ScrollReveal className="p70-header">
            <div className="p70-big-badge">🏫 Project &lt;70</div>
            <h2>Turning Schools Into<br />Sustainability Champions</h2>
            <p>
              Project &lt;70 is our flagship school-engagement initiative. We install branded
              collection bins, run measurement workshops, and gamify the entire process
              so reducing plastic waste becomes something students compete to do.
            </p>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="p70-steps">
              {[
                { n: 'Step 01', title: 'School Partnership', p: 'We sign an MOU with the school management and brief teachers on the initiative.' },
                { n: 'Step 02', title: 'Bin Installation', p: 'Branded collection bins are installed in canteens, corridors, and common areas.' },
                { n: 'Step 03', title: 'Student Briefing', p: 'Students are educated on plastic types, weights, and the <70mm daily target.' },
                { n: 'Step 04', title: 'Weekly Weigh-Ins', p: 'Classes compete to bring in the least plastic. Results are tracked on a live leaderboard.' },
                { n: 'Step 05', title: 'Plastic Collection', p: 'Collected plastic is sent to certified recyclers. Nothing goes to landfill.' },
                { n: 'Step 06', title: 'Impact Reporting', p: 'Brand sponsors receive monthly impact reports with tonnes diverted and impression data.' },
                { n: 'Step 07', title: 'Rewards Program', p: 'Winning classes get prizes funded by brand sponsors, creating positive associations.' },
                { n: 'Step 08', title: 'Expand & Replicate', p: 'Successful schools invite neighboring schools. The movement grows organically.' },
              ].map((s, i) => (
                <div key={i} className="p70-step">
                  <div className="p70-step-num">{s.n}</div>
                  <h4>{s.title}</h4>
                  <p>{s.p}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="use-cases section-pad">
        <div className="container">
          <ScrollReveal className="use-cases-header">
            <div className="section-label" style={{ justifyContent: 'center' }}>Who We Serve</div>
            <h2 className="h-display h-lg" style={{ marginTop: '0.75rem' }}>
              Built for Every Industry
            </h2>
          </ScrollReveal>
          <ScrollReveal stagger className="use-cases-grid">
            {USE_CASES.map((u, i) => (
              <div key={i} className="use-case-item">
                <div className="use-case-icon">{u.icon}</div>
                <div className="use-case-title">{u.title}</div>
                <div className="use-case-desc">{u.desc}</div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ACCORDION ── */}
      <section className="faq-section section-pad">
        <div className="container">
          <ScrollReveal className="faq-header">
            <div className="section-label" style={{ justifyContent: 'center' }}>Transparency</div>
            <h2 className="h-display h-md" style={{ marginTop: '0.75rem' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: 'var(--ink-muted)', marginTop: '0.75rem' }}>
              We believe in radical transparency. If you have a question not answered here,
              just ask us.
            </p>
          </ScrollReveal>

          <div className="faq-list">
            {FAQS.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
