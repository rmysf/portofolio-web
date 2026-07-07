import React from 'react';
import styles from './Experience.module.css';
import { experiences } from '../../data';

const Experience: React.FC = () => (
  <section className={styles.section} id="experience">
    <div className={styles.inner}>
      <div className={`${styles.header} reveal`}>
        <div className="section-tag">Experience</div>
        <h2 className="section-title">Career Journey</h2>
        <p className="section-desc">
          Organizational experience and activities that shaped my collaboration and documentation skills.
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