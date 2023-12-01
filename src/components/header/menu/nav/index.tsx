import { useState } from 'react';
import Button from '../button';
import styles from './nav.module.sass';

const menuItem = [
  { text: 'О студии', link: '#about' },
  { text: 'Бронирование', link: '#booking' },
  { text: 'Сертификат', link: '#certificate' },
  { text: 'Контакты', link: '#contacts' },
];

const Nav = ({ isActive, handleClose }: { isActive: boolean; handleClose: () => void }) => {
  return (
    <nav className={`${styles.nav} ${!isActive && styles.nonActive}`}>
      <ul className={styles.list}>
        {menuItem.map((item) => (
          <li key={item.text} className={styles.listItem}>
            <a href={item.link} className={styles.link} onClick={handleClose}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
