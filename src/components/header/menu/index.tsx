import Nav from '@/components/header/menu/nav';
import { memo, useEffect, useRef, useState } from 'react';
import Button from './button';
import styles from './menu.module.sass';

const Menu = ({handleScale}: {handleScale: (value: boolean) => void }) => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  const handleClose = () => {
    setIsActive(false);
  };

// высота меню
	useEffect(() => {
    if (!isActive) return;

		const getVh = () => {
			const vhMenu = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vhMenu', `${vhMenu}px`);
		};
    getVh();
	}, [isActive]);


//блокировка скролла при открытом меню

  useEffect(() => {
    const handleTouchMove = (event: TouchEvent) => {
      if (isActive) {
        event.preventDefault();
      }
    };

    if (isActive) {
      handleScale(true)
      document.body.style.overflow = 'hidden';
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
    } else {
      handleScale(false)
      document.body.style.overflow = '';
      document.removeEventListener('touchmove', handleTouchMove);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('touchmove', handleTouchMove);
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
