import React from 'react';
import styles from './TechStack.module.css';
import { skills } from '../../data';

const sqlIcon = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#4479A1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/></svg>'
)}`;

const skillIcons: Record<string, string> = {
  'Flutter': 'https://cdn.simpleicons.org/flutter/02569B',
  'Dart': 'https://cdn.simpleicons.org/dart/0175C2',
  'JavaScript': 'https://cdn.simpleicons.org/javascript/F7DF1E',
  'Python': 'https://cdn.simpleicons.org/python/3776AB',
  'PHP': 'https://cdn.simpleicons.org/php/777BB4',
  'HTML': 'https://cdn.simpleicons.org/html5/E34F26',
  'CSS': 'https://cdn.simpleicons.org/css/1572B6',
  'Bootstrap': 'https://cdn.simpleicons.org/bootstrap/7952B3',
  'Tailwind CSS': 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
  'Flask': 'https://cdn.simpleicons.org/flask/FFFFFF',
  'FastAPI': 'https://cdn.simpleicons.org/fastapi/009688',
  'MySQL': 'https://cdn.simpleicons.org/mysql/4479A1',
  'MongoDB': 'https://cdn.simpleicons.org/mongodb/47A248',
  'SQL': sqlIcon,
  'Figma': 'https://cdn.simpleicons.org/figma/F24E1E',
  'Git': 'https://cdn.simpleicons.org/git/F05032',
  'GitHub': 'https://cdn.simpleicons.org/github/FFFFFF',
  'Vercel': 'https://cdn.simpleicons.org/vercel/FFFFFF',
  'Postman': 'https://cdn.simpleicons.org/postman/FF6C37',
  'Unity': 'https://cdn.simpleicons.org/unity/FFFFFF',
  'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
};

const TechStack: React.FC = () => (
  <section className={styles.section} id="techstack">
    <div className={styles.inner}>

      <div className={`${styles.header} reveal`}>
        <div className="section-tag">Tools & Technologies</div>
        <h2 className={`section-title ${styles.title}`}>
          Tech Stack<br />
        </h2>
        <p className={styles.subtitle}>
          Languages, frameworks, and tools I use.
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
                  loading="lazy"
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