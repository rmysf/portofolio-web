import React, { useState } from 'react';
import styles from './Certificates.module.css';

interface Certificate {
  title: string;
  issuer: string;
  year: string;
  thumb: string;
  full: string;
}

const base = '/certificates-optimized';

const certificates: Certificate[] = [
  { title: 'Rana Fest VOL.II', issuer: 'Rana9', year: '2024', thumb: `${base}/Ranavest2-thumb.webp`, full: `${base}/Ranavest2-full.webp` },
  { title: 'Rana Fest VOL.III', issuer: 'Rana9', year: '2025', thumb: `${base}/Ranavest3-thumb.webp`, full: `${base}/Ranavest3-full.webp` },
  { title: 'Certificate of Completion', issuer: 'Huawei Talent', year: '2025', thumb: `${base}/_Computer Network-thumb.webp`, full: `${base}/_Computer Network-full.webp` },
  { title: 'Certificate of Completion', issuer: 'Huawei Talent', year: '2025', thumb: `${base}/Al Basic_ Overview of AI(CRA Training Program)-thumb.webp`, full: `${base}/Al Basic_ Overview of AI(CRA Training Program)-full.webp` },
  { title: 'Course Certificate', issuer: 'Huawei Talent', year: '2024', thumb: `${base}/Algorithm and Program Design-thumb.webp`, full: `${base}/Algorithm and Program Design-full.webp` },
  { title: 'Huawei ICT Academy', issuer: 'Huawei Talent', year: '2025', thumb: `${base}/Cloud Advanced_ Architecture and Technologies-thumb.webp`, full: `${base}/Cloud Advanced_ Architecture and Technologies-full.webp` },
  { title: 'Huawei ICT Academy', issuer: 'Huawei Talent', year: '2026', thumb: `${base}/Cloud Basics_ Development and Basic Concepts(CRA Training Program)-thumb.webp`, full: `${base}/Cloud Basics_ Development and Basic Concepts(CRA Training Program)-full.webp` },
  { title: 'Certificate of Completion', issuer: 'Huawei Talent', year: '2025', thumb: `${base}/Computer Network-thumb.webp`, full: `${base}/Computer Network-full.webp` },
  { title: 'Certificate of Completion', issuer: 'Huawei Talent', year: '2025', thumb: `${base}/Computer Networks(CRA Training Program)-thumb.webp`, full: `${base}/Computer Networks(CRA Training Program)-full.webp` },
  { title: 'Huawei ICT Academy', issuer: 'Huawei Talent', year: '2025', thumb: `${base}/Data Management and Analysis(CRA Training Program)-thumb.webp`, full: `${base}/Data Management and Analysis(CRA Training Program)-full.webp` },
  { title: 'Huawei ICT Academy', issuer: 'Huawei Talent', year: '2025', thumb: `${base}/Data Management and Analytics-thumb.webp`, full: `${base}/Data Management and Analytics-full.webp` },
  { title: 'Huawei ICT Academy', issuer: 'Huawei Talent', year: '2026', thumb: `${base}/Development and Basic Concepts of Cloud Computing-thumb.webp`, full: `${base}/Development and Basic Concepts of Cloud Computing-full.webp` },
  { title: 'Huawei ICT Academy', issuer: 'Huawei Talent', year: '2026', thumb: `${base}/General Knowledge of Computer Networks-thumb.webp`, full: `${base}/General Knowledge of Computer Networks-full.webp` },
  { title: 'Huawei ICT Academy', issuer: 'Huawei Talent', year: '2025', thumb: `${base}/HCIA-Big Data V3.5 Course-thumb.webp`, full: `${base}/HCIA-Big Data V3.5 Course-full.webp` },
  { title: 'Huawei ICT Academy', issuer: 'Huawei Talent', year: '2025', thumb: `${base}/HCIA-Big Data V3.5 Course（Colombia Training Program）-thumb.webp`, full: `${base}/HCIA-Big Data V3.5 Course（Colombia Training Program）-full.webp` },
  { title: 'Course Certificate', issuer: 'Huawei Talent', year: '2024', thumb: `${base}/Math Basics-thumb.webp`, full: `${base}/Math Basics-full.webp` },
  { title: 'Certificate of Completion', issuer: 'Huawei Talent', year: '2025', thumb: `${base}/Overview of AI-thumb.webp`, full: `${base}/Overview of AI-full.webp` },
  { title: 'Course Certificate', issuer: 'Huawei Talent', year: '2024', thumb: `${base}/Python Programming Basics-thumb.webp`, full: `${base}/Python Programming Basics-full.webp` },
];

const PAGE_SIZE = 8;

const Certificates: React.FC = () => {
  const [page, setPage] = useState(0);
  const [active, setActive] = useState<Certificate | null>(null);

  const totalPages = Math.ceil(certificates.length / PAGE_SIZE);
  const start = page * PAGE_SIZE;
  const current = certificates.slice(start, start + PAGE_SIZE);

  return (
    <>
      <section className={styles.section} id="certificates">
        <div className={styles.inner}>

          <div className={`${styles.header} reveal`}>
            <div className="section-tag">Certificates</div>
            <h2 className="section-title">Certifications &amp; Awards</h2>
            <p className="section-desc">
              A selection of certificates I've earned throughout my studies and personal development.
            </p>
          </div>

          <div className={`${styles.grid} reveal reveal-delay-1`}>
            {current.map((cert, i) => (
              <div
                key={start + i}
                className={styles.card}
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <div className={styles.imageWrap}>
                  <img
                    src={cert.thumb}
                    alt={cert.title}
                    className={styles.image}
                    loading="lazy"
                    decoding="async"
                    width={500}
                    height={375}
                  />
                </div>
                <div className={styles.info}>
                  <div className={styles.certTitle}>{cert.title}</div>
                  <div className={styles.issuer}>{cert.issuer}</div>
                  <div className={styles.bottom}>
                    <span className={styles.year}>{cert.year}</span>
                    <button className={styles.lihat} onClick={() => setActive(cert)}>
                      View →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className={styles.pagination}>
              <button
                className={styles.navBtn}
                onClick={() => setPage((p) => p - 1)}
                disabled={page === 0}
              >
                ← Back
              </button>
              <span className={styles.pageInfo}>{page + 1} / {totalPages}</span>
              <button
                className={styles.navBtn}
                onClick={() => setPage((p) => p + 1)}
                disabled={page === totalPages - 1}
              >
                Next →
              </button>
            </div>
          )}

        </div>
      </section>

      {active && (
        <div className={styles.overlay} onClick={() => setActive(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.close} onClick={() => setActive(null)}>✕</button>
            <img src={active.full} alt={active.title} className={styles.modalImage} />
          </div>
        </div>
      )}
    </>
  );
};

export default Certificates;