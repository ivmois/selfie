"use client";

import { useEffect, useState } from "react";
import styles from "./cookie-notific.module.sass";

// Устанавливаем куку с сроком жизни в 30 дней
const setCookie = (name: string, value: string, days: number) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
};

// Проверяем наличие куки
const getCookie = (name: string) => {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
};

export const CookieNotific = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = getCookie("cookieAccepted");
    setVisible(!accepted);
  }, []);

  const handleAccept = () => {
    setCookie("cookieAccepted", "true", 30);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.notific}>
      <p>
        Продолжая использовать сайт, вы соглашаетесь с использованием
        cookie-файлов в соответствии с обработкой персональных данных нашим
        сайтом и Яндекс Метрикой.
      </p>
      <button onClick={handleAccept} className={styles.button}>
        ПРИНИМАЮ
      </button>
    </div>
  );
};
