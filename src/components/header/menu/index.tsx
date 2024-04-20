import Nav from '@/components/header/menu/nav';
import { memo, useEffect, useRef, useState } from 'react';
import Button from './button';
import styles from './menu.module.sass';

const Menu = () => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  const handleClose = () => {
    setIsActive(false);
  };

  useEffect(() => {
    if (!isActive) return;

    const handleTouchStart = (e: TouchEvent | MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsActive(false);
      }
    };
    document.addEventListener('click', handleTouchStart);

    return () => {
      document.removeEventListener('click', handleTouchStart);
    };
  }, [isActive]);


  return (
    <div className={styles.menu} ref={ref}>
      <Button isMenuActive={isActive} onClick={handleToggle} />
      <Nav isActive={isActive} handleClose={handleClose} />
    </div>
  );
};

export default memo(Menu);
