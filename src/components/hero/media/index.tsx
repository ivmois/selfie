import styles from './media.module.sass';

const Media = () => {
  return (
    <video className={styles.video} autoPlay playsInline muted loop>
      <source src="/hero-video/main-2.webm" type="video/webm"  />
      <source src="/hero-video/main-2.mp4" type="video/mp4"  />
    </video>
  );
};

export default Media;
