import { useEffect, useState, useRef, useMemo } from 'react';

const textDesktop = `Вы можете создавать как яркие цветные,
  так и уникальные черно-белые фотографии,
  которые сосредоточены исключительно на вас
  и ваших эмоциях.`;

const textMobile = `Вы можете создавать
как яркие цветные,
  так и уникальные
черно-белые фотографии,
  которые сосредоточены
  исключительно на вас
  и ваших эмоциях.`;

const TextApper = () => {
	const [opacity, setOpacity] = useState(0);
	const [hasAppeared, setHasAppeared] = useState(false);
	const [text, setText] = useState(textMobile);
	const textRef = useRef<HTMLDivElement>(null);

	const textEditor = useMemo(() => {
		if (!text) return null;

		const editText = text.split('\n').map((str, i) => (
			<span style={{ display: 'block' }} key={`parent-${i}`}>
				{str.split('').map((char, j) => (
					<span
						style={{ opacity: opacity, transitionDelay: `${j * 20 + i * 10}ms`, color: `rgba(0,0,0,${opacity})` }}
						key={`child-${j}`}
					>
						{char}
					</span>
				))}
			</span>
		));

		return editText;
	}, [text, opacity]);

	const handleObserver = (entries: IntersectionObserverEntry[]) => {
		const [entry] = entries;
		if (entry.isIntersecting && !hasAppeared) {
			setOpacity(1);
			setHasAppeared(true);
		}
	};

	useEffect(() => {
		const getText = () => {
			const screenWidth = window.innerWidth;
			if (screenWidth > 1024) setText(textDesktop);

			if (screenWidth < 1024) setText(textMobile);
		};
		getText();

		window.addEventListener('resize', getText);
		return () => {
			window.removeEventListener('resize', getText);
		};
	}, []);

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.1,
		};
		const observer = new IntersectionObserver(handleObserver, options);

		if (textRef.current) {
			observer.observe(textRef.current);
		}

		return () => {
			if (textRef.current) {
				observer.unobserve(textRef.current);
			}
		};
	}, []);

	return (
		<span style={{ display: 'block' }} ref={textRef}>
			{textEditor}
		</span>
	);
};

export default TextApper;
