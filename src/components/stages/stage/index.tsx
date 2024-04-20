import { useContext, useEffect, useRef, useState } from 'react';
import styles from './stage.module.sass';
import { widthDeviceContext } from '@/context/widthDeviceContext';


const Stage = ({ number, title, text }: { number: number; title: string; text: string }) => {
	const ref = useRef(null);
	const [isActive, setIsActive] = useState(false);

  const widthDevice = useContext(widthDeviceContext)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					// Проверяем, виден ли элемент
					if (entry.isIntersecting) {
						setIsActive(true);
						observer.unobserve(entry.target); // Отключаем observer после загрузки
					}
				});
			},
			{
				root: null,
				rootMargin: '-100px',
				threshold: 0.1, // Какой процент элемента будет виден для инициации загрузки
			}
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<li ref={ref} className={styles.item}>
			<div className={styles.imageWrap}>
				{isActive && (
					<div style={{ animationDelay: `${widthDevice && widthDevice > 1024 ? number / 10 : 0}s` }} className={styles.image}>
						{number}
					</div>
				)}
			</div>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.text}>{text}</p>
		</li>
	);
};

export default Stage;
