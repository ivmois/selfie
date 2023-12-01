import Image from 'next/image';
import styles from './concept.module.sass';

import processImg from 'public/concept/concept.webp';
import Container from '@/components/container';

const Concept = () => {
  return (
    <section className={styles.concept} id="about">
      <Container>
        <div className={styles.content}>
          <h3 className={styles.title}>Перед тобой только большое зеркало и не видно камеры, а съемкой ты управляешь с помощью маленького пульта.</h3>
          <div className={styles.imgContainer}>
            <Image className={styles.img} quality={90} fill src={processImg} alt="автопортрет" />
          </div>
          <p className={styles.text}>
            {'//'}&nbsp;&nbsp;&nbsp;&nbsp;можно не переживать за то, как ты выглядишь в кадре, ведь фотографии получаются точь-в-точь как ты видишь
            себя в отражении, а на плэйбэк - мониторе ты сразу же видишь результат фото в обработке.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Concept;
