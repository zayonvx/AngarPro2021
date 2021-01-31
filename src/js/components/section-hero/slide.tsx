import React, { SyntheticEvent, useEffect, useRef } from 'react';
import styles from './slide.module.scss';
import ButtonCalculator from './button-calculator';
import ButtonQuiz from './button-quiz';
import { slides } from '../../database/slides';
import store from '../../../store/store';
import { toggleLoadSlide } from '../../../store/loaded/actions';

interface PropsSlides {
  fileName: string;
  masterText: string;
  slaveTextTop: string;
  slaveTextBottom: string;
  id: string;
  anim: boolean;
  alt: string;
}

const Slide = ({ ...props }: PropsSlides): JSX.Element => {
  const { fileName } = props;
  const { masterText } = props;
  const { slaveTextTop } = props;
  const { slaveTextBottom } = props;
  const { id } = props;
  const { anim } = props;
  const { alt } = props;
  const image: React.Ref<HTMLImageElement> = useRef(null);

  const animText = anim ? 'fadeInUp' : 'with_animation';
  const animButtons = anim ? 'fadeIn' : 'with_animation';

  const handlerLoad = (evt: SyntheticEvent) => {
    const img = evt.currentTarget;
    if (img.id === slides[0].id) {
      store.dispatch(toggleLoadSlide(true));
    }
  };

  useEffect(() => {
    image.current.src = fileName;
  });
  // TODO need to add <picture>
  return (
    <div className={styles.slide}>
      <img src="" className={styles.image} onLoad={handlerLoad} id={id} alt={alt} ref={image} />
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

export default Slide;
