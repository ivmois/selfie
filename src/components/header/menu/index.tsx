import Nav from '@/components/header/menu/nav';
import { memo, useState } from 'react';
import Button from './button';
import styles from './menu.module.sass';

const Menu = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  const handleClose = () => {
    setIsActive(false);
  };

  return (
    <div className={styles.menu}>
      <Button isMenuActive={isActive} onClick={handleToggle} />
      <Nav isActive={isActive} handleClose={handleClose} />
    </div>
  );
};

export default memo(Menu);
