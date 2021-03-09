import { IGalleryState } from './types';

const initialState: IGalleryState = {
  gallery: {
    currentPhoto: 0,
    mapVisible: false,
    coordinates: [],
    loaded: false,
  },
};

export default initialState;
