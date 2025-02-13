import styles from "./hero.module.sass";
import Gallery from "./gallery";
import Media from "./media";
import { useContext, useEffect, useRef } from "react";
import Background from "./background";
import { widthDeviceContext } from "@/context/widthDeviceContext";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const widthDevice = useContext(widthDeviceContext);

  useEffect(() => {
    const getVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    getVh();
  }, []);

  return (
    <section className={styles.hero} ref={sectionRef} id="hero">
      <div className={styles.media__container}>
        {widthDevice && (
          <div className={styles.media}>
            {widthDevice > 1023 ? <Gallery /> : <Media />}
          </div>
        )}
      </div>

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
      <Background parentRef={sectionRef} />
    </section>
  );
};

export default Hero;
