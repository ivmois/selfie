import Link from 'next/link';
import styles from './booking-modal.module.sass';
import { memo } from 'react';

const BookingModal = memo(({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
	return (
		<div className={`${styles.wrap} ${!isOpen && styles.nonActive}`}>
			<div className={styles.inner}>
				<div className={styles.buttonWrap}>
					<button type='button' className={styles.close} onClick={onClose}>
						<img className={styles.img} src={'./menu/arrow.png'} alt='' />
					</button>
				</div>
				<div className={styles.content}>
					<div className={styles.title}>
						Далее
						<span className={styles.titleSpan}>в системе бронирования вам необходимо выбрать</span>
					</div>
					<ul className={styles.list}>
						<li className={styles.listItem} style={{ transitionDelay: `0.2s`, color: '#0012be' }}>
							Фотосессия
						</li>
						<li className={styles.listItem} style={{ transitionDelay: `0.3s` }}>
							Длительность съемки
						</li>
						<li className={styles.listItem} style={{ transitionDelay: `0.4s` }}>
							Дата
						</li>
						<li className={styles.listItem} style={{ transitionDelay: `0.5s`,  color: '#0012be'  }}>
							зал SELFIE<span className={styles.muse}>.muse</span>
						</li>
						<li className={styles.listItem} style={{ transitionDelay: `0.6s` }}>
							Выбрать время
						</li>
						<li className={styles.listItem} style={{ transitionDelay: `0.7s` }}>
							Забронировать
						</li>
					</ul>
				</div>
				<div>
					<Link target='_blank' href='https://appevent.ru/w/13953' className={`${styles.link} ${styles.booking}`}>
						<div className={styles.linkText}>Начать бронирование</div>
						<div className={styles.imgWrap} onClick={onClose}>
							<img className={`${styles.img} ${styles.img}`} src={'./menu/arrowBlue.png'} alt='' />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
});

export default BookingModal;
