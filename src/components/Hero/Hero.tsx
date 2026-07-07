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
      <section className={styles.hero} id="home">

        <div className={styles.threeCol}>

          {/* LEFT — name */}
          <div className={styles.leftCol}>
            <h1 className={styles.title}>
              Mohammad<br />
              <span className={styles.titleMuted}>Rama</span><br />
              <span className={styles.titleAccent}>Yusuf.</span>
            </h1>

            <div className={styles.actions}>
              <a href="#project" className={styles.btnPrimary}>
                View Projects →
              </a>
            </div>
          </div>

          {/* MIDDLE — Lanyard 3D */}
          <div className={styles.middleCol}>
              <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]}/>
          </div>

          {/* RIGHT — description */}
          <div className={styles.rightCol}>
            <p className={styles.desc}>
              Hi, I'm a Front-End Developer (Web &amp; Mobile).
              I focus on building apps and website with Flutter and Flask
              from UI/UX design in Figma, basic backend with REST API and MySQL,
              to AI integrations like CNN, YOLO, and OCR.
            </p>
          </div>

        </div>

       
        

      </section>
    </>
  );
};

export default Hero;