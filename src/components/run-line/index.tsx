import Container from '../container';
import styles from './run-line.module.sass';

const RunLine = () => {
  return (
    <span className={styles.lines}>
      <span className={styles.lines__item}>
        <span className={styles.lines__item_color}>SELFIE </span> ФОТОСТУДИЯ БЕЗ ФОТОГРАФА <span className={styles.lines__item_color}>SELFIE </span>
        ГОТОВЫЕ ФОТО В ТЕЧЕНИИ 24 ЧАСОВ
      </span>
      <span className={styles.lines__item}>
        <span className={styles.lines__item_color}>SELFIE </span> ФОТОСТУДИЯ БЕЗ ФОТОГРАФА <span className={styles.lines__item_color}>SELFIE </span>
        ГОТОВЫЕ ФОТО В ТЕЧЕНИИ 24 ЧАСОВ
      </span>
    </span>
  );
};

export default RunLine;
