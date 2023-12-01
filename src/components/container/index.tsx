import Nav from '../header/menu/nav';
import styles from './container.module.sass';

interface IContainer {
  children: React.ReactNode;
}

const Container = ({ children }: IContainer) => {
  return (
    <div className={styles.container} id='container'>
     {children}
    </div>
  );
};

export default Container;
