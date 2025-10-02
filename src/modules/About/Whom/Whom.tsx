import { Container } from "@/modules/Container/Container";
import { CardWhom } from "./CardWhom/CardWhom";
import styles from "./whom.module.sass";

const cardsWhom = [
  {
    id: 1,
    photo: "/assets/whom-img/classic.webp",
    title: "Классического портрета",
    text: "Только ты и зеркало, никто не отвлекает и не смущает. Смотришь в зеркало, ищешь удачный ракурс, делаешь кадр.",
    bgColor: "#1a3066",
    color: "#ffffff",
  },
  {
    id: 2,
    photo: "/assets/whom-img/terapy.webp",
    title: "Фототерапии",
    text: "Устрой свидание с самим собой, ведь фотография - это медитация в мгновении. Никакой игры, искусственных поз или указаний со стороны. Ты можешь полностью расслабиться, изучить свое тело, обрести уверенность и раскрыть свою уникальность.",
    bgColor: "#d0fcee",
  },
  {
    id: 3,
    photo: "/assets/whom-img/rendezvous2.webp",
    title: "Фотосвидания",
    text: "У нас точно можно рассчитывать больше, чем на пару фото с любимым человеком. Можно подурачиться и повеселиться, зарядиться положительными эмоциями и получить отличные фотографии. На такую фотосессию согласятся даже самые брутальные мужчины!",
    bgColor: "#e84179",
    color: "#ffffff",
  },
  {
    id: 4,
    photo: "/assets/whom-img/family.webp",
    title: "Семейной фотосессии",
    text: "Отличный повод всем собраться и провести время вместе! Сделать удачный общий портрет с родителями или с ребенком, который постоянно отвлекается.",
    bgColor: "#ffdc73",
  },
  // {
  //   id: 5,
  //   photo: "/assets/whom-img/content.webp",
  //   title: "Контент",
  //   text: "В студии удобно и выгодно снять контент для бизнес аккаунтов, коллекции одежды для маркет-плейсов и интернет-магазинов.",
  //   bgColor: "#fecad1",
  // },
];

export const Whom = () => {
  return (
    <div className={styles.whom}>
      <Container>
        <h2 className={styles.title}>
          СТУДИЯ АВТОПОРТРЕТА
          <br />
          ИДЕАЛЬНО ПОДХОДИТ ДЛЯ
        </h2>
        <ul className={styles.cardList}>
          {cardsWhom.map((item) => (
            <CardWhom
              key={item.id}
              title={item.title}
              text={item.text}
              photo={item.photo}
              bgColor={item.bgColor}
              color={item.color}
            />
          ))}
        </ul>
      </Container>
    </div>
  );
};
