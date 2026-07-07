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
  <section className={styles.section} id="project">
    <div className={styles.inner}>
      <div className={`${styles.header} reveal`}>
        <div className="section-tag">Project</div>
        <h2 className="section-title">Some Things I've Built</h2>
      </div>

      <div className={styles.grid}>
        {projects.map((p, i) => (
          <div
            key={p.title}
            className={`${styles.card} ${p.featured ? styles.cardFeatured : ''} reveal reveal-delay-${i}`}
          >
            <div className={styles.thumb}>
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  className={styles.thumbImg}
                  loading="lazy"
                />
              ) : (
                <>
                  <div className={`${styles.thumbBg} ${p.bgClass}`} />
                  <div className={styles.thumbText}>{p.initials}</div>
                </>
              )}
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
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;