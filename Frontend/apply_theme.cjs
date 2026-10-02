const fs = require('fs');
const path = require('path');

const root = 'C:/Users/HENIL/OneDrive/Desktop/PuzzleBox-main/Frontend';

// 1. Navbar.jsx
let navPath = path.join(root, 'src/components/Navbar.jsx');
let navCode = fs.readFileSync(navPath, 'utf8');
navCode = navCode.replace('/logo-light.png', '/logo.png');
fs.writeFileSync(navPath, navCode, 'utf8');
console.log('1. Navbar.jsx verified: /logo.png');

// 2. Footer.jsx
let footPath = path.join(root, 'src/components/Footer.jsx');
let footCode = fs.readFileSync(footPath, 'utf8');
footCode = footCode.replace(/stroke="#C99A4E"/g, 'stroke="rgba(255, 255, 255, 0.4)"');
fs.writeFileSync(footPath, footCode, 'utf8');
console.log('2. Footer.jsx verified: monochrome strokes');

// 3. HomePage.jsx
let homePgPath = path.join(root, 'src/pages/HomePage.jsx');
let homePgCode = fs.readFileSync(homePgPath, 'utf8');
homePgCode = homePgCode.replace(/stroke="#9C6B2F"/g, 'stroke="rgba(10, 10, 12, 0.12)"');
homePgCode = homePgCode.replace(/stroke="#C99A4E"/g, 'stroke="rgba(10, 10, 12, 0.3)"');
homePgCode = homePgCode.replace(/fill="#C99A4E"/g, 'fill="rgba(10, 10, 12, 0.5)"');
homePgCode = homePgCode.replace("style={{ color: 'var(--bronze-light)' }}>What We Do", "style={{ color: 'rgba(255, 255, 255, 0.7)' }}>What We Do");
homePgCode = homePgCode.replace("style={{ color: 'var(--cream)', marginTop: '.75rem' }}", "style={{ color: '#FFFFFF', marginTop: '.75rem' }}");
homePgCode = homePgCode.replace("borderColor: 'rgba(201,154,78,.4)'", "borderColor: 'rgba(255, 255, 255, 0.3)'");
homePgCode = homePgCode.replace("style={{ color: 'var(--bronze-light)', borderColor: 'rgba(255, 255, 255, 0.3)'", "style={{ color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.3)'");
fs.writeFileSync(homePgPath, homePgCode, 'utf8');
console.log('3. HomePage.jsx updated');

// 4. OurStoryPage.jsx
let storyPgPath = path.join(root, 'src/pages/OurStoryPage.jsx');
let storyPgCode = fs.readFileSync(storyPgPath, 'utf8');
storyPgCode = storyPgCode.replace("style={{ color: 'var(--bronze-light)', marginBottom: '2rem' }}", "style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '2rem' }}");
storyPgCode = storyPgCode.replace("style={{ color: 'var(--bronze-light)' }}>How We Started", "style={{ color: 'rgba(255, 255, 255, 0.7)' }}>How We Started");
fs.writeFileSync(storyPgPath, storyPgCode, 'utf8');
console.log('4. OurStoryPage.jsx updated');

// 5. index.html
let htmlPath = path.join(root, 'index.html');
let htmlCode = fs.readFileSync(htmlPath, 'utf8');
htmlCode = htmlCode.replace(/content="#9C6B2F"/g, 'content="#0A0A0C"');
fs.writeFileSync(htmlPath, htmlCode, 'utf8');
console.log('5. index.html updated');

