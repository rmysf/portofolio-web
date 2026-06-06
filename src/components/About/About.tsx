import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => (
  <section className={styles.section} id="tentang">
    <div className={styles.grid}>
      <div className={`${styles.imgWrap} reveal`}>
        <div className={styles.imgPlaceholder}>
          <div className={styles.avatar}>AP</div>
          <div className={styles.avatarName}>Arya Pratama</div>
          <div className={styles.avatarRole}>Full Stack Developer</div>
        </div>
        <div className={`${styles.floatTag} ${styles.tagLocation}`}>📍 Jakarta, Indonesia</div>
        <div className={`${styles.floatTag} ${styles.tagExp}`}>⚡ 5 Tahun Pengalaman</div>
      </div>

      <div className={`${styles.text} reveal reveal-delay-1`}>
        <div className="section-tag">Tentang Saya</div>
        <h2 className="section-title">Kode yang Bersih,<br />Desain yang Bermakna</h2>
        <p>
          Saya adalah seorang developer dengan passion di persimpangan antara engineering dan desain.
          Dengan 5+ tahun pengalaman, saya telah membangun berbagai produk mulai dari startup tahap
          awal hingga platform enterprise skala besar.
        </p>
        <p>
          Saya percaya bahwa perangkat lunak yang baik bukan hanya soal kode yang bekerja — tapi
          tentang pengalaman yang dirasakan pengguna setiap kali mereka berinteraksi dengannya.
        </p>
      </div>
    </div>
    <div className={`${styles.divider} reveal`} />
  </section>
);

export default About;
