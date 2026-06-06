import React from 'react';
import styles from './TechStack.module.css';
import { skills } from '../../data';

const skillIcons: Record<string, string> = {
  'React': 'https://cdn.simpleicons.org/react/61DAFB',
  'TypeScript': 'https://cdn.simpleicons.org/typescript/3178C6',
  'Flutter': 'https://cdn.simpleicons.org/flutter/02569B',
  'Dart': 'https://cdn.simpleicons.org/dart/0175C2',
  'HTML': 'https://cdn.simpleicons.org/html5/E34F26',
  'CSS': 'https://cdn.simpleicons.org/css/1572B6',              // fix
  'JavaScript': 'https://cdn.simpleicons.org/javascript/F7DF1E',
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',    // fix — pakai icon lain
  'Python': 'https://cdn.simpleicons.org/python/3776AB',
  'Laravel': 'https://cdn.simpleicons.org/laravel/FF2D20',
  'Flask': 'https://cdn.simpleicons.org/flask/FFFFFF',
  'Bootstrap': 'https://cdn.simpleicons.org/bootstrap/7952B3',
  'MySQL': 'https://cdn.simpleicons.org/mysql/4479A1',
  'MongoDB': 'https://cdn.simpleicons.org/mongodb/47A248',
  'Figma': 'https://cdn.simpleicons.org/figma/F24E1E',
  'Git': 'https://cdn.simpleicons.org/git/F05032',
  'GitHub': 'https://cdn.simpleicons.org/github/FFFFFF',
  'PHP': 'https://cdn.simpleicons.org/php/777BB4',              // tambahan
};

const TechStack: React.FC = () => (
  <section className={styles.section} id="techstack">
    <div className={styles.inner}>

      <div className={`${styles.header} reveal`}>
        <div className="section-tag">Tools & Teknologi</div>
        <h2 className={`section-title ${styles.title}`}>
          Tech Stack<br />
        </h2>
        <p className={styles.subtitle}>
          Bahasa, framework, dan tools yang saya gunakan.
        </p>
      </div>

      <div className={`${styles.grid} reveal reveal-delay-1`}>
        {skills.map((s, i) => (
          <div
            key={s.name}
            className={`${styles.card} ${s.accent ? styles.cardAccent : ''}`}
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <div className={styles.cardInner}>
              {skillIcons[s.name] && (
                <img
                  src={skillIcons[s.name]}
                  alt={s.name}
                  className={styles.icon}
                />
              )}
              <span className={styles.cardName}>{s.name}</span>
              {s.accent && <span className={styles.dot} />}
            </div>
          </div>
        ))}
      </div>

      
    </div>
  </section>
);

export default TechStack;