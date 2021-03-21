import React from 'react';
import { connect } from 'react-redux';
import SwiperCore, { Navigation, Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './gallery.module.scss';
import store from '../../../store/store';
import { changeCurrentPhoto } from '../../../store/gallery/actions';
import Footer from './footer/footer';
import ObjectMap from './object-map/object-map';
import ModalHeader from '../modal-header/modal-header';
import { togglePopupVisible } from '../../../store/popup/actions';
import { IGalleryState } from '../../../store/gallery/types';
import Image from './image';
import NavigationPrev from '../section-hero/navigation-prev';
import NavigationNext from '../section-hero/navigation-next';

SwiperCore.use([Navigation, Lazy]);

interface Props {
  visibleMap: boolean;
}
// TODO add swipes for slider
// TODO add animations to gallery
// TODO add descriptions to photos
const Gallery = ({ ...props }: Props): JSX.Element => {
  const { project } = store.getState().gallery;
  const { visibleMap } = props;

  const handlerClose = () => {
    store.dispatch(changeCurrentPhoto(0));
    store.dispatch(togglePopupVisible(false));
  };

  return (
    <>
      <div className={styles.wrapper}>
        <Swiper
          tag="div"
          wrapperTag="ul"
          navigation={{
            prevEl: '.button__prev',
            nextEl: '.button__next',
          }}
          preloadImages={false}
          lazy={{ loadPrevNext: true }}
        >
          {project.photos.map((it) => (
            <SwiperSlide tag="li" key={it}>
              <Image imageNumber={it} projectNumber={project.id} />
            </SwiperSlide>
          ))}
          <NavigationPrev />
          <NavigationNext />
        </Swiper>

        <ModalHeader header={project.name} buttonMapVisible zedIndex={300} handlerClose={handlerClose} />
        <Footer />
        <ObjectMap visible={visibleMap} />
      </div>
    </>
  );
};

const mapState = (state: IGalleryState) => ({
  visibleMap: state.gallery.mapVisible,
  project: state.gallery.project,
});

export default connect(mapState)(Gallery);
