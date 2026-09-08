import { useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import '../styles/nav.css';

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/our-story', label: 'Our Story' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const navRef = useRef(null);
  const drawerRef = useRef(null);
  const hamRef = useRef(null);
  const openRef = useRef(false);

  // Scroll-based class
  useEffect(() => {
    const handler = () => {
      if (navRef.current) {
        navRef.current.classList.toggle('scrolled', window.scrollY > 20);
      }
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Intro animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -80,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.1,
      });
    });
    return () => ctx.revert();
  }, []);

  const toggleDrawer = () => {
    openRef.current = !openRef.current;
    const open = openRef.current;
    hamRef.current?.classList.toggle('open', open);
    drawerRef.current?.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  const closeDrawer = () => {
    openRef.current = false;
    hamRef.current?.classList.remove('open');
    drawerRef.current?.classList.remove('open');
    document.body.style.overflow = '';
  };

  return (
    <>
      <header className="site-header navbar" ref={navRef}>
        <Link to="/" className="nav-logo" onClick={closeDrawer}>
          <img src="/logo-light.png" alt="PUZZLE BOXX — Innovation | Creation | Customization" className="nav-logo-img" />
        </Link>

        <ul className="nav-links">
          {NAV_LINKS.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="btn-primary nav-cta" style={{ fontSize: '0.82rem', padding: '0.6rem 1.4rem' }}>
          Start Your Switch →
        </Link>

        <button
          className="nav-hamburger"
          ref={hamRef}
          onClick={toggleDrawer}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Mobile Drawer */}
      <div className="nav-drawer" ref={drawerRef}>
        {NAV_LINKS.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            onClick={closeDrawer}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </>
  );
}
