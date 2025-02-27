import dynamic from "next/dynamic";
import Container from "../container";
import styles from "./contacts.module.sass";
import { useEffect, useRef, useState } from "react";

const YandexMap = dynamic(() => import("./yandex-map/index"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const Contacts = () => {
  const mapRef = useRef(null);
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          // Проверяем, виден ли элемент mapRef
          if (entry.isIntersecting) {
            setLoadMap(true);
            observer.unobserve(entry.target); // Отключаем observer после загрузки карты
          }
        });
      },
      {
        root: null,
        rootMargin: "150px",
        threshold: 0.1, // Какой процент элемента будет виден для инициации загрузки
      }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    // Подчищаем за собой
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={mapRef} className={styles.contacts} id="contacts">
      <Container>
        <div className={styles.content}>
          <div className={styles.map}>{loadMap && <YandexMap />}</div>
          <div className={styles.adress}>
            <span className={styles.name}>SELFIE студия автопортрета</span>
            <a className={styles.mail} href="mailto: selfie.muse@ya.ru">
              selfie.muse@ya.ru
            </a>
            <div className={styles.links}>
              <a className={styles.tel} href="tel: +79192412000">
                +7 (919) 241-20-00
              </a>
              <a
                className={styles.massage}
                href="https://api.whatsapp.com/send?phone=79192412000"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_57972_2460)">
                    <path
                      d="M20 39.375C30.7005 39.375 39.375 30.7005 39.375 20C39.375 9.29948 30.7005 0.625 20 0.625C9.29948 0.625 0.625 9.29948 0.625 20C0.625 30.7005 9.29948 39.375 20 39.375Z"
                      fill="#30BF39"
                    />
                    <path
                      d="M25.875 21.751C25.625 21.626 24.3125 20.876 24.0625 20.8135C23.8125 20.6885 23.625 20.6885 23.4375 20.9385C23.25 21.1885 22.6875 21.8135 22.5625 21.9385C22.375 22.126 22.25 22.126 22 22.001C21.75 21.876 20.875 21.5635 19.875 20.5635C19.125 19.8135 18.5625 18.9385 18.4375 18.626C18.3125 18.376 18.4375 18.1885 18.5625 18.0635C18.6875 17.9385 18.8125 17.751 19 17.626C19.1875 17.501 19.1875 17.376 19.3125 17.1885C19.4375 17.001 19.375 16.876 19.3125 16.6885C19.25 16.501 18.75 15.1885 18.5625 14.626C18.375 14.0635 18.125 14.1885 18 14.126C17.8125 14.126 17.6875 14.0635 17.5 14.0635C17.25 14.0635 16.9375 14.1885 16.75 14.376C16.5 14.626 15.75 15.251 15.75 16.5635C15.75 17.876 16.625 19.251 16.75 19.376C16.875 19.5635 18.5 22.4385 21.1875 23.626C23.875 24.8135 23.875 24.4385 24.375 24.4385C24.875 24.4385 26 23.8135 26.25 23.251C26.5 22.626 26.5 22.0635 26.4375 22.001C26.3125 22.001 26.125 21.9385 25.875 21.751ZM20.875 28.1885C19.125 28.1885 17.5 27.6885 16.0625 26.751L12.6875 27.8135L13.8125 24.5635C12.75 23.0635 12.125 21.251 12.125 19.376C12.125 14.501 16.0625 10.5635 20.9375 10.5635C25.8125 10.5635 29.6875 14.501 29.6875 19.376C29.6875 24.251 25.75 28.1885 20.875 28.1885ZM20.875 8.81348C15.0625 8.81348 10.3125 13.5635 10.3125 19.376C10.3125 21.3135 10.8125 23.1885 11.8125 24.8135L9.875 30.501L15.75 28.626C17.3125 29.501 19.0625 29.9385 20.875 29.9385C26.6875 29.9385 31.4375 25.1885 31.4375 19.376C31.4375 13.5635 26.75 8.81348 20.875 8.81348Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_57972_2460">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a className={styles.massage} href="https://t.me/musephotostudio">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z"
                    fill="url(#paint0_linear_136320_5166)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.05321 19.7889L20.7168 14.7649C26.2711 12.4547 27.4251 12.0534 28.1774 12.0402C28.3429 12.0373 28.7128 12.0783 28.9524 12.2727C29.1548 12.4369 29.2104 12.6587 29.2371 12.8143C29.2637 12.9699 29.2969 13.3246 29.2705 13.6017C28.9695 16.7641 27.6671 24.4386 27.0046 27.9806C26.7242 29.4794 26.1726 29.9819 25.6378 30.0311C24.4763 30.138 23.5944 29.2635 22.4694 28.5261L18.0061 25.528C16.0314 24.2268 17.3115 23.5116 18.4369 22.3428C18.7314 22.0368 23.8487 17.3823 23.9477 16.96C23.9597 16.9072 23.9716 16.7104 23.8547 16.6064C23.7377 16.5024 23.565 16.5384 23.4405 16.5663C23.264 16.6064 20.452 18.465 15.0044 22.1423C14.2062 22.6904 13.4832 22.9575 12.8355 22.9435C12.1214 22.9281 10.7478 22.5397 9.72661 22.2078C8.47408 21.8007 7.4786 21.5854 7.56532 20.8939C7.61044 20.5338 8.1064 20.1655 9.05317 19.789L9.05321 19.7889Z"
                    fill="white"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_136320_5166"
                      x1="20"
                      y1="0"
                      x2="20"
                      y2="39.7033"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2AABEE" />
                      <stop offset="1" stopColor="#229ED9" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>
            </div>

            <p className={styles.house}>
              <span className={styles.houseAdress}>
                Студия расположена по адресу Проспект&nbsp;Революции,&nbsp;39,
                3&nbsp;этаж.
              </span>
              <span className={styles.houseEntarnse}>
                Вход через арку «КОММУНА», прямо 5&#8209;ти этажное здание.
              </span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contacts;
