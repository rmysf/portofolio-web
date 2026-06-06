import React from 'react';
import styles from './Experience.module.css';
import { experiences } from '../../data';

const Experience: React.FC = () => (
  <section className={styles.section} id="pengalaman">
    <div className={styles.inner}>
      <div className={`${styles.header} reveal`}>
        <div className="section-tag">Pengalaman</div>
        <h2 className="section-title">Perjalanan Karir</h2>
        <p className="section-desc">
          Pengalaman organisasi dan kegiatan yang membentuk kemampuan kolaborasi dan dokumentasi saya.
        </p>
      </div>

      <div className={styles.list}>
        {experiences.map((exp, i) => (
          <div key={exp.title} className={`${styles.item} reveal reveal-delay-${i}`}>
            <div className={styles.period}>{exp.period}</div>
            <div>
              <div className={styles.title}>{exp.title}</div>
              <div className={styles.company}>{exp.company}</div>
              <p className={styles.desc}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;