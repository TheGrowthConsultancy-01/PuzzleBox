import { useState } from 'react';
import PageTransition from '../components/PageTransition';
import KineticText from '../components/KineticText';
import ScrollReveal from '../components/ScrollReveal';
import '../styles/contact.css';

const INTEREST_OPTIONS = [
  'Chocolate / Confectionery Packaging',
  'Corporate Sustainability Program',
  'Custom Sustainable Packaging',
];

const INITIAL_FORM = {
  company: '',
  name: '',
  mobile: '',
  email: '',
  interest: '',
  message: '',
};

const Field = ({ id, label, required, error, children }) => (
  <div className="form-group">
    <label className="form-label" htmlFor={id}>
      {label} {required && <span>*</span>}
    </label>
    {children}
    {error && (
      <span style={{ fontSize: '0.75rem', color: '#c0392b', marginTop: '0.2rem' }}>
        {error}
      </span>
    )}
  </div>
);

export default function ContactPage() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.company.trim()) errs.company = 'Company / organisation name is required.';
    if (!form.name.trim()) errs.name = 'Your name is required.';
    if (!form.mobile.trim() || !/^[\d\s\+\-]{7,15}$/.test(form.mobile.trim()))
      errs.mobile = 'Please enter a valid mobile number.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'Please enter a valid email address.';
    if (!form.interest) errs.interest = 'Please select an area of interest.';
    return errs;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(ev => ({ ...ev, [name]: undefined }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setLoading(true);
    // Simulate async submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  return (
    <PageTransition>
      <div className="contact-page">
        {/* ── LEFT PANEL ── */}
        <div className="contact-left">
          <div className="contact-left-content">
            <KineticText
              text="Start Your Switch"
              tag="h1"
              mode="words"
              delay={0.3}
            />
            <p style={{ marginTop: '1rem' }}>
              Tell us about your brand and where you're using single-use plastic.
              We'll come back with a bespoke sustainable alternative — no jargon,
              just clear options and honest pricing.
            </p>

            <div className="contact-info-list">
              {[
                { icon: '✉️', label: 'Email', value: 'hello@puzzleboxx.in' },
                { icon: '📞', label: 'Phone', value: '+91 XXXXX XXXXX' },
                { icon: '📍', label: 'Location', value: 'India — serving brands nationwide' },
                { icon: '⏱', label: 'Response Time', value: 'We reply within 24 business hours' },
              ].map((info, i) => (
                <div key={i} className="contact-info-item">
                  <div className="contact-info-icon">{info.icon}</div>
                  <div className="contact-info-text">
                    <div className="contact-info-label">{info.label}</div>
                    <div className="contact-info-value">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL / FORM ── */}
        <div className="contact-right">
          <div className="contact-form-header">
            <div className="section-label">Get In Touch</div>
            <h2 style={{ marginTop: '0.75rem' }}>Let's Build Something Better</h2>
            <p>Fill in the details below and we'll reach out to schedule a no-obligation discovery call.</p>
          </div>

          {submitted ? (
            <div className="form-success">
              <div className="success-icon">✓</div>
              <h3>Thank you, {form.name.split(' ')[0]}!</h3>
              <p>
                We've received your enquiry about <strong>{form.interest}</strong>.
                Our team will reach out to <strong>{form.email}</strong> within
                24 business hours.
              </p>
              <button
                className="btn-outline"
                onClick={() => { setForm(INITIAL_FORM); setSubmitted(false); }}
              >
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <Field id="company" label="Company / Organisation" required error={errors.company}>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="form-input"
                    placeholder="Acme Foods Ltd"
                    value={form.company}
                    onChange={handleChange}
                    autoComplete="organization"
                  />
                </Field>
                <Field id="name" label="Your Full Name" required error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-input"
                    placeholder="Priya Sharma"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                </Field>
              </div>

              <div className="form-row">
                <Field id="mobile" label="Mobile Number" required error={errors.mobile}>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    className="form-input"
                    placeholder="+91 98765 43210"
                    value={form.mobile}
                    onChange={handleChange}
                    autoComplete="tel"
                  />
                </Field>
                <Field id="email" label="Email Address" required error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="priya@acmefoods.in"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </Field>
              </div>

              <Field id="interest" label="Area of Interest" required error={errors.interest}>
                <select
                  id="interest"
                  name="interest"
                  className="form-select"
                  value={form.interest}
                  onChange={handleChange}
                >
                  <option value="">Select what interests you…</option>
                  {INTEREST_OPTIONS.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </Field>

              <Field id="message" label="Additional Details" error={errors.message}>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Tell us about your current packaging, volumes, timelines, or anything else that would help us prepare a relevant proposal…"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                />
              </Field>

              <div className="form-submit-row">
                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="btn-submit"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span style={{ display: 'inline-block', animation: 'spin 0.8s linear infinite' }}>⟳</span>
                      Sending…
                    </>
                  ) : (
                    'Send Enquiry →'
                  )}
                </button>
              </div>

              <p style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', textAlign: 'center' }}>
                We respect your privacy. Your details are never shared with third parties.
              </p>
            </form>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
