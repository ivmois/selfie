import styles from "./menu-button.module.sass";

interface IButton {
  isMenuActive: boolean;
  onClick: () => void;
}

export const MenuButton = ({ onClick, isMenuActive }: IButton) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <span
        className={styles.menu}
        style={isMenuActive ? { transform: "translateY(100%)" } : {}}
      >
        МЕНЮ
      </span>
      <span
        className={styles.close}
        style={!isMenuActive ? { transform: "translateY(-100%)" } : {}}
      >
        ЗАКРЫТЬ
      </span>
    </button>
  );
};
