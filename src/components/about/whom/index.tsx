import Container from '@/components/container';
import CardWhom from './cardWhom';
import styles from './whom.module.sass';

import terapy from 'public/whom-img/terapy.webp';
import classic from 'public/whom-img/classic.webp';
import rendezvous2 from 'public/whom-img/rendezvous2.webp';
import family from 'public/whom-img/family.webp';
import content from 'public/whom-img/content.webp';

const cardsWhom = [
  {
    id: 1,
    photo: classic,
    title: 'Классического портрета',
    text: 'Только ты и зеркало, никто не отвлекает и не смущает. Смотришь в зеркало, ищешь удачный ракурс, делаешь кадр.',
    bgColor: '#1a3066',
    color: '#ffffff'
  },
  {
    id: 2,
    photo: terapy,
    title: 'Фототерапии',
    text: 'Устрой свидание с самим собой, ведь фотография - это медитация в мгновении. Никакой игры, искусственных поз или указаний со стороны. Ты можешь полностью расслабиться, изучить свое тело, обрести уверенность и раскрыть свою уникальность.',
    bgColor: '#d0fcee',
  },
  {
    id: 3,
    photo: rendezvous2,
    title: 'Фотосвидания',
    text: 'У нас точно можно рассчитывать больше, чем на пару фото с любимым человеком. Можно подурачиться и повеселиться, зарядиться положительными эмоциями и получить отличные фотографии. На такую фотосессию согласятся даже самые брутальные мужчины!',
    bgColor: '#e84179',
    color: '#ffffff'

  },
  {
    id: 4,
    photo: family,
    title: 'Семейной фотосессии',
    text: 'Отличный повод всем собраться и провести время вместе! Сделать удачный общий портрет с родителями или с ребенком, который постоянно отвлекается',
    bgColor: '#ffdc73',
  },
  {
    id: 5,
    photo: content,
    title: 'Контент',
    text: 'В студии удобно и выгодно снять контент для бизнес аккаунтов, коллекции одежды для маркет-плейсов и интернет-магазинов.',
    bgColor: '#fecad1',
  },
];

const Whom = () => {
  return (
    <div className={styles.whom}>
      <h2 className={styles.title}>СТУДИЯ АВТОПОРТРЕТА ИДЕАЛЬНО ПОДХОДИТ ДЛЯ : </h2>
      <ul className={styles.cardList}>
        {cardsWhom.map((item) => (
          <CardWhom key={item.id} title={item.title} text={item.text} photo={item.photo} bgColor={item.bgColor} color={item.color}  />
        ))}
      </ul>
    </div>
  );
};

export default Whom;
