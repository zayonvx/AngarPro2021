import React from 'react';
import styles from './advantages.module.scss';

const adv = [
  {
    id: '001',
    icon: 'fal fa-drafting-compass',
    header: 'Проектирование',
    text: 'Быстро и эффективно спроектируем здание удовлетворяющее Вашим требованиям',
    link: '#',
  },
  {
    id: '002',
    icon: 'fal fa-industry-alt',
    header: 'Изготовление',
    text: 'Качественное производство продукции - наша главная цель. Изготовление каркасов и ограждений.',
    link: '#',
  },
  {
    id: '003',
    icon: 'fal fa-warehouse',
    header: 'Монтаж',
    text: 'Комплексный подход к проектированию и производству - это высокие скорость и качество при монтаже',
    link: '#',
  },
  {
    id: '004',
    icon: 'fal fa-award',
    header: 'Цены',
    text:
      'Наш подход к формированию цены, надеемся, Вас приятно удивит. Попробуйте наш калькулятор или оставьте заявку.',
    link: '#',
  },
];

const Advantages = (): JSX.Element => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      {adv.map((it) => (
        <div className={styles.avantage} key={it.id}>
          <div className={styles.btn_wrapper}>
            <button className={styles.button} type="button">
              <span className={it.icon} />
            </button>
          </div>
          <h4 className={styles.header}>
            <a href={it.link} className={styles.link}>
              {it.header}
            </a>
          </h4>
          <p className={styles.text}>{it.text}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Advantages;
