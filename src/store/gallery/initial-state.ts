import { IGalleryState } from './types';

const initialState: IGalleryState = {
  gallery: {
    currentPhoto: '001',
    mapVisible: false,
    coordinates: [],
  },
};

export default initialState;
