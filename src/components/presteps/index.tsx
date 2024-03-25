import { useCallback, useEffect, useRef, useState } from 'react';
import Container from '../container';
import styles from './presteps.module.css';
import TextApper from '../TextApper';

const SLIDES_COUNT = 2;
const DEFAULT_TRANSFORM_VALUE = 100;

const Presteps = () => {
	const ref = useRef<HTMLDivElement | null>(null);
	const [transformValue, setTransformValue] = useState(DEFAULT_TRANSFORM_VALUE);
	const [heightScrollWrap, setHeightScrollWrap] = useState(0);

	// Создаем функцию для обновления высоты контейнера
	const updateHeightWrap = useCallback(() => {
		if (!ref.current) return;

		const screenWidth = window.innerWidth; // innerWidth используется для получения ширины видимой области экрана
		const screenHeight = window.innerHeight; // innerHeight используется для получения высоты видимой области экрана
		const heightWrap = screenWidth > screenHeight ? SLIDES_COUNT * screenWidth : SLIDES_COUNT * screenHeight;
		setHeightScrollWrap(heightWrap);
	}, []);

	useEffect(() => {
		updateHeightWrap();
		window.addEventListener('resize', updateHeightWrap);
		return () => window.removeEventListener('resize', updateHeightWrap);
	}, [updateHeightWrap]);

	// Создаем реф для хранения идентификатора запроса анимации
	const animationFrameRef = useRef<number | null>(null);

	const horizontalScroll = useCallback(() => {
		if (!ref.current) return;

		const scrollPosition = ref.current.getBoundingClientRect().top;
		const slideWidth = heightScrollWrap / SLIDES_COUNT;

		let newTransformValue = DEFAULT_TRANSFORM_VALUE;

		if (scrollPosition < 500 && scrollPosition > -heightScrollWrap) {
			newTransformValue = DEFAULT_TRANSFORM_VALUE - (-scrollPosition / slideWidth) * 100;

			if (scrollPosition > 0) newTransformValue = DEFAULT_TRANSFORM_VALUE;
			if (scrollPosition < -slideWidth) newTransformValue = 0;
		}

		setTransformValue(newTransformValue);
	}, [heightScrollWrap]);

	useEffect(() => {
		const handleScroll = () => {
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current);
			}
			animationFrameRef.current = requestAnimationFrame(horizontalScroll);
		};

		document.addEventListener('scroll', handleScroll);

		return () => {
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current);
			}
			document.removeEventListener('scroll', handleScroll);
		};
	}, [horizontalScroll]);

	return (
		<section id='booking' className={styles.presteps}>
			<Container>
				<h2 className={styles.title}>Что нужно перед тем как забронировать</h2>
				<div className={styles.services}>
					<div className={styles.scrollWrap} style={{ height: `${heightScrollWrap}px` }} ref={ref}>
						<div className={styles.scrollOverflow}>
							<h3 className={styles.servicesTitle}>ВЫБЕРИ ЦВЕТ или ЧБ</h3>
							{/*<div className={styles.slides}>*/}
							{/*	<div className={styles.overflowWrap} style={{ width: `${transformValue}%` }}>*/}
							{/*		<div className={`${styles.slide} ${styles.slide_1}`}>*/}
							{/*			<div className={styles.servicesImg}>*/}
							{/*				<img src='/presteps/bg-color.jpg' alt='цветное фото' />*/}
							{/*			</div>*/}
							{/*		</div>*/}
							{/*	</div>*/}
							{/*	<div className={`${styles.slide} ${styles.slide_2}`}>*/}
							{/*		<div className={styles.servicesImg}>*/}
							{/*			<img src='/presteps/bg-chb.jpg' alt='чб фото' />*/}
							{/*		</div>*/}
							{/*	</div>*/}
							{/*</div>*/}
						</div>
					</div>
					<div className={styles.servicesTextWrap}>
						<p className={styles.servicesText}>
							<TextApper />
						</p>
					</div>
					<div className={styles.background}>
						<div className={styles.servicesImg}></div>
						<div className={styles.servicesDescr}>
							<h3 className={styles.servicesTitle}>ВЫБЕРИ ФОН</h3>
							<p className={styles.backgroundText}>
								Всегда доступны для бронирования белый и черный фоны. В студии также есть много других цветных фонов.
								Напишите нам для уточнения наличия необходимого фона и его бронирования.
							</p>
						</div>
					</div>

					<div className={styles.date}>
						<h3 className={styles.servicesTitle}>ВЫБЕРИ ДАТУ И ВРЕМЯ</h3>
						<p className={styles.servicesText}>
							<span className={styles.servicesText_center}>
								45 минут - один сет <br />
								Вы можете забронириовать несколько сетов подряд - 2 и более
							</span>
						</p>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Presteps;
