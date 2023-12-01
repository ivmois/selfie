import styles from './about.module.sass';
import Whom from './whom';
import Concept from './concept';

const About = () => {
  return (
    <section className={styles.about} id="about">
        <Concept />
        <Whom />
    </section>
  );
};

export default About;
