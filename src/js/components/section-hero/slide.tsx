import React, { SyntheticEvent, useEffect, useRef } from 'react';
import styles from './slide.module.scss';
import ButtonCalculator from './button-calculator';
import ButtonQuiz from './button-quiz';
import { slides } from '../../database/slides';
import store from '../../../store/store';
import { toggleLoadSlide } from '../../../store/loaded/actions';

interface PropsSlides {
  fileNamePrefix: string;
  masterText: string;
  slaveTextTop: string;
  slaveTextBottom: string;
  id: string;
  anim: boolean;
  alt: string;
}

const Slide = ({ ...props }: PropsSlides): JSX.Element => {
  const { fileNamePrefix } = props;
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
    image.current.src = `${fileNamePrefix}0818-1x.jpg`;
  });
  return (
    <div className={styles.slide}>
      <picture>
        <source
          media="(min-width: 1921px)"
          srcSet={`${fileNamePrefix}5120-1x.webp, ${fileNamePrefix}5120-2x.webp 2x`} // image 2560px
          type="image/webp"
        />
        <source
          media="(min-width: 1921px)"
          srcSet={`${fileNamePrefix}5120-1x.jpg, ${fileNamePrefix}5120-2x.jpg 2x`} // image 2560px
        />

        <source
          media="(min-width: 1281px)"
          srcSet={`${fileNamePrefix}3840-1x.webp, ${fileNamePrefix}3840-2x.webp 2x`} // image 1920px
          type="image/webp"
        />
        <source
          media="(min-width: 1281px)"
          srcSet={`${fileNamePrefix}3840-1x.jpg, ${fileNamePrefix}3840-2x.jpg 2x`} // image 1920px
        />

        <source
          media="(min-width: 769px)"
          srcSet={`${fileNamePrefix}2560-1x.webp, ${fileNamePrefix}2560-2x.webp 2x`} // image 1280px
          type="image/webp"
        />
        <source
          media="(min-width: 769px)"
          srcSet={`${fileNamePrefix}2560-1x.jpg, ${fileNamePrefix}2560-2x.jpg 2x`} // image 1280px
        />

        <source
          media="(min-width: 415px)"
          srcSet={`${fileNamePrefix}1536-1x.webp, ${fileNamePrefix}1536-2x.webp 2x`} // image 768px
          type="image/webp"
        />
        <source
          media="(min-width: 415px)"
          srcSet={`${fileNamePrefix}1536-1x.jpg, ${fileNamePrefix}1536-2x.jpg 2x`} // image 768px
        />

        <source
          srcSet={`${fileNamePrefix}0818-1x.webp, ${fileNamePrefix}0818-2x.webp 2x`} // image 768px
          type="image/webp"
        />

        <img
          src=""
          srcSet={`${fileNamePrefix}0818-2x.jpg 2x`}
          className={styles.image}
          onLoad={handlerLoad}
          id={id}
          alt={alt}
          ref={image}
        />
      </picture>
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
