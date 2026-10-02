import { Link } from 'react-router-dom';
import '../styles/footer.css';

const MAZE_SVG = (
  <svg className="footer-maze-pattern" viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="60" height="60" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" />
    <rect x="30" y="30" width="20" height="20" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" />
    <line x1="70" y1="10" x2="130" y2="10" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" />
    <rect x="130" y="10" width="60" height="40" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" />
    <line x1="190" y1="10" x2="270" y2="10" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" />
    <rect x="220" y="10" width="50" height="70" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" />
    <line x1="10" y1="70" x2="10" y2="130" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" />
    <rect x="10" y="130" width="80" height="60" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" />
    <rect x="30" y="148" width="40" height="24" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" />
    <line x1="90" y1="130" x2="180" y2="130" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" />
    <rect x="140" y="80" width="60" height="50" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" />
    <line x1="200" y1="80" x2="270" y2="80" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" />
    <rect x="200" y="130" width="70" height="60" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" />
    <line x1="130" y1="50" x2="130" y2="130" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" />
    <line x1="180" y1="130" x2="200" y2="130" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" />
    <line x1="270" y1="80" x2="270" y2="190" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" />
    <line x1="10" y1="190" x2="270" y2="190" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer">
      {MAZE_SVG}

      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <img src="/logo-light.png" alt="PUZZLE BOXX" className="footer-logo-img" />
            <p className="footer-desc">
              Replacing single-use plastic with premium branded sustainable alternatives.
              One wrapper at a time.
            </p>
          </div>

          {/* Pages */}
          <div>
            <div className="footer-col-title">Navigate</div>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/our-story">Our Story</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Initiatives */}
          <div>
            <div className="footer-col-title">Initiatives</div>
            <ul className="footer-links">
              <li><Link to="/projects">Project &lt;70</Link></li>
              <li><Link to="/projects">Branded Cutlery</Link></li>
              <li><Link to="/projects">Chocolate Packaging</Link></li>
              <li><Link to="/projects">School Programs</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="footer-col-title">Connect</div>
            <ul className="footer-links">
              <li><Link to="/contact">Start Your Switch</Link></li>
              <li><a href="mailto:hello@puzzleboxx.in">hello@puzzleboxx.in</a></li>
              <li><a href="tel:+91-XXXXXXXXXX">+91 XXXXX XXXXX</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} PUZZLE BOXX. All rights reserved.
          </p>
          {/* <div className="footer-initiative">
s          </div> */}
        </div>
      </div>
    </footer>
  );
}
