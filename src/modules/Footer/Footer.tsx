import { Social } from "../Social/Social";
import styles from "./footer.module.sass";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Social type="footer" />
    </footer>
  );
};
