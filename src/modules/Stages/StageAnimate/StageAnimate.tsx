"use client";

import { useContext, useEffect, useRef, useState } from "react";
import styles from "./stage-animate.module.sass";
import { widthDeviceContext } from "@/context/widthDeviceContext";

export const StageAnimate = ({ number }: { number: number }) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const widthDevice = useContext(widthDeviceContext);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          // Проверяем, виден ли элемент
          if (entry.isIntersecting) {
            setIsActive(true);
            observer.unobserve(entry.target); // Отключаем observer после загрузки
          }
        });
      },
      {
        root: null,
        rootMargin: "-60px",
        threshold: 0.1, // Какой процент элемента будет виден для инициации загрузки
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.imageWrap}>
      {isActive && (
        <div
          style={{
            animationDelay: `${
              widthDevice && widthDevice > 1024 ? number / 10 : 0
            }s`,
          }}
          className={styles.image}
        >
          {number}
        </div>
      )}
    </div>
  );
};
