import { useEffect, useRef, useState } from "react";
import styles from "./yandex-map.module.sass";

declare global {
  interface Window {
    initMap: () => void;
    ymaps: any;
  }
}

const defaultStateMap = {
  isLoad: false,
  isInit: false,
};

export const YandexMap = () => {
  const [isLoadMap, setLoadMap] = useState(defaultStateMap);
  const isLaodRef = useRef(false);

  useEffect(() => {
    if (isLaodRef.current) return;

    const addMap = () => {
      const script = document.createElement("script");
      script.src = `https://api-maps.yandex.ru/2.1/?apikey=aabcdac4-c542-4a1f-84e4-a9cdd9e516e7&lang=ru_RU&onload=initMap`;
      script.async = true;
      document.body.appendChild(script);
      isLaodRef.current = true;
      setLoadMap((prev) => ({ ...prev, isLoad: true }));
    };
    addMap();
  }, []);

  useEffect(() => {
    if (!isLoadMap.isLoad) return;
    if (isLoadMap.isInit) return;
    window.initMap = function () {
      const map = new window.ymaps.Map("map", {
        center: [51.666607, 39.206657],
        zoom: 16,
      });
      map.controls.remove("rulerControl");
      map.controls.remove("searchControl");
      map.controls.remove("fullscreenControl");
      map.controls.remove("trafficControl");
      map.controls.remove("typeSelector");
      map.controls.remove("geolocationControl");

      const myPlacemark = new window.ymaps.Placemark(
        [51.66635, 39.207097],
        {},
        {
          iconLayout: "default#image",
          iconImageHref: "/mark.png",
          iconImageSize: [70, 40],
          iconImageOffset: [-3, -42],
        }
      );
      map.geoObjects.add(myPlacemark);
    };

    setLoadMap((prev) => ({ ...prev, isInit: true }));
  }, [isLoadMap]);

  return (
    <div
      id="map"
      className={styles.map}
      style={{ width: "100%", height: "100%" }}
    />
  );
};
