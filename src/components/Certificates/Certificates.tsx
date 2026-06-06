import React, { useState } from 'react';
import styles from './Certificates.module.css';

interface Certificate {
  title: string;
  issuer: string;
  year: string;
  image: string;
}

const certificates: Certificate[] = [
  { title: 'Certificate of Completion', issuer: 'Huawei Talent', year: '2025', image: '/certificates/_Computer Network.png'},
  { title: 'Certificate of Completion', issuer: 'Huawei Talent', year: '2025', image: '/certificates/Al Basic_ Overview of AI(CRA Training Program).png'},
  { title: 'Course Certificate', issuer: 'Huawei Talent', year: '2024', image: '/certificates/Algorithm and Program Design.png'},
  { title: 'Huawei ICT Academy', issuer: 'Huawei Talent', year: '2025', image: '/certificates/Cloud Advanced_ Architecture and Technologies.png'},
  { title: 'Huawei ICT Academy', issuer: 'Huawei Talent', year: '2026', image: '/certificates/Cloud Basics_ Development and Basic Concepts(CRA Training Program).png'},
  { title: 'Certificate of Completion', issuer: 'Huawei Talent', year: '2025', image: '/certificates/Computer Network.png'},
  { title: 'Certificate of Completion', issuer: 'Huawei Talent', year: '2025', image: '/certificates/Computer Networks(CRA Training Program).png'},
  { title: 'Huawei ICT Academy', issuer: 'Huawei Talent', year: '2025', image: '/certificates/Data Management and Analysis(CRA Training Program).png'},
  { title: 'Huawei ICT Academy', issuer: 'Huawei Talent', year: '2025', image: '/certificates/Data Management and Analytics.png'},
  { title: 'Huawei ICT Academy', issuer: 'Huawei Talent', year: '2026', image: '/certificates/Development and Basic Concepts of Cloud Computing.png'},
  { title: 'Huawei ICT Academy', issuer: 'Huawei Talent', year: '2026', image: '/certificates/General Knowledge of Computer Networks.png'},
  { title: 'Huawei ICT Academy', issuer: 'Huawei Talent', year: '2025', image: '/certificates/HCIA-Big Data V3.5 Course.png'},
  { title: 'Huawei ICT Academy', issuer: 'Huawei Talent', year: '2025', image: '/certificates/HCIA-Big Data V3.5 Course（Colombia Training Program）.png'},
  { title: 'Course Certificate', issuer: 'Huawei Talent', year: '2024', image: '/certificates/Math Basics.png'},
  { title: 'Certificate of Completion', issuer: 'Huawei Talent', year: '2025', image: '/certificates/Overview of AI.png'},
  { title: 'Course Certificate', issuer: 'Huawei Talent', year: '2024', image: '/certificates/Python Programming Basics.png'},
  { title: 'Rana Fest VOL.II', issuer: 'Rana9', year: '2024', image: '/certificates/Ranavest2.jpeg'},
  { title: 'Rana Fest VOL.III', issuer: 'Rana9', year: '2025', image: '/certificates/Ranavest3.jpeg'},
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
      <section className={styles.section} id="sertifikat">
        <div className={styles.inner}>

          <div className={`${styles.header} reveal`}>
            <div className="section-tag">Sertifikat</div>
            <h2 className="section-title">Sertifikasi &amp; Penghargaan</h2>
            <p className="section-desc">
              Beberapa sertifikat yang pernah saya raih selama masa studi dan pengembangan diri.
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
                  <img src={cert.image} alt={cert.title} className={styles.image} />
                </div>
                <div className={styles.info}>
                  <div className={styles.certTitle}>{cert.title}</div>
                  <div className={styles.issuer}>{cert.issuer}</div>
                  <div className={styles.bottom}>
                    <span className={styles.year}>{cert.year}</span>
                    <button className={styles.lihat} onClick={() => setActive(cert)}>
                      Lihat →
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
            <img src={active.image} alt={active.title} className={styles.modalImage} />
          </div>
        </div>
      )}
    </>
  );
};

export default Certificates;