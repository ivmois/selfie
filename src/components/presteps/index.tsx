import { useEffect, useRef, useState } from 'react';
import Container from '../container';
import styles from './presteps.module.css';
import TextApper from '../TextApper';

const SLIDES_COUNT = 2.2;
const DEFAULT_TRANSFORM_VALUE = 100;

const Presteps = () => {
	const ref = useRef<HTMLDivElement | null>(null);
	const [transformValue, setTransformValue] = useState<number>(DEFAULT_TRANSFORM_VALUE);
	const [heightScrollWrap, setHeightScrollWrap] = useState<number>(0);

	useEffect(() => {
		const updateHeightWrap = () => {
			if (!ref.current) return;

			const screenWidth = window.screen.width;
			const screenHeight = window.screen.height;
			const heightWrap = screenWidth > screenHeight ? SLIDES_COUNT * screenWidth : SLIDES_COUNT * screenHeight;

			setHeightScrollWrap(heightWrap);
		};

		updateHeightWrap(); // do it once manually to ensure calculated before first render
	}, []);

	useEffect(() => {
		const horizontalScroll = () => {
			if (!ref.current) return;

			const scrollPosition = ref.current.getBoundingClientRect().top;
			const slideWidth = heightScrollWrap / SLIDES_COUNT;

			if (scrollPosition < 500 && scrollPosition > -heightScrollWrap) {
				const calculatedTransformValue = DEFAULT_TRANSFORM_VALUE - (-scrollPosition / slideWidth) * 100;

				if (scrollPosition > 0) return setTransformValue(DEFAULT_TRANSFORM_VALUE);
				if (scrollPosition < -slideWidth) return setTransformValue(0);

				setTransformValue(calculatedTransformValue);
			}
		};

		document.addEventListener('scroll', horizontalScroll);

		return () => {
			document.removeEventListener('scroll', horizontalScroll);
		};
	}, [heightScrollWrap]);

	return (
		<section id='booking' className={styles.presteps}>
			<Container>
				<h2 className={styles.title}>Что нужно перед тем как забронировать</h2>
				<div className={styles.services}>
					<div className={styles.scrollWrap} style={{ height: `${heightScrollWrap}px` }} ref={ref}>
						<div className={styles.scrollOverflow}>
							<h3 className={styles.servicesTitle}>ВЫБЕРИ ЦВЕТ или ЧБ</h3>
							<div className={styles.slides}>
								<div className={`${styles.slide} ${styles.slide_1}`}>
									<div className={styles.servicesImg}></div>
								</div>
								<div
									className={`${styles.slide} ${styles.slide_2}`}
									style={{ transform: `translate3d(${transformValue}%, 0, 0)` }}
								>
									<div className={styles.servicesImg}></div>
								</div>
							</div>
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
