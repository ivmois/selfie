import { useEffect, useState } from 'react';
import styles from './button.module.sass';

interface IButton {
  isMenuActive: boolean;
  onClick: () => void;
}

const Button = ({ onClick, isMenuActive }: IButton) => {

  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.menu} style={isMenuActive ? { transform: 'translateY(100%)' } : {}}>
        МЕНЮ
      </span>
      <span className={styles.close} style={!isMenuActive ? { transform: 'translateY(-100%)' } : {}}>
        ЗАКРЫТЬ
      </span>
    </button>
  );
};

export default Button;
