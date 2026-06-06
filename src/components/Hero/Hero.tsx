'use client';

import React from 'react';
import styles from './Hero.module.css';
import { /* hapus stats, sisakan yang lain */ } from '../../data';
import Lanyard from './Lanyard';

const Hero: React.FC = () => {
  return (
    <>
      <div className={styles.bg} />
      <div className={styles.grid} />
      <section className={styles.hero} id="beranda">

        <div className={styles.threeCol}>

          {/* LEFT — nama */}
          <div className={styles.leftCol}>
            <h1 className={styles.title}>
              Mohammad<br />
              <span className={styles.titleMuted}>Rama</span><br />
              <span className={styles.titleAccent}>Yusuf.</span>
            </h1>

            <div className={styles.actions}>
              <a href="#proyek" className={styles.btnPrimary}>
                Lihat Proyek →
              </a>
              <a href="#kontak" className={styles.btnSecondary}>
                Hubungi Saya
              </a>
            </div>
          </div>

          {/* MIDDLE — Lanyard 3D */}
          <div className={styles.middleCol}>
              <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]}/>
          </div>

          {/* RIGHT — deskripsi */}
          <div className={styles.rightCol}>
            <p className={styles.desc}>
              Halo, saya seorang Full Stack Developer &amp; UI Designer
              berbasis di Jakarta. Saya mengubah ide menjadi produk digital
              yang fungsional dan indah.
            </p>
          </div>

        </div>

       
        

      </section>
    </>
  );
};

export default Hero;