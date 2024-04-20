import styles from '../styles/home.module.sass';
import Head from 'next/head';
import Layout from '../components/layout';
import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Contacts from '@/components/contacts';
import WidthDeviceContextProvider from '@/context/widthDeviceContext';
import Footer from '@/components/footer';
import Price from '@/components/price';
import Sertificate from '@/components/sertificate';
import Stages from '@/components/stages';

export default function Home() {
	return (
		<>
			<Head>
				<title>Фотостудия автопортрета Selfie в Воронеже</title>
				<meta
					name='description'
					content='Новый формат фотосъемки, где ты сам себе фотограф и модель. Перед вами только зеркало, а в руках пульт. Фото получаются точь-в-точь как в отражении.'
				/>
				<meta name='keywords' content='фотостудия, фотосессия, фотограф, фотостудия без фотографа, подарок друзьям, подарок коллегам, сертификат' />
				<meta property='og:url' content='https://selfiemuse.ru' />
				<meta property='og:title' content='SELFIE студия автопортрета' />
				<meta property='og:description' content='Новый формат фотосъемки, где ты сам себе фотограф и модель. Перед вами только зеркало, а в руках пульт. Фото получаются точь-в-точь как в отражении.' />
				<meta property='og:type' content='website' />
				<meta property='og:image' content='/logo.png' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta charSet='UTF-8' />
				<meta name='google-site-verification' content='zXgfSK_jX_bPyK572RzcrJvIwEW_OL0DVBceDYl6OtA' />
				<meta name='yandex-verification' content='a290518ac703bdc5' />
				<link rel='canonical' href='https://selfiemuse.ru' />
				<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
				<link rel='manifest' href='/site.webmanifest' />
			</Head>
			<WidthDeviceContextProvider>
				<Layout>
					<Header />
					<main className={styles.main}>
						<Hero />
						<About />
						<Stages />
						<Price />
						<Sertificate />
						<Contacts />
					</main>
					<Footer />
				</Layout>
			</WidthDeviceContextProvider>
		</>
	);
}
