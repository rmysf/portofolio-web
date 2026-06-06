import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { navLinks } from '../../data';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <a href="#beranda" className={styles.logo} onClick={(e) => handleNavClick(e, '#beranda')}>
          Rama<span>.</span>
        </a>

        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#kontak" className={styles.cta} onClick={(e) => handleNavClick(e, '#kontak')}>
          Hubungi Saya
        </a>

        <button
          className={styles.toggle}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`${styles.drawer} ${menuOpen ? styles.open : ''}`} role="navigation">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.drawerLink}
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#kontak"
          className={styles.drawerCta}
          onClick={(e) => handleNavClick(e, '#kontak')}
        >
          Hubungi Saya
        </a>
      </div>
    </>
  );
};

export default Navbar;
