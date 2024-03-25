import Menu from './menu';
import styles from './header.module.sass';
import { useEffect, useRef, useState } from 'react';

const Header = () => {
	const [scale, setScale] = useState(1);

	const headerRef = useRef<HTMLElement>(null);
	const logoRef = useRef<HTMLAnchorElement>(null);

  console.log(scale);

	useEffect(() => {
		const getScale = () => {
			requestAnimationFrame(() => {
				const endScaleCoords = window.innerHeight / 1.5;
				const logo = logoRef.current;
				const header = headerRef.current;
				if (!logo || !header) return;

				const headerPosition = header.getBoundingClientRect().top;
				const currentScale = 1 - -headerPosition / endScaleCoords;

				const defaultWidthLogo = logo.getBoundingClientRect().width / scale;
				const ratio = 70 / defaultWidthLogo;
				if (currentScale > ratio) {
					setScale(currentScale);
				} else {
					setScale(ratio);
				}
			});

		};

		getScale();

		document.addEventListener('scroll', getScale, { passive: true });
		window.addEventListener('resize', getScale, { passive: true });

		return () => {
			document.removeEventListener('scroll', getScale);
			window.removeEventListener('resize', getScale);
		};
	}, [scale]);

	return (
		<header className={styles.header} ref={headerRef}>
			<a
				href='#hero'
				ref={logoRef}
				className={styles.logo}
				style={{ transform: `translate3d(0px, 0px, 0px) scale(${scale})` }}
			>
				<svg
					className={styles.svg}
					id='Layer_1'
					data-name='Layer 1'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 508.25 164.3'
				>
					<g className={styles.svg__text_2}>
						<text className={styles.svg__text} transform='translate(-13.75 160.49)'>
							<tspan x='0' y='0' xmlSpace='preserve'>
								.selfie
							</tspan>
						</text>
					</g>
				</svg>
			</a>
			<Menu />
		</header>
	);
};

export default Header;
