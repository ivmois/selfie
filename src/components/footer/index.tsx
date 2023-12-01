import Social from '../social';
import styles from './footer.module.sass';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Social type="footer" />
    </footer>
  );
};

export default Footer;
