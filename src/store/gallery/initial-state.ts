import { IGalleryState } from './types';

const initialState: IGalleryState = {
  gallery: {
    currentPhoto: '001',
    mapVisible: false,
    coordinates: [],
    loaded: false,
  },
};

export default initialState;