// 6. theme.css
const themeCss = `/* ===== PUZZLE BOXX — Design Tokens ===== */

@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap');

:root {
  /* Colors — Minimalist Architectural Monochrome */
  --cream:        #FAFAFA;
  --cream-dark:   #F3F4F6;
  --bronze:       #0A0A0C;
  --bronze-dark:  #000000;
  --bronze-light: #18181B;
  --bronze-pale:  #E4E4E7;
  --ink:          #0A0A0C;
  --ink-soft:     #18181B;
  --ink-muted:    #27272A;
  --ink-dark:     #121215;
  --white:        #FFFFFF;

  /* Typography */
  --font-display: 'Sora', sans-serif;
  --font-body:    'DM Sans', sans-serif;

  /* Spacing */
  --section-pad:  clamp(4rem, 8vw, 8rem);
  --container:    1200px;
  --gutter:       clamp(1.25rem, 4vw, 2.5rem);

  /* Transitions */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out:   cubic-bezier(0.76, 0, 0.24, 1);

  /* Borders / Radius */
  --radius-sm:  6px;
  --radius-md:  12px;
  --radius-lg:  20px;

  /* Shadows */
  --shadow-bronze: 0 4px 20px rgba(0, 0, 0, 0.08);
  --shadow-deep:   0 10px 40px rgba(0, 0, 0, 0.12);
}

/* ===== RESET & BASE ===== */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

html, body {
  overflow-x: clip;
}

body {
  background-color: var(--cream);
  color: var(--ink);
  font-family: var(--font-body);
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

button {
  cursor: pointer;
  font-family: var(--font-body);
  border: none;
  background: none;
}

/* ===== UTILITY CLASSES ===== */
.container {
  max-width: var(--container);
  margin-inline: auto;
  padding-inline: var(--gutter);
}

.section-pad {
  padding-block: var(--section-pad);
}

.text-bronze    { color: var(--bronze); }
.text-ink       { color: var(--ink); }
.text-muted     { color: var(--ink-muted); }
.text-center    { text-align: center; }

.font-display   { font-family: var(--font-display); }

/* ===== MAZE DIVIDER ===== */
.maze-divider {
  width: 100%;
  height: 2px;
  background: repeating-linear-gradient(
    90deg,
    var(--ink) 0px,
    var(--ink) 16px,
    transparent 16px,
    transparent 24px,
    var(--ink-muted) 24px,
    var(--ink-muted) 28px,
    transparent 28px,
    transparent 36px
  );
  opacity: 0.15;
  margin-block: 1rem;
}

.maze-divider-v {
  width: 2px;
  background: repeating-linear-gradient(
    180deg,
    var(--ink) 0px,
    var(--ink) 16px,
    transparent 16px,
    transparent 24px
  );
  opacity: 0.15;
}

/* ===== PUZZLE PIECE HOVER (mixin-like class) ===== */
.puzzle-hover {
  transition: box-shadow 0.25s var(--ease-out-expo), transform 0.25s var(--ease-out-expo);
}
.puzzle-hover:hover {
  transform: translate(-3px, -3px);
  box-shadow: 6px 6px 0 var(--ink), var(--shadow-bronze);
}

/* ===== BUTTONS ===== */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 2rem;
  background: var(--ink);
  color: var(--white);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.04em;
  border-radius: var(--radius-sm);
  border: 2px solid var(--ink);
  transition: background 0.25s, color 0.25s, box-shadow 0.25s, transform 0.25s;
}
.btn-primary:hover {
  background: #000000;
  color: var(--white);
  box-shadow: 5px 5px 0 var(--bronze-pale);
  transform: translate(-2px, -2px);
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 2rem;
  background: transparent;
  color: var(--ink);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.04em;
  border-radius: var(--radius-sm);
  border: 2px solid var(--ink);
  transition: background 0.25s, color 0.25s, box-shadow 0.25s, transform 0.25s;
}
.btn-outline:hover {
  background: var(--ink);
  color: var(--white);
  box-shadow: 5px 5px 0 var(--bronze-pale);
  transform: translate(-2px, -2px);
}

/* ===== PAGE TRANSITION WRAPPER =====
   NOTE: Do NOT set opacity/transform here.
   GSAP owns those via autoAlpha to prevent
   blank-page flash on hard reload.
===== */
.page-wrapper {
  will-change: opacity, transform;
}

/* ===== SECTION LABEL ===== */
.section-label {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink);
  margin-bottom: 1.2rem;
}
.section-label::before,
.section-label::after {
  content: '';
  display: block;
  width: 24px;
  height: 2px;
  background: var(--ink-muted);
  opacity: 0.5;
}

/* ===== HEADING STYLES ===== */
.h-display {
  font-family: var(--font-display);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--ink);
}

.h-xl   { font-size: clamp(2.8rem, 6vw, 5.5rem); }
.h-lg   { font-size: clamp(2rem, 4vw, 3.5rem); }
.h-md   { font-size: clamp(1.5rem, 3vw, 2.25rem); }
.h-sm   { font-size: clamp(1.2rem, 2vw, 1.6rem); }

/* char animation helpers */
.char-wrap { overflow: hidden; display: inline-block; }
.char      { display: inline-block; will-change: transform, opacity; }
`;
fs.writeFileSync(path.join(root, 'src/styles/theme.css'), themeCss, 'utf8');
console.log('6. theme.css written');

// 7. home.css
let homeCssPath = path.join(root, 'src/styles/home.css');
let homeCss = fs.readFileSync(homeCssPath, 'utf8');

