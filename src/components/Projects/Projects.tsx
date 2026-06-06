import React from 'react';
import styles from './Projects.module.css';
import { projects } from '../../data';

const tagClass: Record<string, string> = {
  blue: styles.tagBlue,
  green: styles.tagGreen,
  purple: styles.tagPurple,
  red: styles.tagRed,
  yellow: styles.tagYellow,
};

const Projects: React.FC = () => (
  <section className={styles.section} id="proyek">
    <div className={styles.inner}>
      <div className={`${styles.header} reveal`}>
        <div className="section-tag">Proyek</div>
        <h2 className="section-title">Karya Pilihan</h2>
        <p className="section-desc">
          Beberapa proyek yang paling saya banggakan dari ide awal hingga
          produk yang digunakan ribuan pengguna.
        </p>
      </div>

      <div className={styles.grid}>
        {projects.map((p, i) => (
          <a
            key={p.title}
            href={p.href}
            className={`${styles.card} ${p.featured ? styles.cardFeatured : ''} reveal reveal-delay-${i}`}
          >
            <div className={styles.thumb}>
              <div className={`${styles.thumbBg} ${p.bgClass}`} />
              <div className={styles.thumbText}>{p.initials}</div>
            </div>
            <div className={styles.info}>
              <div className={styles.tags}>
                {p.tags.map((t) => (
                  <span key={t.label} className={`${styles.tag} ${tagClass[t.color]}`}>
                    {t.label}
                  </span>
                ))}
              </div>
              <div className={styles.title}>{p.title}</div>
              <p className={styles.desc}>{p.description}</p>
              <div className={styles.link}>Lihat Proyek</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
