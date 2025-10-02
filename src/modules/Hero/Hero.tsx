import Background from "./Background/Background";
import { MediaContainer } from "./MediaContainer/MediaContainer";

import styles from "./hero.module.sass";

export const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <MediaContainer />
      <div className={styles.descr}>
        <div className={styles.scroll}>
          <span>SCROLL</span>
          <div className={styles.titleLine}>
            <h1 className={styles.title}>Студия автопортрета SELFIE</h1>
            <span>
              {" "}
              &nbsp;{"//"} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EST. 2023{" "}
            </span>
          </div>
        </div>
        <p className={styles.slogan}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;новый
          <br />
          формат&nbsp;&nbsp;cъемки,
          <br />
          где ты сам себе
          <br />
          фотограф&nbsp;и модель
          <br />
        </p>
        <button className={styles.button}> ЗАБРОНИРОВАТЬ </button>
      </div>
      <Background />
    </section>
  );
};
