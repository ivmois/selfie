"use client";

import styles from "./whom-img.module.sass";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface IWhomImg {
  photo: string;
}

export const WhomImg = ({ photo }: IWhomImg) => {
  const [scale, setScale] = useState(1.3);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    if (scale === 1) return;
    const imgPosition =
      img.getBoundingClientRect().top - img.getBoundingClientRect().height;

    const getScale = () => {
      const scrollPostion = window.pageYOffset;
      if (imgPosition < scrollPostion) setScale(1);
    };

    document.addEventListener("scroll", getScale, { passive: true });

    return () => {
      document.removeEventListener("scroll", getScale);
    };
  }, [scale]);

  return (
    <div className={styles.photo}>
      <Image
        className={styles.img}
        src={photo}
        priority
        sizes="(min-width: 1025px) 50vw"
        fill
        alt="автопортрет"
        ref={imgRef}
        style={{ transform: `scale(${scale})` }}
      />
    </div>
  );
};
