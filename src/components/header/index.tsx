import Menu from './menu';
import styles from './header.module.sass';
import { useCallback, useEffect, useRef, useState } from 'react';

const Header = () => {
	const [scale, setScale] = useState(1);
	const [scaleFromMenu, setScaleFromMenu] = useState(false);

	const headerRef = useRef<HTMLElement>(null);
	const logoRef = useRef<HTMLAnchorElement>(null);
	useEffect(() => {
		const getScale = () => {
			const logo = logoRef.current;
			if (!logo) return;
			logo.style.transition = 'transform 0s';

			requestAnimationFrame(() => {
				const endScaleCoords = window.innerHeight / 1.5;
				const header = headerRef.current;
				if (!header) return;

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

	const handleScale = useCallback(
		(value: boolean) => {
			setScaleFromMenu(value);
		},
		[scale]
	);

	return (
		<header className={styles.header} ref={headerRef}>
			<a
				href='#hero'
				ref={logoRef}
				className={styles.logo}
				style={{
					transform: `translate3d(0px, 0px, 0px) scale(${scaleFromMenu ? 1 : scale})`,
					transition: `transform ${scaleFromMenu ? '0.3s' : 'none'} `,
				}}
			>
				<svg
					className={styles.svg}
					id='Layer_1'
					data-name='Layer 1'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 630.25 180.3'
				>
					<g className={styles.svg__text_2}>
						<text className={styles.svg__text} transform='translate(-5.75 160.49)'>
							<tspan x='0' y='0' xmlSpace='preserve'>
								SELFIE
							</tspan>
						</text>
						{/* <text className={styles.svg__text} transform='translate(-9.75 160.49)'>
							<tspan x='0' y='0' xmlSpace='preserve'>
								.selfie
							</tspan>
						</text> */}
					</g>
				</svg>
			</a>
			<Menu handleScale={handleScale} />
		</header>
	);
};

export default Header;
