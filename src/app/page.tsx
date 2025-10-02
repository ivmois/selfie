import styles from "@/styles/home.module.sass";
import { Hero } from "@/modules/Hero/Hero";
import { About } from "@/modules/About/About";
import { Stages } from "@/modules/Stages/Stages";
import { Price } from "@/modules/Price/Price";
import { Sertificate } from "@/modules/Sertificate/Sertificate";
import { Contacts } from "@/modules/Contacts/Contacts";
import { Header } from "@/modules/Header/Header";
import { Footer } from "@/modules/Footer/Footer";
import { CookieNotific } from "@/modules/CookieNotific/CookieNotific";

export default function Home() {
  return (
    <>
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
      <CookieNotific />
    </>
  );
}
