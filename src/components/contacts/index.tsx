import dynamic from 'next/dynamic';
import Container from '../container';
import styles from './contacts.module.sass';
import { useEffect, useRef, useState } from 'react';

const YandexMap = dynamic(() => import('./yandex-map/index'), {
	loading: () => <p>Loading...</p>,
	ssr: false,
});

const Contacts = () => {
	const mapRef = useRef(null);
	const [loadMap, setLoadMap] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					// Проверяем, виден ли элемент mapRef
					if (entry.isIntersecting) {
						setLoadMap(true);
						observer.unobserve(entry.target); // Отключаем observer после загрузки карты
					}
				});
			},
			{
				root: null,
				rootMargin: '0px',
				threshold: 0.1, // Какой процент элемента будет виден для инициации загрузки
			}
		);

		if (mapRef.current) {
			observer.observe(mapRef.current);
		}

		// Подчищаем за собой
		return () => observer.disconnect();
	}, []);

	return (
		<section ref={mapRef} className={styles.contacts} id='contacts'>
			<Container>
				<div className={styles.content}>
					<div className={styles.map}>{loadMap && <YandexMap />}</div>
					<div className={styles.adress}>
						<span className={styles.name}>MUSE PHOTOSTUDIO</span>
						<a className={styles.mail} href='mailto: muse.inphotostudio@gmail.com'>
							muse.inphotostudio@gmail.com
						</a>
						<a className={styles.tel} href='tel: +79204698949'>
							+7 (920)469-89-49
						</a>
						<a className={styles.massage} href=''>
							<svg width='60' height='60' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<g clipPath='url(#clip0_136320_2412)'>
									<path
										d='M30 59.0625C46.0508 59.0625 59.0625 46.0508 59.0625 30C59.0625 13.9492 46.0508 0.9375 30 0.9375C13.9492 0.9375 0.9375 13.9492 0.9375 30C0.9375 46.0508 13.9492 59.0625 30 59.0625Z'
										fill='#30BF39'
									/>
									<path
										d='M38.8125 32.6265C38.4375 32.439 36.4688 31.314 36.0938 31.2202C35.7188 31.0327 35.4375 31.0327 35.1563 31.4077C34.875 31.7827 34.0313 32.7202 33.8438 32.9077C33.5625 33.189 33.375 33.189 33 33.0015C32.625 32.814 31.3125 32.3452 29.8125 30.8452C28.6875 29.7202 27.8438 28.4077 27.6563 27.939C27.4688 27.564 27.6563 27.2827 27.8438 27.0952C28.0313 26.9077 28.2188 26.6265 28.5 26.439C28.7813 26.2515 28.7813 26.064 28.9688 25.7827C29.1563 25.5015 29.0625 25.314 28.9688 25.0327C28.875 24.7515 28.125 22.7827 27.8438 21.939C27.5625 21.0952 27.1875 21.2827 27 21.189C26.7188 21.189 26.5313 21.0952 26.25 21.0952C25.875 21.0952 25.4063 21.2827 25.125 21.564C24.75 21.939 23.625 22.8765 23.625 24.8452C23.625 26.814 24.9375 28.8765 25.125 29.064C25.3125 29.3452 27.75 33.6577 31.7813 35.439C35.8125 37.2202 35.8125 36.6577 36.5625 36.6577C37.3125 36.6577 39 35.7202 39.375 34.8765C39.75 33.939 39.75 33.0952 39.6563 33.0015C39.4688 33.0015 39.1875 32.9077 38.8125 32.6265ZM31.3125 42.2827C28.6875 42.2827 26.25 41.5327 24.0938 40.1265L19.0312 41.7202L20.7188 36.8452C19.125 34.5952 18.1875 31.8765 18.1875 29.064C18.1875 21.7515 24.0938 15.8452 31.4063 15.8452C38.7188 15.8452 44.5313 21.7515 44.5313 29.064C44.5313 36.3765 38.625 42.2827 31.3125 42.2827ZM31.3125 13.2202C22.5938 13.2202 15.4688 20.3452 15.4688 29.064C15.4688 31.9702 16.2187 34.7827 17.7188 37.2202L14.8125 45.7515L23.625 42.939C25.9688 44.2515 28.5938 44.9077 31.3125 44.9077C40.0313 44.9077 47.1563 37.7827 47.1563 29.064C47.1563 20.3452 40.125 13.2202 31.3125 13.2202Z'
										fill='white'
									/>
								</g>
							</svg>
						</a>
						<a className={styles.massage} href=''>
							<svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z'
									fill='url(#paint0_linear_136320_5166)'
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M9.05321 19.7889L20.7168 14.7649C26.2711 12.4547 27.4251 12.0534 28.1774 12.0402C28.3429 12.0373 28.7128 12.0783 28.9524 12.2727C29.1548 12.4369 29.2104 12.6587 29.2371 12.8143C29.2637 12.9699 29.2969 13.3246 29.2705 13.6017C28.9695 16.7641 27.6671 24.4386 27.0046 27.9806C26.7242 29.4794 26.1726 29.9819 25.6378 30.0311C24.4763 30.138 23.5944 29.2635 22.4694 28.5261L18.0061 25.528C16.0314 24.2268 17.3115 23.5116 18.4369 22.3428C18.7314 22.0368 23.8487 17.3823 23.9477 16.96C23.9597 16.9072 23.9716 16.7104 23.8547 16.6064C23.7377 16.5024 23.565 16.5384 23.4405 16.5663C23.264 16.6064 20.452 18.465 15.0044 22.1423C14.2062 22.6904 13.4832 22.9575 12.8355 22.9435C12.1214 22.9281 10.7478 22.5397 9.72661 22.2078C8.47408 21.8007 7.4786 21.5854 7.56532 20.8939C7.61044 20.5338 8.1064 20.1655 9.05317 19.789L9.05321 19.7889Z'
									fill='white'
								/>
								<defs>
									<linearGradient
										id='paint0_linear_136320_5166'
										x1='20'
										y1='0'
										x2='20'
										y2='39.7033'
										gradientUnits='userSpaceOnUse'
									>
										<stop stopColor='#2AABEE' />
										<stop offset='1' stopColor='#229ED9' />
									</linearGradient>
								</defs>
							</svg>
						</a>
						<p className={styles.house}>
							<span className={styles.houseAdress}>
								Студия расположена по адресу: Проспект&nbsp;Революции&nbsp;39 (Коммуна), 3&nbsp;этаж.
							</span>
							<span className={styles.houseEntarnse}>Вход через арку «КОММУНА», прямо 5-ти этажное здание, 3 этаж</span>
						</p>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Contacts;