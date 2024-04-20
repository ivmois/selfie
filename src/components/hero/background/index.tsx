import styles from './background.module.sass';
import { RefObject, useEffect,useState } from 'react';

const START_OPACITY = 0.1;
const END_OPACITY = 0.8;

const Background = ({ parentRef }: { parentRef: RefObject<HTMLElement> }) => {
	const [opacity, setOpacity] = useState(START_OPACITY);

	useEffect(() => {
		const getOpacity = () => {
			const section = parentRef.current;
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

	return <div className={styles.background} style={{ backgroundColor: `rgb(0,0,0,${opacity})` }}></div>;
};

export default Background;
