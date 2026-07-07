import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { navLinks } from '../../data';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#beranda');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ids = ['beranda', ...navLinks.map((l) => l.href.replace('#', '')), 'footer-contact'];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
      setActiveHref(href);
    }
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <a href="#home" className={styles.logo} onClick={(e) => handleNavClick(e, '#home')}>
          Rama<span>.</span>
        </a>

        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={activeHref === link.href ? styles.active : ''} onClick={(e) => handleNavClick(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#footer-contact" className={styles.cta} onClick={(e) => handleNavClick(e, '#footer-contact')}>
          Contact Me
        </a>

        <button className={styles.toggle} onClick={() => setMenuOpen((prev) => !prev)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      <div className={`${styles.drawer} ${menuOpen ? styles.open : ''}`} role="navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className={`${styles.drawerLink} ${activeHref === link.href ? styles.active : ''}`} onClick={(e) => handleNavClick(e, link.href)}>
            {link.label}
          </a>
        ))}
        <a href="#footer-contact" className={styles.drawerCta} onClick={(e) => handleNavClick(e, '#footer-contact')}>
          Contact Me
        </a>
      </div>
    </>
  );
};
// rmysf
export default Navbar;