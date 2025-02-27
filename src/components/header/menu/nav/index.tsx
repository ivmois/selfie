import { useContext, useEffect, useState } from 'react';
import styles from './nav.module.sass';
import Link from 'next/link';
import { Portal } from '@/components/portal';
import BookingModal from '@/components/booking-modal';
import { widthDeviceContext } from '@/context/widthDeviceContext';

const menuItem = [
	{ text: 'О студии', link: '#about' },
	{ text: 'Съемка', link: '#shooting' },
	{ text: 'Сертификат', link: '#certificate' },
	{ text: 'Контакты', link: '#contacts' },
];

const Nav = ({ isActive, handleClose }: { isActive: boolean; handleClose: () => void }) => {
	const [isOpen, setIsOpen] = useState(false);
	const widthDevice = useContext(widthDeviceContext);

	useEffect(() => {
		if (isActive) return;
		setIsOpen(false);
	}, [isActive]);

	return (
		<nav className={`${styles.nav} ${!isActive && styles.nonActive}`}>
			<div className={styles.inner}>
				<ul className={styles.list}>
					{menuItem.map((item, i) => (
						<li key={item.text} className={styles.listItem}>
							<a
								href={item.link}
								className={styles.link}
								onClick={handleClose}
								style={{ transitionDelay: `${isActive ? 0.1 + i / 10 : 0}s` }}
							>
								{item.text}
							</a>
						</li>
					))}
					<li className={styles.line}></li>
					<li className={styles.listItemBooking}>
						<a
							target='_blank'
							href='https://n1176575.yclients.com'
							className={styles.booking}
							onClick={handleClose}
							style={{ transitionDelay: `${isActive ? 0.1 + menuItem.length / 10 : 0}s` }}
						>
							Забронировать
						</a>
						{/* <button
							className={styles.booking}
							style={{ transitionDelay: `${isActive ? 0.1 + menuItem.length / 10 : 0}s` }}
							onClick={() => {
								setIsOpen((prev) => !prev);
							}}
						>
							Забронировать
						</button>
						{!!widthDevice && (widthDevice > 1023) ? (
							<Portal>
								<BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
							</Portal>
						) : (
							<BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
						)} */}
					</li>
				</ul>
				<div className={styles.contacts}>
					<Link
						target='_blank'
						href='https://www.instagram.com/selfie.muse?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr'
						className={styles.button}
					>
						<svg
							className={styles.icon}
							width='60'
							height='60'
							viewBox='0 0 60 60'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M24.2578 30C24.2578 33.1714 26.8286 35.7422 30 35.7422C33.1714 35.7422 35.7422 33.1714 35.7422 30C35.7422 26.8286 33.1714 24.2578 30 24.2578C26.8286 24.2578 24.2578 26.8286 24.2578 30Z'
								fill='#ffffff'
							/>
							<path
								d='M16.571 19.8403C16.8471 19.0923 17.2874 18.4153 17.8596 17.8596C18.4154 17.2874 19.0919 16.847 19.8404 16.571C20.4474 16.3352 21.3593 16.0546 23.0388 15.9781C24.8557 15.8953 25.4004 15.8774 30 15.8774C34.6001 15.8774 35.1448 15.8948 36.9612 15.9777C38.6407 16.0546 39.5531 16.3352 40.1596 16.571C40.9081 16.847 41.5851 17.2874 42.1404 17.8596C42.7126 18.4153 43.1529 19.0919 43.4294 19.8403C43.6652 20.4473 43.9458 21.3596 44.0222 23.0392C44.1051 24.8556 44.1229 25.4003 44.1229 30.0004C44.1229 34.6 44.1051 35.1447 44.0222 36.9616C43.9458 38.6411 43.6652 39.553 43.4294 40.16C43.1529 40.9084 42.713 41.585 42.1408 42.1407C41.5851 42.7129 40.9085 43.1533 40.1601 43.4293C39.5531 43.6655 38.6407 43.9461 36.9612 44.0226C35.1448 44.1054 34.6005 44.1228 30.0005 44.1228C25.3999 44.1228 24.8552 44.1054 23.0392 44.0226C21.3597 43.9461 20.4474 43.6655 19.8404 43.4293C18.338 42.8498 17.1506 41.6624 16.571 40.16C16.3353 39.553 16.0547 38.6411 15.9778 36.9616C15.8949 35.1447 15.8775 34.6 15.8775 30.0004C15.8775 25.4003 15.8949 24.8556 15.9778 23.0392C16.0542 21.3596 16.3348 20.4473 16.571 19.8403ZM30 38.8457C34.8857 38.8457 38.8463 34.8856 38.8463 29.9999C38.8463 25.1142 34.8857 21.1541 30 21.1541C25.1147 21.1541 21.1542 25.1142 21.1542 29.9999C21.1542 34.8856 25.1147 38.8457 30 38.8457ZM20.8044 22.8716C21.9461 22.8716 22.8717 21.946 22.8717 20.8044C22.8717 19.6627 21.9461 18.7371 20.8044 18.7371C19.6628 18.7371 18.7372 19.6627 18.7372 20.8044C18.7376 21.946 19.6628 22.8716 20.8044 22.8716Z'
								fill='#ffffff'
							/>
						</svg>
					</Link>
					<Link target='_blank' href='https://vk.com/muse_selfie' className={styles.button}>
						<svg
							className={styles.icon}
							width='60'
							height='60'
							viewBox='0 0 120 120'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<g clipPath='url(#clip0_34_62)'>
								<path
									d='M64.3932 86.5193C37.3356 86.5193 20.9148 67.7465 20.2764 36.5513H33.9804C34.4076 59.4665 44.8332 69.1913 52.8252 71.1737V36.5513H65.9628V56.3225C73.6716 55.4681 81.7356 46.4729 84.4524 36.5513H97.3692C95.3004 48.7577 86.5212 57.7529 80.31 61.4633C86.5212 64.4633 96.5148 72.3161 100.369 86.5193H86.1659C83.1659 77.0249 75.8124 69.6713 65.9628 68.6729V86.5193H64.3932Z'
									fill='#ffffff'
								/>
							</g>
						</svg>
					</Link>
					<Link target='_blank' className={styles.massage} href='https://t.me/musephotostudio'>
						<svg
							width='40'
							height='40'
							viewBox='0 0 40 40'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className={styles.icon}
						>
							<path
								d='M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z'
								fill='#000000'
							/>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M9.05321 19.7889L20.7168 14.7649C26.2711 12.4547 27.4251 12.0534 28.1774 12.0402C28.3429 12.0373 28.7128 12.0783 28.9524 12.2727C29.1548 12.4369 29.2104 12.6587 29.2371 12.8143C29.2637 12.9699 29.2969 13.3246 29.2705 13.6017C28.9695 16.7641 27.6671 24.4386 27.0046 27.9806C26.7242 29.4794 26.1726 29.9819 25.6378 30.0311C24.4763 30.138 23.5944 29.2635 22.4694 28.5261L18.0061 25.528C16.0314 24.2268 17.3115 23.5116 18.4369 22.3428C18.7314 22.0368 23.8487 17.3823 23.9477 16.96C23.9597 16.9072 23.9716 16.7104 23.8547 16.6064C23.7377 16.5024 23.565 16.5384 23.4405 16.5663C23.264 16.6064 20.452 18.465 15.0044 22.1423C14.2062 22.6904 13.4832 22.9575 12.8355 22.9435C12.1214 22.9281 10.7478 22.5397 9.72661 22.2078C8.47408 21.8007 7.4786 21.5854 7.56532 20.8939C7.61044 20.5338 8.1064 20.1655 9.05317 19.789L9.05321 19.7889Z'
								fill='#ffffff'
							/>
						</svg>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
