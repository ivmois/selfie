import styles from "./container.module.sass";

interface IContainer {
  children: React.ReactNode;
}

export const Container = ({ children }: IContainer) => {
  return (
    <div className={styles.container} id="container">
      {children}
    </div>
  );
};
