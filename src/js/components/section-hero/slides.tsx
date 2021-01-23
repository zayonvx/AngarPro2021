import React from 'react';
import styles from './slides.module.scss';
import ButtonCalculator from './button-calculator';
import ButtonQuiz from './button-quiz';

interface PropsSlides {
  fileName: string;
  masterText: string;
  slaveTextTop: string;
  slaveTextBottom: string;
  id: string;
  anim: boolean;
}

const Slides = ({ ...props }: PropsSlides): JSX.Element => {
  const { fileName } = props;
  const { masterText } = props;
  const { slaveTextTop } = props;
  const { slaveTextBottom } = props;
  const { id } = props;
  const { anim } = props;

  const animText = anim ? 'fadeInUp' : 'with_animation';
  const animButtons = anim ? 'fadeIn' : 'with_animation';
  const style = {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundImage: `url(${fileName})`,
  };

  return (
    <div className={styles.slide} id={id} style={style}>
      <div className={styles.wrapper}>
        <h2 className={`${styles.masterText} ${styles.animated} ${animText}`} id={`${id}Master`}>
          {masterText}
        </h2>
        <p className={`${styles.slaveText} ${styles.animated} ${animText}`} id={`${id}Slave`}>
          {slaveTextTop}
          <br />
          {slaveTextBottom}
        </p>
        <div className={`${styles.buttonWrapper} ${styles.animated} ${animButtons}`} id={`${id}Buttons`}>
          <ButtonQuiz />
          <ButtonCalculator />
        </div>
      </div>
    </div>
  );
};

export default Slides;
