import styles from './card-whom.module.sass';
import Image, { StaticImageData } from 'next/image';

import photo_1 from 'public/whom-img/whom-1.webp';
import { useEffect, useRef, useState } from 'react';
import Container from '@/components/container';

interface ICardWhom {
	photo: StaticImageData;
	title: string;
	text: string;
	bgColor: string;
	color?: string;
}

const CardWhom = ({ photo, title, text, bgColor, color }: ICardWhom) => {
	const [scale, setScale] = useState(1.3);
	const imgRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const img = imgRef.current;
		if (!img) return;
		if (scale === 1) return;
		const imgPosition = img.getBoundingClientRect().top - img.getBoundingClientRect().height;

		const getScale = () => {
			const scrollPostion = window.pageYOffset;
			if (imgPosition < scrollPostion) setScale(1);
		};

		document.addEventListener('scroll', getScale, { passive: true });

		return () => {
			document.removeEventListener('scroll', getScale);
		};
	}, [scale]);

	return (
		<li className={styles.card} style={{ backgroundColor: bgColor }}>
			<div className={styles.mask}></div>
			<Container>
				<div className={styles.content}>
					<div className={styles.photo}>
						<Image
							className={styles.img}
							src={photo}
							sizes='(min-width: 1025px) 50vw'
							fill
							alt='автопортрет'
							ref={imgRef}
							style={{ transform: `scale(${scale})` }}
						/>
					</div>
					<div className={styles.descr} style={color ? { color: color } : { color: 'inherit' }}>
						<h3 className={styles.titleCard}>{title}</h3>
						<p className={styles.text}>{text}</p>
					</div>
				</div>
			</Container>
		</li>
	);
};

export default CardWhom;
