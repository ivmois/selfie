import styles from "./slide.module.sass";

interface IPhoto {
  src1920: string;
  src2880: string;
  src3840: string;
  srcMax: string;
  isActive: boolean;
}

export const Slide = ({
  src1920,
  src2880,
  src3840,
  srcMax,
  isActive,
}: IPhoto) => {
  return (
    <div className={styles.slide} style={isActive ? { opacity: "1" } : {}}>
      <picture>
        <source
          media="(min-width: 1024px) and (max-width: 1920px)"
          srcSet={`${src1920}, ${src2880} 2x`}
        />
        <source
          media="(min-width: 1921px) and (max-width: 2000px)"
          srcSet={`${src2880}, ${src3840} 2x`}
        />
        <source
          media="(min-width: 2000px)"
          srcSet={`${src3840}, ${srcMax} 2x`}
        />
        <img className={styles.img} src={`${src2880}`} alt="" />
      </picture>
    </div>
  );
};
