import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <section className={styles.section} id="kontak">
      <div className={`${styles.wrap} reveal`}>
        <div>
          <div className="section-tag">Kontak</div>
          <h2 className={styles.title}>
            Mari Buat Sesuatu yang <span>Luar Biasa</span> Bersama.
          </h2>
          <p className={styles.desc}>
            Punya proyek menarik? Butuh developer untuk tim Anda? Atau sekadar ingin ngobrol
            tentang teknologi? Pintu saya selalu terbuka.
          </p>
          <div className={styles.links}>
            <a href="mailto:arya@pratama.dev" className={styles.link}>
              <span className={styles.linkIcon}>✉</span>
              arya@pratama.dev
            </a>
            <a href="https://linkedin.com" className={styles.link} target="_blank" rel="noreferrer">
              <span className={styles.linkIcon}>in</span>
              linkedin.com/in/aryapratama
            </a>
            <a href="https://github.com" className={styles.link} target="_blank" rel="noreferrer">
              <span className={styles.linkIcon}>⌥</span>
              github.com/aryapratama
            </a>
            <a href="https://twitter.com" className={styles.link} target="_blank" rel="noreferrer">
              <span className={styles.linkIcon}>𝕏</span>
              @aryapratama_dev
            </a>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Nama</label>
            <input type="text" className={styles.input} placeholder="Nama lengkap Anda" required />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <input type="email" className={styles.input} placeholder="email@anda.com" required />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Pesan</label>
            <textarea className={styles.textarea} placeholder="Ceritakan tentang proyek Anda..." required />
          </div>
          <button
            type="submit"
            className={`${styles.submit} ${sent ? styles.submitSent : ''}`}
          >
            {sent ? 'Terkirim ✓' : 'Kirim Pesan →'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
