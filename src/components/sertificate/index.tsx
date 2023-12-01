import Image from 'next/image';
import styles from './sertificate.module.sass';
import sertificateImg from 'public/sertificate/sertificate.png';

const Sertificate = () => {
	return (
		<section id='certificate' className={styles.sertificate}>
      <h2 className={styles.title}>СЕРТИФИКАТ В СТУДИЮ АВТОПОРТРЕТА </h2>
			<p className={styles.descr}>
				Оригинальный подарок для близких, друзей или коллег. Удивительный опыт фотосессии без фотографа точно
				запомнится. А классные фотографии будут приятным напоминанием об этом дне. <br/> <br/>Вы можете зайти к нам в гости
				в студия и приобрести сертификат или заказать его доставку. А также у нас есть online сертификаты
			</p>
			<div className={styles.imgContainer}>
				<Image className={styles.img} quality={90} fill src={sertificateImg} alt='автопортрет' />
			</div>
		</section>
	);
};

export default Sertificate;
