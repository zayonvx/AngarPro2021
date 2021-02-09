import React from 'react';
import styles from './choose.module.scss';

const texts = {
  h4: 'Почему выбирают нас',
  h5: 'внимательность, качество, искренность',
  text1:
    'При строительстве важно иметь надежного подрядчика, ведь Заказчик тратит средства и получает отложенный по времени результат.',
  text2:
    'Наш подход к работе характерен тем, что мы видим свою главную задачу в удовлетворении требований заказчика и эффективном решении задачи. Попробуйте поработать с нами и Вы. Мы обещаем открытость, честность и профессиональное отношение в работе.',
};

const imagePathPrefix = '/img/system/partnership-';

const Choose = (): JSX.Element => (
  <section id="choose" className={styles.choose}>
    <div className={styles.wrapper}>
      <div className={styles.image_container}>
        <picture>
          <source type="image/webp" srcSet={`${imagePathPrefix}1x.webp, ${imagePathPrefix}2x.webp 2x`} />
          <img
            className={styles.image}
            srcSet={`${imagePathPrefix}1x.jpg, ${imagePathPrefix}2x.jpg 2x`}
            alt="Иллюстрация почему выбирают нас"
          />
        </picture>
      </div>
      <div className={styles.text_container}>
        <h4 className={styles.header_main}>{texts.h4}</h4>
        <h5 className={styles.header_additional}>{texts.h5}</h5>
        <p className={styles.text}>{texts.text1}</p>
        <p className={styles.text}>{texts.text2}</p>
      </div>
    </div>
  </section>
);

export default Choose;
