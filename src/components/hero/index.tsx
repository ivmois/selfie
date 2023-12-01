import styles from './hero.module.sass';
import Gallery from './gallery';
import Media from './media';
import { useContext, useEffect, useRef, useState } from 'react';
import { widthDeviceContext } from '@/context/widthDeviceContext';

const START_OPACITY = 0.1;
const END_OPACITY = 0.8;

const Hero = () => {
	const [opacity, setOpacity] = useState(START_OPACITY);
	const sectionRef = useRef<HTMLElement>(null);
	const widthDevice = useContext(widthDeviceContext);

	useEffect(() => {
		const getVh = () => {
			const vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		};

		getVh();
	}, []);

	useEffect(() => {
		const getOpacity = () => {
			const section = sectionRef.current;
			if (!section) return;
			const sectionHeight = section.getBoundingClientRect().height;
			const sectionCoords = section.getBoundingClientRect().top;
			const endAnimationCoords = -sectionHeight / 2;

			if (sectionCoords >= endAnimationCoords) {
				requestAnimationFrame(() => {
					const currentOpacity = START_OPACITY + sectionCoords / endAnimationCoords;
					if (currentOpacity < END_OPACITY) {
						setOpacity(currentOpacity);
					} else setOpacity(END_OPACITY);
				});
			} else return;
		};
		document.addEventListener('scroll', getOpacity, { passive: true });

		return () => {
			document.removeEventListener('scroll', getOpacity);
		};
	}, []);

	return (
		<section className={styles.hero} ref={sectionRef} id='hero'>
			<div className={styles.media__container}>
				<div className={styles.media}>{widthDevice && (widthDevice > 1024 ? <Gallery /> : <Media />)}</div>
			</div>

			<div className={styles.descr}>
				<div className={styles.scroll}>
					<span>SCROLL</span>
					<div className={styles.titleLine}>
						<h1 className={styles.title}>Студия автопортрета SELFIE</h1>
						<span> &nbsp;{'//'} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2023 </span>
					</div>
				</div>
				<p className={styles.slogan}>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;новый
					<br />
					формат&nbsp;cъемки,
					<br />
					где ты сам
					<br />
					&nbsp;&nbsp;себе фотограф
					<br />
					&nbsp;и модель{' '}
				</p>
				<button className={styles.button}> ЗАБРОНИРОВАТЬ </button>
			</div>
			<div className={styles.background} style={{ backgroundColor: `rgb(0,0,0,${opacity})` }}></div>
		</section>
	);
};

export default Hero;
