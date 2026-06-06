import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.copy}>© 2025 Arya Pratama. Dibuat dengan ❤️ di Jakarta.</div>
    <div className={styles.links}>
      <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
    </div>
  </footer>
);

export default Footer;
