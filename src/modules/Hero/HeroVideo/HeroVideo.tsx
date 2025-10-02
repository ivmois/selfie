import styles from "./hero-video.module.sass";

export const HeroVideo = () => {
  return (
    <video className={styles.video} autoPlay playsInline muted loop>
      <source src="assets/hero-video/main-2.webm" type="video/webm" />
      <source src="assets/hero-video/main-2.mp4" type="video/mp4" />
    </video>
  );
};
