import styles from "./stage.module.sass";
import { StageAnimate } from "../StageAnimate/StageAnimate";

export const Stage = ({
  number,
  title,
  text,
}: {
  number: number;
  title: string;
  text: string;
}) => {
  return (
    <li className={styles.item}>
      <StageAnimate number={number} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </li>
  );
};
