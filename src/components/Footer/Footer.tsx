import React from 'react';
import styles from './Footer.module.css';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.42 0 12.11c0 5.35 3.44 9.88 8.21 11.48.6.11.82-.26.82-.58 0-.29-.01-1.06-.02-2.08-3.34.73-4.04-1.62-4.04-1.62-.55-1.4-1.34-1.78-1.34-1.78-1.1-.75.08-.73.08-.73 1.21.09 1.85 1.25 1.85 1.25 1.08 1.86 2.83 1.32 3.52 1.01.11-.79.42-1.32.77-1.63-2.67-.31-5.47-1.36-5.47-6.03 0-1.33.47-2.42 1.24-3.28-.12-.31-.54-1.56.12-3.25 0 0 1.01-.33 3.3 1.25a11.4 11.4 0 0 1 3-.41c1.02 0 2.04.14 3 .41 2.29-1.58 3.3-1.25 3.3-1.25.66 1.69.24 2.94.12 3.25.77.86 1.24 1.95 1.24 3.28 0 4.68-2.8 5.72-5.48 6.02.43.38.81 1.13.81 2.28 0 1.65-.01 2.98-.01 3.38 0 .32.21.7.83.58C20.57 21.98 24 17.46 24 12.11 24 5.42 18.63 0 12 0Z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.44v6.3ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Footer: React.FC = () => (
  <footer className={styles.footer} id="footer-contact">
    <div className={styles.glow} />

    <div className={styles.inner}>
      <div className={styles.top}>
        <div className={styles.cta}>
          <div className="section-tag">Get In Touch</div>
          <h2 className={styles.title}>
            Let's Build Something <span className={styles.accent}>Great</span> Together.
          </h2>
          <p className={styles.desc}>
            Have an interesting project or need a developer for your team?
            Feel free to reach out to me.
          </p>
          <a
            href="https://wa.me/6283842686012"
            target="_blank"
            rel="noreferrer"
            className={styles.ctaBtn}>
          
            Contact Me →
          </a>
        </div>

        <div className={styles.columns}>
          <div className={styles.col}>
            <div className={styles.colTitle}>Contact</div>
            <a href="mailto:mramayusuf2@gmail.com" className={styles.socialLink}>
              <span className={styles.iconWrap}><MailIcon /></span>
              <span>mramayusuf2@gmail.com</span>
            </a>
            <a href="https://wa.me/6283842686012" className={styles.socialLink}>
              <span className={styles.iconWrap}><PhoneIcon /></span>
              <span>+62 838-4268-6012</span>
            </a>
            <div className={styles.socialLink}>
              <span className={styles.iconWrap}><PinIcon /></span>
              <span>Tegal, Central Java, Indonesia</span>
            </div>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>Elsewhere</div>
            <a href="https://github.com/rmysf" target="_blank" rel="noreferrer" className={styles.socialLink}>
              <span className={styles.iconWrap}><GithubIcon /></span>
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/mohammad-rama-yusuf-b216a72b6?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className={styles.socialLink}>
              <span className={styles.iconWrap}><LinkedinIcon /></span>
              <span>LinkedIn</span>
            </a>
            <a href="https://instagram.com/ramysf_" target="_blank" rel="noreferrer" className={styles.socialLink}>
              <span className={styles.iconWrap}><InstagramIcon /></span>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.bottom}>
        <span className={styles.copy}>© {new Date().getFullYear()} Mohammad Rama Yusuf. All rights reserved.</span>
      </div>
    </div>
  </footer>
);

export default Footer;