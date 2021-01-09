import styles from './slide-hero.module.scss';
import React from 'react';
import { ButtonCalculator } from './button-calculator';
import { ButtonQuiz } from './button-quiz';

interface props {
  fileName: string;
  masterText: string;
  slaveTextTop: string;
  slaveTextBottom: string;
  id: string;
  anim: boolean;
}

export const SlideHero = ({ ...props }: props): any => {
  const { fileName } = props;
  const { masterText } = props;
  const { slaveTextTop } = props;
  const { slaveTextBottom } = props;
  const { id } = props;
  const { anim } = props;

  const anim_text = anim ? 'fadeInUp' : 'with_animation';
  const anim_buttons = anim ? 'fadeIn' : 'with_animation';
  const style = {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundImage: 'url(' + fileName + ')',
  };

  return (
    <div className={styles.slide} id={id} style={style}>
      <div className={styles.wrapper}>
        <h1 className={styles.masterText + ' ' + styles.animated + ' ' + anim_text} id={id + 'Master'}>
          {masterText}
        </h1>
        <p className={styles.slaveText + ' ' + styles.animated + ' ' + anim_text} id={id + 'Slave'}>
          {slaveTextTop}
          <br />
          {slaveTextBottom}
        </p>
        <div className={styles.buttonWrapper + ' ' + styles.animated + ' ' + anim_buttons} id={id + 'Buttons'}>
          <ButtonQuiz />
          <ButtonCalculator />
        </div>
      </div>
    </div>
  );
};
