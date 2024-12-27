import Image from "next/image";
import styles from "./sertificate.module.sass";
import sertificateImg from "public/sertificate/sertificate.jpg";
import Container from "../container";

const Sertificate = () => {
  return (
    <section id="certificate" className={styles.sertificate}>
      <Container>
        <div className={styles.titleWrap}>
          <h2 className={styles.title}>СЕРТИФИКАТ В СТУДИЮ АВТОПОРТРЕТА</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <p className={styles.descr}>
              Оригинальный подарок для близких, друзей или коллег. Удивительный
              опыт фотосессии без фотографа точно запомнится. А классные
              фотографии будут приятным напоминанием об этом дне. <br /> <br />
              Вы можете зайти к нам в гости в студию и приобрести сертификат или
              заказать его доставку. А также у нас есть online сертификаты.
            </p>
            <a
              target="_blank"
              href="https://o6302.yclients.com/loyalty"
              className={styles.buy}
            >
              КУПИТЬ СЕРТИФИКАТ
            </a>
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill
              src={sertificateImg}
              alt="автопортрет"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Sertificate;
