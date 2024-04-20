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
				rootMargin: '150px',
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
						<div className={styles.links}>
							<a className={styles.tel} href='tel: +79204698949'>
								+7 (920) 469-89-49
							</a>
							<a className={styles.massage} href='https://t.me/musephotostudio'>
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
						</div>

						<p className={styles.house}>
							<span className={styles.houseAdress}>
								Студия расположена по адресу Проспект&nbsp;Революции,&nbsp;39, 3&nbsp;этаж.
							</span>
							<span className={styles.houseEntarnse}>Вход через арку «КОММУНА», прямо 5&#8209;ти этажное здание.</span>
						</p>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Contacts;
