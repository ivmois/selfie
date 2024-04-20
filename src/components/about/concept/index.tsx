import Image from 'next/image';
import styles from './concept.module.sass';

import processImg from 'public/concept/concept.webp';
import Container from '@/components/container';

const Concept = () => {
	return (
		<section className={styles.concept} id='about'>
			<Container>
				<div className={styles.content}>
					<h3 className={styles.title}>
						"Перед тобой только
						<br />
						большое&nbsp;зеркало&nbsp;и&nbsp;не&nbsp;видно&nbsp;камеры, а&nbsp;съемкой ты управляешь с помощью
						<br />
						маленького пульта"
					</h3>
					<div className={styles.imgContainer}>
						<Image className={styles.img} fill src={processImg} alt='автопортрет' />
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Concept;
