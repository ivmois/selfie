import { useEffect, useState } from 'react';
import styles from './gallery.module.sass';
import Photo from './photo';


const slides = [
  {number: 1 , 1920: '/hero-img/1920/1.webp', 2880: '/hero-img/2880/1.webp', 3840: '/hero-img/3840/1.webp', max:'/hero-img/max/1.webp'},
  {number: 2 , 1920: '/hero-img/1920/2.webp', 2880: '/hero-img/2880/2.webp', 3840: '/hero-img/3840/2.webp', max:'/hero-img/max/2.webp'},
  {number: 3 , 1920: '/hero-img/1920/3.webp', 2880: '/hero-img/2880/3.webp', 3840: '/hero-img/3840/3.webp', max:'/hero-img/max/3.webp'},
  {number: 4 , 1920: '/hero-img/1920/4.webp', 2880: '/hero-img/2880/4.webp', 3840: '/hero-img/3840/4.webp', max:'/hero-img/max/4.webp'},
  {number: 5 , 1920: '/hero-img/1920/5.webp', 2880: '/hero-img/2880/5.webp', 3840: '/hero-img/3840/5.webp', max:'/hero-img/max/5.webp'},
]

const DELAY = 3000;

const Gallery = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, DELAY);
    return () => {
      clearTimeout(timer);
    };
  }, [activeSlide]);

  return (
    <div className={styles.slider}>
      <div className={styles.sliderContainer}>
        {slides.map((slide, index) => (
          <Photo src1920={slide[1920]} src2880={slide[2880]} src3840={slide[3840]} srcMax={slide.max} key={slide.number} isActive={activeSlide === index ? true : false} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
