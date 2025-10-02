import { Container } from "../Container/Container";
import { Stage } from "./Stage/Stage";
import styles from "./stages.module.sass";

const stagesList = [
  {
    id: 1,
    title: "Бронирование",
    text: "Тебе нужно выбрать дату/время, фон и какими будут фотографии - в цвете или чёрно-белые.",
  },
  {
    id: 2,
    title: "Инструктаж",
    text: "Мы встретим вас и покажем как все работает, где встать и как выстроить кадр. Объясним как пользоваться пультом и музыкальной колонкой.",
  },
  {
    id: 3,
    title: "Съемка",
    text: "Смотришь в зеркало, выбираешь удачный ракурс, нажимаешь на пульт и делаешь снимок. Фотографии получаются точь-в-точь как ты видишь себя в отражении. На плэйбэк - мониторе ты сразу же видишь результат фото в обработке. Количество кадров не ограничено.",
  },
  {
    id: 4,
    title: "Результат",
    text: "Фотографии обрабатываются автоматически, в течение суток мы загрузим готовые фото в облачное хранилище и вышлем ссылку.",
  },
];

export const Stages = () => {
  return (
    <section className={styles.section} id="shooting">
      <Container>
        <h2 className={styles.title}>КАК ПРОХОДИТ СЪЕМКА </h2>
        <ul className={styles.list}>
          {stagesList.map((stage) => (
            <Stage
              key={stage.id}
              number={stage.id}
              title={stage.title}
              text={stage.text}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
};
