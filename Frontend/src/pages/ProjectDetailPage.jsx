import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import KineticText from '../components/KineticText';
import ScrollReveal from '../components/ScrollReveal';
import '../styles/projects.css';

const PROJECT_DATABASE = {
  chocolate: {
    slug: 'chocolate',
    badge: 'Packaging Solution',
    icon: '🍫',
    title: 'Branded Chocolate & Confectionery Wrappers',
    subtitle: 'High-barrier, certified home-compostable luxury packaging engineered for artisan cocoa, premium chocolate bars, and FMCG confectionery brands.',
    heroMetric: '0g Single-Use Plastic',
    overview: 'Foil-lined wrappers and plastic PET wraps account for millions of tonnes of unrecyclable landfill waste each year. PUZZLE BOXX replaces traditional plastic wrappers with plant-based, 100% compostable bio-polymers that preserve chocolate shelf life up to 12 months without compromising on print quality, foil stamping, or tactile luxury.',
    specs: [
      { label: 'Material Base', value: 'Certified Plant Cellulose & PLA Bio-Polymer Foil' },
      { label: 'Compostability', value: '100% Home & Industrial Compostable (ISO 17088 / EN 13432)' },
      { label: 'Degradation Time', value: '90 – 180 Days in ambient soil/home compost' },
      { label: 'Food Safety', value: 'FDA & BIS Food-Grade Certified (Zero Chemical Leaching)' },
      { label: 'Print Finishes', value: '4-Color CMYK + Pantone Spot Colors + Metallic Gold Foil Stamping' },
      { label: 'Shelf Life Barrier', value: 'High Moisture & Oxygen Barrier (Up to 12 Months)' },
      { label: 'Minimum Order (MOQ)', value: '10,000 Units (Custom Roll Stock or Pre-cut Sleeves)' },
      { label: 'Lead Time', value: '3 to 5 Weeks from Final Proof Approval' },
    ],
    impact: [
      { stat: '12g', label: 'Plastic diverted per wrapper' },
      { stat: '-68%', label: 'Reduction in lifecycle carbon emissions' },
      { stat: '0%', label: 'Microplastic breakdown residues' },
      { stat: '100%', label: 'Soil enrichment post-composting' },
    ],
    customizations: [
      { title: 'Gold & Metallic Foil Stamping', desc: 'Add luxury metallic accents, embossed brand logos, and premium foil finishes.' },
      { title: 'Pantone Spot Color Matching', desc: 'Exact color reproduction to match your existing brand packaging guidelines.' },
      { title: 'Custom Shape Die-Cuts', desc: 'Tailored sleeve dimensions, pillow pouches, flow-wrap rolls, or rigid box wraps.' },
      { title: 'Tactile Finish Options', desc: 'Choose between silky matte, high-gloss sheen, or soft-touch organic kraft feel.' },
      { title: 'Multi-Flavor Batch Runs', desc: 'Split your production order across multiple SKU design variations.' },
    ],
    faqs: [
      { q: 'Will compostable wrappers melt or tear easily during automated flow-wrapping?', a: 'No. Our bio-cellulose materials are engineered for standard high-speed flow-wrap equipment with identical tensile strength and thermal seal points to conventional PET plastic.' },
      { q: 'Is the material safe for direct contact with chocolates containing cocoa butter?', a: 'Yes. The inner lining is US FDA and European EC 1935/2004 certified for direct food contact, preventing fat migration or flavor absorption.' },
    ],
  },
  cutlery: {
    slug: 'cutlery',
    badge: 'Serviceware Solution',
    icon: '🥄',
    title: 'Branded Sustainable Cutlery Sets',
    subtitle: 'Laser-etched FSC Birchwood, Bamboo & CPLA serviceware individually wrapped in custom printed brand paper sleeves for hospitality, events & dining.',
    heroMetric: '100% Renewable Plant Materials',
    overview: 'Single-use plastic cutlery is one of the most visible pollutants in the dining and hospitality industries. PUZZLE BOXX supplies premium, splinter-free birchwood, bamboo, and high-heat CPLA cutlery sets tailored to hotels, airlines, corporate offices, and catering events. Every utensil can be laser-engraved or heat-stamped with your logo.',
    specs: [
      { label: 'Material Options', value: 'FSC-Certified Birchwood, Natural Bamboo, or High-Heat CPLA' },
      { label: 'Branding Method', value: 'Precision Laser Logo Engraving, Heat Stamping & Custom Paper Sleeves' },
      { label: 'Temperature Range', value: 'Heat-Resistant up to 90°C (194°F) for Soups, Curries & Hot Meals' },
      { label: 'Set Configurations', value: 'Spoons, Forks, Knives, Chopsticks, Napkins & Meal Kit Pouches' },
      { label: 'Finish & Feel', value: 'Ultra-Smooth Splinter-Free Coating with Zero Woody Aftertaste' },
      { label: 'Compostability', value: '100% Biodegradable & Organic Soil Breakdown' },
      { label: 'Minimum Order (MOQ)', value: '5,000 Sets / 10,000 Individual Pieces' },
      { label: 'Lead Time', value: '2 to 4 Weeks with Express Dispatch Available' },
    ],
    impact: [
      { stat: '25g', label: 'Single-use plastic eliminated per meal set' },
      { stat: '90 Days', label: 'Complete natural breakdown in garden soil' },
      { stat: '1 Tree', label: 'Planted for every 10,000 cutlery sets produced' },
      { stat: '100%', label: 'FSC-certified sustainable forest sourcing' },
    ],
    customizations: [
      { title: 'Laser Engraved Handle Branding', desc: 'Sharp, permanent laser etching of your brand logo directly onto wood or bamboo handles.' },
      { title: 'Food-Grade Heat Stamping', desc: 'Subtle darkened brand marks pressed into Birchwood utensils.' },
      { title: 'Custom Printed Kraft Sleeves', desc: 'Enclose cutlery sets in full-color recycled paper sleeves with brand messaging.' },
      { title: 'Curated 3-in-1 or 4-in-1 Kits', desc: 'Custom meal kits combining fork, knife, spoon, and compostable paper napkin.' },
      { title: 'Hygienic Individual Wraps', desc: 'Sealed paper wrappers for in-flight meals, room service, and delivery packaging.' },
    ],
    faqs: [
      { q: 'Does wooden cutlery affect the taste of food?', a: 'Not at all. Our Birchwood and Bamboo utensils undergo an organic vegetable wax polishing process that seals the wood grain, preventing woody taste or roughness.' },
      { q: 'Can CPLA cutlery handle boiling hot liquids like soups?', a: 'Yes! Our high-heat CPLA (Crystallized Polylactic Acid) cutlery is rated up to 90°C (194°F), making it ideal for hot soups, coffee stirring, and heavy catering.' },
    ],
  },
};

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = PROJECT_DATABASE[slug] || PROJECT_DATABASE['chocolate'];

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    quantity: '10000',
    notes: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <PageTransition>
      <div className="project-detail-page">
        {/* ── BREADCRUMB HEADER ── */}
        <section className="project-detail-hero section-pad">
        <div className="container">
          <Link to="/projects" className="back-link">
            ← Back to All Projects
          </Link>

          <div style={{ marginTop: '2rem' }}>
            <div className="section-label">{project.badge}</div>
            <KineticText
              text={project.title}
              tag="h1"
              mode="words"
              delay={0.15}
            />
            <p className="project-detail-subtitle">
              {project.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW & METRICS ── */}
      <section className="project-overview-sec section-pad" style={{ background: 'var(--ink-dark)' }}>
        <div className="container">
          <div className="project-overview-grid">
            <ScrollReveal>
              <div className="overview-text-block">
                <span className="overview-icon">{project.icon}</span>
                <h2>Solution Overview</h2>
                <p>{project.overview}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="overview-stat-card">
                <div className="overview-stat-metric">{project.heroMetric}</div>
                <div className="overview-stat-desc">Zero Compromise on Packaging Quality & Durability</div>
                <div className="overview-pill-list">
                  <span>✓ ISO 17088 Certified</span>
                  <span>✓ Food-Safe FDA Approved</span>
                  <span>✓ 100% Custom Branded</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL SPECIFICATIONS ── */}
      <section className="project-specs-sec section-pad">
        <div className="container">
          <ScrollReveal>
            <div className="section-label">Engineering Details</div>
            <h2 className="h-display h-lg" style={{ marginTop: '0.75rem', marginBottom: '2.5rem' }}>
              Technical Specifications
            </h2>
          </ScrollReveal>

          <ScrollReveal stagger className="detail-specs-grid">
            {project.specs.map((s, i) => (
              <div key={i} className="detail-spec-card">
                <div className="detail-spec-lbl">{s.label}</div>
                <div className="detail-spec-val">{s.value}</div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── ENVIRONMENTAL IMPACT ── */}
      <section className="project-impact-sec section-pad" style={{ background: 'var(--ink-dark)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-label" style={{ justifyContent: 'center' }}>Measured Value</div>
            <h2 className="h-display h-lg" style={{ textAlign: 'center', marginTop: '0.75rem', marginBottom: '3rem' }}>
              Environmental Impact Metrics
            </h2>
          </ScrollReveal>

          <ScrollReveal stagger className="detail-impact-grid">
            {project.impact.map((m, i) => (
              <div key={i} className="detail-impact-card">
                <div className="detail-impact-num">{m.stat}</div>
                <div className="detail-impact-lbl">{m.label}</div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── CUSTOM BRANDING OPTIONS ── */}
      <section className="project-custom-sec section-pad">
        <div className="container">
          <ScrollReveal>
            <div className="section-label">Brand Power</div>
            <h2 className="h-display h-lg" style={{ marginTop: '0.75rem', marginBottom: '2.5rem' }}>
              Customization & Finishing Options
            </h2>
          </ScrollReveal>

          <ScrollReveal stagger className="custom-options-grid">
            {project.customizations.map((c, i) => (
              <div key={i} className="custom-option-card">
                <div className="custom-option-num">0{i + 1}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── SAMPLE REQUEST & QUOTE FORM ── */}
      <section className="project-inquiry-sec section-pad" style={{ background: 'var(--ink-dark)' }}>
        <div className="container">
          <div className="inquiry-box">
            <div className="inquiry-left">
              <div className="section-label">Direct Inquiry</div>
              <h2>Request Samples &<br />Bulk Quote</h2>
              <p>
                Get a custom sample kit delivered to your office or receive an estimated quote based on your annual volume.
              </p>
              <div className="inquiry-features">
                <div>📦 Free sample kit for verified corporate buyers</div>
                <div>🎨 Includes material swatches & print proofs</div>
                <div>⏱️ Quote returned within 24 business hours</div>
              </div>
            </div>

            <div className="inquiry-right">
              {formSubmitted ? (
                <div className="inquiry-success">
                  <div className="success-icon">✨</div>
                  <h3>Sample Request Received!</h3>
                  <p>Thank you, {formData.name}. Our sustainability team will send product samples and pricing details to <strong>{formData.email}</strong> within 24 hours.</p>
                  <button className="btn-primary" onClick={() => setFormSubmitted(false)} style={{ marginTop: '1.5rem' }}>
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="inquiry-form">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="ananya@company.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Company / Brand Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Grand Resort & Spa"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Estimated Annual Units</label>
                    <select
                      value={formData.quantity}
                      onChange={e => setFormData({ ...formData, quantity: e.target.value })}
                    >
                      <option value="5000">5,000 – 10,000 units</option>
                      <option value="25000">10,000 – 50,000 units</option>
                      <option value="100000">50,000 – 250,000 units</option>
                      <option value="500000">250,000+ units (Enterprise)</option>
                    </select>
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                    Request Samples & Pricing →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  </PageTransition>
  );
}