// Replace all bronze/gold colors
homeCss = homeCss.replace(/rgba\(\s*156\s*,\s*107\s*,\s*47\s*,\s*([0-9.]+)\s*\)/g, (match, p1) => 'rgba(10, 10, 12, ' + p1 + ')');
homeCss = homeCss.replace(/rgba\(\s*201\s*,\s*154\s*,\s*78\s*,\s*([0-9.]+)\s*\)/g, (match, p1) => 'rgba(255, 255, 255, ' + p1 + ')');
homeCss = homeCss.replace(/#9C6B2F/gi, '#0A0A0C');
homeCss = homeCss.replace(/#C99A4E/gi, '#18181B');
homeCss = homeCss.replace(/#E8D5B0/gi, '#E4E4E7');
homeCss = homeCss.replace(/#FBF7EF/gi, '#FAFAFA');
homeCss = homeCss.replace(/#EFE7D8/gi, '#F3F4F6');
homeCss = homeCss.replace(/#241A10/gi, '#0A0A0C');
homeCss = homeCss.replace(/#5C4530/gi, '#18181B');
homeCss = homeCss.replace(/#8B6E52/gi, '#27272A');

// FIX CARD TEXT COLORS IN HOME.CSS
// Solution Card
homeCss = homeCss.replace(/color:\s*rgba\(239,\s*231,\s*216,\s*\.52\);/g, 'color: #F4F4F5; font-size: 0.9rem; font-weight: 500;');
homeCss = homeCss.replace(/color:\s*rgba\(239,\s*231,\s*216,\s*0\.68\);/g, 'color: #F4F4F5; font-size: 0.9rem; font-weight: 500;');
homeCss = homeCss.replace(/color:\s*rgba\(239,\s*231,\s*216,\s*0\.55\);/g, 'color: #E4E4E7; font-weight: 600;');
homeCss = homeCss.replace(/color:\s*rgba\(239,\s*231,\s*216,\s*0\.5\);/g, 'color: #E4E4E7; font-weight: 500;');
homeCss = homeCss.replace(/color:\s*rgba\(239,\s*231,\s*216,\s*\.6\);/g, 'color: #F4F4F5; font-weight: 500;');

// Make solution-link bright and readable
homeCss = homeCss.replace(/\.solution-link\s*\{([^}]+)color:\s*var\(--bronze-light\);/g, '.solution-link {$1color: #FFFFFF;');

// Hero display card metrics and labels
homeCss = homeCss.replace(/\.hero-metric-val\s*\{([^}]+)color:\s*var\(--bronze-light\);/g, '.hero-metric-val {$1color: #FFFFFF;');
homeCss = homeCss.replace(/\.hero-card-badge\s*\{([^}]+)color:\s*var\(--bronze-light\);/g, '.hero-card-badge {$1color: #FFFFFF;');
homeCss = homeCss.replace(/\.hero-card-link\s*\{([^}]+)color:\s*var\(--cream\);/g, '.hero-card-link {$1color: #FFFFFF;');

// Calculator metrics and labels
homeCss = homeCss.replace(/\.calc-metric-num\s*\{([^}]+)color:\s*var\(--bronze-light\);/g, '.calc-metric-num {$1color: #FFFFFF;');
homeCss = homeCss.replace(/\.calc-label\s*\{([^}]+)color:\s*var\(--bronze-light\);/g, '.calc-label {$1color: #FFFFFF;');
homeCss = homeCss.replace(/\.calc-range-val\s*\{([^}]+)color:\s*var\(--bronze-light\);/g, '.calc-range-val {$1color: #FFFFFF;');
homeCss = homeCss.replace(/\.calc-result-title\s*\{([^}]+)color:\s*var\(--bronze\);/g, '.calc-result-title {$1color: #FFFFFF;');

// P70 card stats
homeCss = homeCss.replace(/\.p70-stat-label\s*\{([^}]+)color:\s*var\(--ink-soft\);/g, '.p70-stat-label {$1color: #0A0A0C; font-weight: 600;');
homeCss = homeCss.replace(/\.p70-stat-num\s*\{([^}]+)color:\s*var\(--bronze\);/g, '.p70-stat-num {$1color: #0A0A0C; font-weight: 800;');

// Hero impact box items
homeCss = homeCss.replace(/\.impact-stat-lbl\s*\{([^}]+)color:\s*var\(--ink-muted\);/g, '.impact-stat-lbl {$1color: #18181B; font-weight: 700;');
homeCss = homeCss.replace(/\.impact-stat-val\s*\{([^}]+)\}/g, '.impact-stat-val {$1color: #0A0A0C; font-weight: 800;}');

// Ethos card
homeCss = homeCss.replace(/\.ethos-author-name\s*\{([^}]+)color:\s*var\(--bronze-light\);/g, '.ethos-author-name {$1color: #FFFFFF;');
homeCss = homeCss.replace(/\.ethos-author-title\s*\{([^}]+)color:\s*rgba\(239,\s*231,\s*216,\s*0\.5\);/g, '.ethos-author-title {$1color: #E4E4E7; font-weight: 600;');

fs.writeFileSync(homeCssPath, homeCss, 'utf8');
console.log('7. home.css updated with crisp card text');

// 8. story.css
const storyCss = `/* ===== OUR STORY PAGE ===== */

/* MANIFESTO HERO */
.story-hero {
  min-height: 70vh;
  background: var(--ink);
  display: flex;
  align-items: center;
  padding-top: 72px;
  position: relative;
  overflow: hidden;
}

.story-hero-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 60% 80% at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
}

.story-hero-content {
  position: relative;
  z-index: 1;
  max-width: 820px;
}

.story-hero-content h1 {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5.5vw, 5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--white);
  margin-bottom: 2rem;
}

.story-hero-content h1 em {
  font-style: normal;
  color: #FFFFFF;
}

.story-hero-sub {
  font-size: clamp(1rem, 1.6vw, 1.15rem);
  color: #F4F4F5;
  font-weight: 500;
  line-height: 1.75;
  max-width: 580px;
}

/* PROBLEM SECTION */
.problem-section {
  background: var(--cream-dark);
  overflow: hidden;
}

.problem-intro {
  max-width: 680px;
  margin-inline: auto;
  text-align: center;
  margin-bottom: 4rem;
}

.problem-stats-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5px;
  background: var(--bronze-pale);
  border: 1.5px solid var(--bronze-pale);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.prob-stat {
  background: var(--cream);
  padding: 2.5rem 1.5rem;
  text-align: center;
  position: relative;
}

.prob-stat::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 3px;
  background: var(--ink);
}

.prob-stat-num {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 800;
  color: var(--ink);
  line-height: 1;
  margin-bottom: 0.6rem;
}

.prob-stat-text {
  font-size: 0.88rem;
  color: #0A0A0C;
  font-weight: 600;
  line-height: 1.5;
}

/* PROCESS SECTION */
.process-section {
  background: var(--cream);
}

.process-header {
  text-align: center;
  margin-bottom: 4rem;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.process-step {
  padding: 2.25rem 2rem;
  background: var(--cream-dark);
  border: 1.5px solid var(--bronze-pale);
  border-radius: var(--radius-md);
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
}

.process-step:hover {
  border-color: var(--ink);
  box-shadow: 6px 6px 0 var(--bronze-pale);
  transform: translate(-3px, -3px);
}

.step-number {
  font-family: var(--font-display);
  font-size: 4rem;
  font-weight: 800;
  color: #A1A1AA;
  line-height: 1;
  margin-bottom: 1rem;
}

.step-title {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--ink);
  margin-bottom: 0.75rem;
}

.step-desc {
  font-size: 0.92rem;
  color: #18181B;
  font-weight: 500;
  line-height: 1.65;
}

/* FOUNDING NARRATIVE */
.founding-section {
  background: var(--ink);
  position: relative;
  overflow: hidden;
}

.founding-inner {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 5rem;
  align-items: center;
}

.founding-left {
  position: relative;
}

.founding-quote-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
  position: relative;
}

.founding-quote-card::before {
  content: '"';
  position: absolute;
  top: -0.5rem;
  left: 1.5rem;
  font-size: 6rem;
  font-family: Georgia, serif;
  color: rgba(255, 255, 255, 0.3);
  line-height: 1;
  opacity: 0.4;
}

.founding-quote {
  font-size: 1.15rem;
  font-style: italic;
  color: #FFFFFF;
  line-height: 1.75;
  margin-bottom: 1.5rem;
}

.founding-cite {
  font-family: var(--font-display);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #E4E4E7;
}

.founding-right h2 {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 800;
  color: var(--white);
  margin-bottom: 1.5rem;
  line-height: 1.15;
}

.founding-right p {
  color: #F4F4F5;
  font-size: 0.98rem;
  font-weight: 500;
  line-height: 1.8;
  margin-bottom: 1.25rem;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .problem-stats-strip { grid-template-columns: repeat(2, 1fr); }
  .process-steps { grid-template-columns: repeat(2, 1fr); }
  .founding-inner { grid-template-columns: 1fr; gap: 3rem; }
}

@media (max-width: 560px) {
  .problem-stats-strip { grid-template-columns: 1fr; }
  .process-steps { grid-template-columns: 1fr; }
}
`;
fs.writeFileSync(path.join(root, 'src/styles/story.css'), storyCss, 'utf8');
console.log('8. story.css written with high-contrast card text');

// 9. contact.css
const contactCss = `/* ===== CONTACT PAGE ===== */

.contact-page {
  min-height: 100svh;
  padding-top: 72px;
  background: var(--cream);
  display: grid;
  grid-template-columns: 1fr 1.2fr;
}

/* LEFT PANEL */
.contact-left {
  background: var(--ink);
  padding: 5rem 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.contact-left::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 60% at 30% 70%, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.contact-left-content {
  position: relative;
  z-index: 1;
}

.contact-left h1 {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 800;
  color: var(--white);
  line-height: 1.1;
  margin-bottom: 1.25rem;
}

.contact-left h1 span {
  color: #E4E4E7;
}

.contact-left p {
  color: #F4F4F5;
  font-size: 0.98rem;
  font-weight: 500;
  line-height: 1.75;
  margin-bottom: 3rem;
}

.contact-info-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.contact-info-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.contact-info-icon {
  width: 36px;
  height: 36px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: var(--white);
  flex-shrink: 0;
}

.contact-info-text {
  flex: 1;
}

.contact-info-label {
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #E4E4E7;
  margin-bottom: 0.2rem;
}

.contact-info-value {
  font-size: 0.95rem;
  font-weight: 600;
  color: #FFFFFF;
}

/* RIGHT PANEL / FORM */
.contact-right {
  padding: 5rem 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.contact-form-header {
  margin-bottom: 2.5rem;
}

.contact-form-header h2 {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 800;
  color: var(--ink);
  margin-bottom: 0.5rem;
}

.contact-form-header p {
  font-size: 0.92rem;
  color: #18181B;
  font-weight: 500;
}

/* FORM */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.form-label {
  font-family: var(--font-display);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #0A0A0C;
}

.form-label span {
  color: #DC2626;
  margin-left: 2px;
}

.form-input,
.form-select,
.form-textarea {
  padding: 0.85rem 1rem;
  background: var(--cream-dark);
  border: 1.5px solid var(--bronze-pale);
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--ink);
  width: 100%;
  transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: #71717A;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--ink);
  background: var(--white);
  box-shadow: 0 0 0 3px rgba(10, 10, 12, 0.08);
}

.form-select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%230A0A0C' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.form-submit-row {
  margin-top: 0.5rem;
}

.btn-submit {
  width: 100%;
  padding: 1rem 2rem;
  background: var(--ink);
  color: var(--white);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.05em;
  border: 2px solid var(--ink);
  border-radius: var(--radius-sm);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  transition: background 0.25s, box-shadow 0.25s, transform 0.25s;
}

.btn-submit:hover {
  background: #000000;
  box-shadow: 5px 5px 0 var(--bronze-pale);
  transform: translate(-2px, -2px);
}

.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* CONFIRMATION */
.form-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem;
  gap: 1.5rem;
  background: var(--cream-dark);
  border: 1.5px solid var(--bronze-pale);
  border-radius: var(--radius-lg);
  animation: fadeRise 0.6s var(--ease-out-expo) both;
}

@keyframes fadeRise {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.success-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--ink);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: var(--white);
}

.form-success h3 {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--ink);
}

.form-success p {
  color: #18181B;
  font-weight: 500;
  max-width: 320px;
  line-height: 1.65;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .contact-page {
    grid-template-columns: 1fr;
  }

  .contact-left {
    padding: 4rem 2rem;
    min-height: 340px;
  }

  .contact-right {
    padding: 3rem 2rem;
  }
}

@media (max-width: 560px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}
`;
fs.writeFileSync(path.join(root, 'src/styles/contact.css'), contactCss, 'utf8');
console.log('9. contact.css written');

// 10. projects.css
const projectsCss = `/* ===== PROJECTS PAGE ===== */

/* PAGE HERO */
.projects-hero {
  padding-top: calc(72px + 5rem);
  padding-bottom: 5rem;
  background: var(--cream-dark);
  position: relative;
  overflow: hidden;
}

.projects-hero h1 {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.08;
  color: var(--ink);
  max-width: 700px;
  margin-bottom: 1.5rem;
}

.projects-hero p {
  font-size: 1.05rem;
  font-weight: 500;
  color: #18181B;
  max-width: 520px;
  line-height: 1.7;
}

/* SOLUTIONS DETAIL */
.solutions-detail {
  background: var(--cream);
}

.solutions-detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.solution-detail-card {
  border: 1.5px solid var(--bronze-pale);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: border-color 0.3s, transform 0.3s;
}

.solution-detail-card:hover {
  border-color: var(--ink);
  transform: translateY(-4px);
}

.solution-card-top {
  background: var(--ink);
  padding: 3rem 2.5rem;
  position: relative;
  overflow: hidden;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.solution-card-top-bg {
  position: absolute;
  inset: 0;
  opacity: 0.05;
  background: repeating-linear-gradient(
    45deg,
    #FFFFFF 0px,
    #FFFFFF 1px,
    transparent 1px,
    transparent 20px
  );
}

.solution-card-badge {
  display: inline-block;
  background: var(--white);
  color: var(--ink);
  font-family: var(--font-display);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 0.3rem 0.8rem;
  border-radius: 3px;
  margin-bottom: 1rem;
  position: relative;
}

.solution-card-top h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--white);
  position: relative;
}

.solution-card-body {
  padding: 2rem 2.5rem;
  background: var(--cream);
}

.solution-card-body p {
  font-size: 0.95rem;
  font-weight: 500;
  color: #0A0A0C;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.solution-specs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--bronze-pale);
}

.spec-item {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.spec-label {
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #18181B;
}

.spec-val {
  font-family: var(--font-display);
  font-size: 0.98rem;
  font-weight: 800;
  color: var(--ink);
}

.solution-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
}

.solution-features li {
  font-size: 0.92rem;
  font-weight: 600;
  color: #0A0A0C;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.solution-features li::before {
  content: '✓';
  font-weight: 800;
  color: var(--ink);
  font-size: 0.85rem;
}

/* PROJECT <70 SECTION */
.project70-deepdive {
  background: var(--ink);
  position: relative;
  overflow: hidden;
}

.p70-header {
  text-align: center;
  max-width: 680px;
  margin-inline: auto;
  margin-bottom: 4rem;
}

.p70-header .badge-tag {
  background: var(--white);
  color: var(--ink);
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

.p70-header h2 {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 800;
  color: var(--white);
  margin-bottom: 1rem;
}

.p70-header p {
  color: #F4F4F5;
  font-size: 1.05rem;
  font-weight: 500;
  max-width: 580px;
  margin-inline: auto;
  line-height: 1.7;
}

.p70-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5px;
  background: var(--ink-soft);
  border: 1.5px solid var(--ink-soft);
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-bottom: 4rem;
}

.p70-step {
  background: var(--ink);
  padding: 2rem;
  position: relative;
}

.p70-step::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--white);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s var(--ease-out-expo);
}

.p70-step:hover::before {
  transform: scaleX(1);
}

.p70-step-num {
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #FFFFFF;
  margin-bottom: 1rem;
}

.p70-step h4 {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--white);
  margin-bottom: 0.5rem;
}

.p70-step p {
  font-size: 0.88rem;
  font-weight: 500;
  color: #F4F4F5;
  line-height: 1.6;
}

/* USE CASES GRID */
.use-cases {
  background: var(--cream-dark);
}

.use-cases-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.use-cases-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.use-case-item {
  background: var(--cream);
  border: 1px solid var(--bronze-pale);
  border-radius: var(--radius-md);
  padding: 1.75rem 1.5rem;
  transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
  cursor: default;
}

.use-case-item:hover {
  border-color: var(--ink);
  box-shadow: 5px 5px 0 var(--bronze-pale);
  transform: translate(-3px, -3px);
}

.use-case-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.use-case-title {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 800;
  color: var(--ink);
  margin-bottom: 0.4rem;
}

.use-case-desc {
  font-size: 0.85rem;
  font-weight: 500;
  color: #18181B;
  line-height: 1.55;
}

/* FAQ ACCORDION */
.faq-section {
  background: var(--cream);
}

.faq-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.faq-list {
  max-width: 780px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid var(--bronze-pale);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.faq-item {
  border-bottom: 1px solid var(--bronze-pale);
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-question {
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: transparent;
  text-align: left;
  font-family: var(--font-display);
  font-size: 0.98rem;
  font-weight: 700;
  color: var(--ink);
  transition: background 0.2s, color 0.2s;
}

.faq-question:hover {
  background: var(--cream-dark);
  color: var(--ink);
}

.faq-question.open {
  background: var(--cream-dark);
  color: var(--ink);
}

.faq-icon {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border: 2px solid var(--bronze-pale);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: var(--ink);
  transition: transform 0.3s var(--ease-out-expo), border-color 0.2s;
}

.faq-question.open .faq-icon {
  transform: rotate(45deg);
  border-color: var(--ink);
}

.faq-answer {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.4s var(--ease-out-expo);
}

.faq-answer.open {
  max-height: 300px;
}

.faq-answer-inner {
  padding: 0 2rem 1.5rem;
  font-size: 0.92rem;
  font-weight: 500;
  color: #18181B;
  line-height: 1.75;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .p70-steps { grid-template-columns: repeat(2, 1fr); }
  .use-cases-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .solutions-detail-grid { grid-template-columns: 1fr; }
}

@media (max-width: 560px) {
  .use-cases-grid { grid-template-columns: 1fr; }
  .p70-steps { grid-template-columns: 1fr; }
}

/* ===== DEDICATED PROJECT DETAIL SUB-PAGE ===== */
.project-detail-page {
  background-color: var(--cream);
  color: var(--ink);
  min-height: 100vh;
}

.project-detail-page h1,
.project-detail-page h2,
.project-detail-page h3 {
  color: var(--ink) !important;
}

.project-detail-page p {
  color: #18181B !important;
  font-weight: 500;
}

.project-detail-hero {
  background: var(--cream-dark);
  border-bottom: 1px solid var(--bronze-pale);
  padding-top: clamp(6rem, 10vw, 9rem);
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-display);
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--ink);
  background: var(--cream);
  border: 1px solid var(--bronze-pale);
  padding: 0.5rem 1.2rem;
  border-radius: 100px;
  text-decoration: none;
  transition: all 0.25s ease;
}

.back-link:hover {
  transform: translateX(-4px);
  background: var(--ink);
  color: #FFFFFF;
}

.project-detail-subtitle {
  font-size: 1.2rem;
  font-weight: 500;
  color: #18181B !important;
  max-width: 780px;
  line-height: 1.7;
  margin-top: 1.25rem;
}

.project-overview-sec {
  background: var(--cream) !important;
  border-bottom: 1px solid var(--bronze-pale);
}

.project-overview-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 3rem;
  align-items: center;
}

.overview-icon {
  font-size: 3.5rem;
  display: inline-block;
  margin-bottom: 1rem;
}

.overview-text-block h2 {
  font-family: var(--font-display);
  font-size: 2.2rem;
  color: var(--ink) !important;
  margin-bottom: 1rem;
}

.overview-text-block p {
  color: #18181B !important;
  font-weight: 500;
  line-height: 1.8;
  font-size: 1.05rem;
}

.overview-stat-card {
  background: var(--cream-dark);
  border: 1.5px solid var(--bronze-pale);
  border-radius: var(--radius-lg);
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
}

.overview-stat-metric {
  font-family: var(--font-display);
  font-size: 2.4rem;
  font-weight: 800;
  color: var(--ink);
  margin-bottom: 0.5rem;
}

.overview-stat-desc {
  font-size: 0.95rem;
  color: var(--ink) !important;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.overview-pill-list {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  align-items: center;
}

.overview-pill-list span {
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--ink);
  background: var(--cream);
  border: 1px solid var(--bronze-pale);
  padding: 0.45rem 1.2rem;
  border-radius: 100px;
  width: 100%;
  max-width: 280px;
}

.project-specs-sec {
  background: var(--cream);
  border-bottom: 1px solid var(--bronze-pale);
}

.detail-specs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.detail-spec-card {
  background: var(--cream-dark);
  border: 1px solid var(--bronze-pale);
  padding: 1.75rem;
  border-radius: var(--radius-md);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
}

.detail-spec-lbl {
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #18181B;
  margin-bottom: 0.5rem;
}

.detail-spec-val {
  font-size: 1.05rem;
  color: var(--ink) !important;
  font-weight: 700;
  line-height: 1.5;
}

.project-impact-sec {
  background: var(--cream-dark) !important;
  border-bottom: 1px solid var(--bronze-pale);
}

.detail-impact-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.detail-impact-card {
  background: var(--cream);
  border: 1.5px solid var(--bronze-pale);
  padding: 2.25rem 1.5rem;
  border-radius: var(--radius-md);
  text-align: center;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.03);
}

.detail-impact-num {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--ink);
  margin-bottom: 0.5rem;
}

.detail-impact-lbl {
  font-size: 0.95rem;
  color: #0A0A0C !important;
  line-height: 1.5;
  font-weight: 600;
}

.project-custom-sec {
  background: var(--cream);
  border-bottom: 1px solid var(--bronze-pale);
}

.custom-options-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.custom-option-card {
  background: var(--cream-dark);
  border: 1px solid var(--bronze-pale);
  padding: 2.25rem 2rem;
  border-radius: var(--radius-md);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
}

.custom-option-num {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--ink);
  margin-bottom: 1rem;
}

.custom-option-card h3 {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--ink) !important;
  margin-bottom: 0.75rem;
}

.custom-option-card p {
  font-size: 0.95rem;
  color: #18181B !important;
  font-weight: 500;
  line-height: 1.65;
}

/* Inquiry Box */
.project-inquiry-sec {
  background: var(--cream-dark) !important;
}

.inquiry-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;
  background: var(--cream);
  border: 1.5px solid var(--bronze-pale);
  border-radius: var(--radius-lg);
  padding: 3.5rem 3rem;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.04);
}

.inquiry-left h2 {
  font-family: var(--font-display);
  font-size: 2.4rem;
  color: var(--ink) !important;
  margin-top: 0.75rem;
  margin-bottom: 1rem;
}

.inquiry-left p {
  color: #18181B !important;
  font-size: 1.02rem;
  font-weight: 500;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.inquiry-features {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  font-size: 0.95rem;
  color: var(--ink) !important;
  font-weight: 600;
}

.inquiry-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.form-group label {
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink);
}

.form-group input,
.form-group select {
  background: var(--cream-dark);
  border: 1px solid var(--bronze-pale);
  padding: 0.85rem 1.1rem;
  border-radius: var(--radius-sm);
  color: var(--ink);
  font-family: inherit;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form-group input:focus,
.form-group select:focus {
  border-color: var(--ink);
  box-shadow: 0 0 0 3px rgba(10, 10, 12, 0.08);
}

.inquiry-success {
  text-align: center;
  padding: 2rem 1rem;
}

.success-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.inquiry-success h3 {
  font-family: var(--font-display);
  font-size: 1.6rem;
  color: var(--ink) !important;
  margin-bottom: 0.75rem;
}

.inquiry-success p {
  color: #18181B !important;
  font-weight: 500;
  font-size: 0.95rem;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .project-overview-grid,
  .inquiry-box {
    grid-template-columns: 1fr;
  }
  .detail-impact-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .custom-options-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .detail-specs-grid,
  .detail-impact-grid {
    grid-template-columns: 1fr;
  }
}

/* ===== PROJECT DETAIL MODAL ===== */
.project-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  animation: fadeInModal 0.3s var(--ease-out-expo);
}

@keyframes fadeInModal {
  from { opacity: 0; }
  to { opacity: 1; }
}

.project-modal-card {
  background: #121215;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-lg);
  width: 100%;
  max-width: 860px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7);
  animation: slideUpModal 0.35s var(--ease-out-expo);
  position: relative;
}

@keyframes slideUpModal {
  from { transform: translateY(30px) scale(0.96); opacity: 0; }
  to { transform: translateY(0) scale(1); opacity: 1; }
}

.project-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: #18181B;
}

.project-modal-badge {
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #FFFFFF;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
}

.project-modal-close {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.project-modal-close:hover {
  background: #FFFFFF;
  color: #000000;
}

.project-modal-body {
  padding: 2rem;
  overflow-y: auto;
  flex: 1;
}

.project-modal-hero {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-hero-icon {
  font-size: 3rem;
  width: 72px;
  height: 72px;
  background: rgba(255, 255, 255, 0.08);
  border: 1.5px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.modal-hero-text h2 {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 800;
  color: #FFFFFF;
  line-height: 1.2;
  margin-bottom: 0.5rem;
}

.modal-hero-text p {
  color: #F4F4F5;
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.6;
}

.project-modal-tabs {
  display: flex;
  gap: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 1.5rem;
}

.modal-tab-btn {
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  padding: 0.65rem 1.25rem;
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: all 0.2s;
}

.modal-tab-btn.active {
  color: #FFFFFF;
  border-bottom-color: #FFFFFF;
}

.modal-tab-btn:hover {
  color: #FFFFFF;
}

.modal-specs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.modal-spec-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 1.25rem;
  border-radius: var(--radius-sm);
}

.modal-spec-label {
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #E4E4E7;
  margin-bottom: 0.25rem;
}

.modal-spec-val {
  font-size: 0.95rem;
  font-weight: 600;
  color: #FFFFFF;
  line-height: 1.4;
}

.modal-impact-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.modal-impact-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 1.5rem;
  border-radius: var(--radius-md);
  text-align: center;
}

.modal-impact-stat {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 0.25rem;
}

.modal-impact-desc {
  font-size: 0.88rem;
  font-weight: 500;
  color: #F4F4F5;
}

.modal-custom-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.modal-custom-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.9rem 1.25rem;
  border-radius: var(--radius-sm);
  color: #FFFFFF;
  font-size: 0.92rem;
  font-weight: 500;
}

.modal-custom-icon {
  color: #FFFFFF;
  font-weight: bold;
}

.project-modal-footer {
  padding: 1.25rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: #18181B;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.modal-footer-info {
  font-size: 0.85rem;
  font-weight: 500;
  color: #E4E4E7;
}

@media (max-width: 640px) {
  .modal-specs-grid,
  .modal-impact-grid {
    grid-template-columns: 1fr;
  }
  .project-modal-hero {
    flex-direction: column;
  }
  .project-modal-footer {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }
}
`;
fs.writeFileSync(path.join(root, 'src/styles/projects.css'), projectsCss, 'utf8');
console.log('10. projects.css written with high-contrast card text');

console.log('ALL FILES UPDATED WITH CRISP, HIGH-CONTRAST CARD TEXT!');
