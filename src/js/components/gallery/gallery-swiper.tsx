import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Lazy, Navigation, Pagination } from 'swiper';
import GalleryImage from './gallery-image';
import NavigationPrev from '../section-hero/navigation-prev';
import NavigationNext from '../section-hero/navigation-next';
import { IProject } from '../../database/gallery-base';

SwiperCore.use([Navigation, Lazy, Pagination]);

interface Props {
  project: IProject;
}

const GallerySwiper = ({ ...props }: Props): JSX.Element => {
  const { project } = props;
  return (
    <Swiper
      tag="section"
      wrapperTag="ul"
      pagination={{ clickable: true }}
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
          <GalleryImage imageNumber={it} projectNumber={project.id} />
        </SwiperSlide>
      ))}

      <NavigationPrev />
      <NavigationNext />
    </Swiper>
  );
};

export default GallerySwiper;
