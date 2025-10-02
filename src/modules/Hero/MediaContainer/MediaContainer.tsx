"use client";

import { useContext, useEffect } from "react";
import { widthDeviceContext } from "@/context/widthDeviceContext";
import { HeroSlider } from "../HeroSlider/HeroSlider";
import { HeroVideo } from "../HeroVideo/HeroVideo";

import styles from "./media-container.module.sass";

export const MediaContainer = () => {
  const widthDevice = useContext(widthDeviceContext);

  useEffect(() => {
    const getVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    getVh();
  }, []);

  return (
    <div className={styles.mediaContainer}>
      {widthDevice && (
        <div className={styles.media}>
          {widthDevice > 1023 ? <HeroSlider /> : <HeroVideo />}
        </div>
      )}
    </div>
  );
};
