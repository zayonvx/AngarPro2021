import React from 'react';
import { connect } from 'react-redux';
import SwiperCore, { Navigation, Lazy, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './gallery.module.scss';
import store from '../../../store/store';
import ObjectMap from './object-map/object-map';
import ModalHeader from '../modal-header/modal-header';
import { IGalleryState } from '../../../store/gallery/types';
import Image from './image';
import NavigationPrev from '../section-hero/navigation-prev';
import NavigationNext from '../section-hero/navigation-next';
import { IProject } from '../../database/gallery-base';
import { toggleBodyNoScroll } from '../../utils/functions';
import { galleryVisibleToggle } from '../../../store/gallery/actions';

SwiperCore.use([Navigation, Lazy, Pagination]);

interface Props {
  visible: boolean;
  project: IProject;
  mapVisible: boolean;
}

// TODO add swipes for slider
// TODO add animations to gallery
// TODO add descriptions to photos
const Gallery = ({ ...props }: Props): JSX.Element => {
  const { project, mapVisible, visible } = props;

  if (!visible) {
    return null;
  }

  const handlerClose = () => {
    store.dispatch(galleryVisibleToggle(false));
    toggleBodyNoScroll(false);
  };

  toggleBodyNoScroll(true);

  return (
    <div className={styles.popup}>
      <div className={styles.wrapper}>
        <Swiper
          tag="section"
          wrapperTag="ul"
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={{
            prevEl: '.button__prev',
            nextEl: '.button__next',
          }}
          preloadImages={false}
          lazy={{ loadPrevNext: true }}
          slidesPerView={1}
          loop
          grabCursor
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
        <ObjectMap visible={mapVisible} />
      </div>
    </div>
  );
};

const mapState = (state: IGalleryState) => ({
  visibleMap: state.gallery.mapVisible,
  project: state.gallery.project,
  visible: state.gallery.visible,
});

export default connect(mapState)(Gallery);
