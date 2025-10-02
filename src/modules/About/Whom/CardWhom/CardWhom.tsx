import styles from "./card-whom.module.sass";
import { Container } from "@/modules/Container/Container";
import { WhomImg } from "../WhomImg/WhomImg";

interface ICardWhom {
  photo: string;
  title: string;
  text: string;
  bgColor: string;
  color?: string;
}

export const CardWhom = ({ photo, title, text, bgColor, color }: ICardWhom) => {
  return (
    <li className={styles.card} style={{ backgroundColor: bgColor }}>
      <div className={styles.mask}></div>
      <Container>
        <div className={styles.content}>
          <WhomImg photo={photo} />

          <div
            className={styles.descr}
            style={color ? { color: color } : { color: "inherit" }}
          >
            <h3 className={styles.titleCard}>{title}</h3>
            <p className={styles.text}>{text}</p>
          </div>
        </div>
      </Container>
    </li>
  );
};
