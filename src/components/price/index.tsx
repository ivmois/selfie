import Container from "../container";
import RunLine from "../run-line";
import styles from "./price.module.sass";

const Price = () => {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>Что входит в аренду студии</h2>
        <div className={styles.content}>
          <div className={styles.services}>
            <ul className={styles.list}>
              <li className={styles.list__item}>
                45 минут чистого времени на съемку
              </li>
              <li className={styles.list__item}>
                Оборудование (камера, пульт, импульсный свет)
              </li>
              <li className={styles.list__item}> Фоны на выбор</li>
              <li className={styles.list__item}>
                Стулья в разной стилистике и реквизит
              </li>
              <li className={styles.list__item}>
                Все отснятые кадры с обработкой готовы в течении 24 часов
              </li>
            </ul>
            {/* <span className={styles.price}>3500 руб / сет</span>
            <span className={`${styles.price} ${styles.price_sale}`}> при бронировании 2х сетов и более 2500 руб / сет </span> */}
          </div>

          <p className={styles.info}>
            {"//"}&nbsp; за актуальными акциями и скидками следите в наших
            социальных сетях
          </p>
        </div>
        <a
          target="_blank"
          href="https://n1176575.yclients.com"
          className={styles.booking}
        >
          Забронировать
        </a>
      </Container>
    </section>
  );
};

export default Price;
