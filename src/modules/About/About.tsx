import styles from "./about.module.sass";
import { Whom } from "./Whom/Whom";
import { Concept } from "./Concept/Concept";

export const About = () => {
  return (
    <section className={styles.about} id="about">
      <Concept />
      <Whom />
    </section>
  );
};
