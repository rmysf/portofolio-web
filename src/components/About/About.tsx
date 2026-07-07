import React from 'react';
import styles from './About.module.css';
import ProfileCard from '../ProfileCard/ProfileCard';
import avatarPhoto from '../../images/Rama.png'; // ganti sesuai nama file fotomu

const About: React.FC = () => (
  <section className={styles.section} id="about">
    <div className={styles.grid}>
      <div className={`${styles.imgWrap} reveal`}>
        <ProfileCard
          name="Mohammad Rama Yusuf"
          title="Front-End Developer (Web & Mobile)"
          handle="ramayusuf"
          status="Online"
          contactText="Contact Me"
          avatarUrl={avatarPhoto}
          showUserInfo={false}
          enableTilt={true}
          enableMobileTilt
          onContactClick={() => console.log('Contact clicked')}
          behindGlowColor="rgba(125, 190, 255, 0.67)"
          behindGlowEnabled
          innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
        />
      </div>

      <div className={`${styles.text} reveal reveal-delay-1`}>
        <div className="section-tag">About Me</div>
        <h2 className="section-title">Curious, Driven,<br />Always Building</h2>
        <p>
          I'm a 6th-semester Informatics Engineering student focused on
          Front-End Web and Mobile development using Flutter and frameworks
          like Flask. I like designing the UI/UX flow in Figma first before
          moving into code, so the final result truly matches user needs.
        </p>
        <p>
          Beyond front-end, I also have basic backend skills such as
          building REST APIs and managing MySQL databases, along with
          experience integrating AI like Deep Learning (CNN), YOLO, and OCR
          into web and mobile apps. I'm also active on campus as a
          documentation team coordinator.
        </p>
      </div>
    </div>
    <div className={`${styles.divider} reveal`} />
  </section>
);

export default About;