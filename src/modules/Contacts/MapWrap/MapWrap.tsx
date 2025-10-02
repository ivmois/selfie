"use client";

import { useEffect, useRef, useState } from "react";
import { YandexMap } from "../YandexMap/YandexMap";

import styles from "../contacts.module.sass";

export const MapWrap = () => {
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
    <div ref={mapRef} className={styles.map}>
      {loadMap && <YandexMap />}
    </div>
  );
};
