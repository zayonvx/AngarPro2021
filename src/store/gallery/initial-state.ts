import { IGalleryState } from './types';

const initialState: IGalleryState = {
  gallery: {
    project: { id: 0, photos: [], coordinates: [], description: '', location: '', name: '' },
    photoIndex: 0,
    mapVisible: false,
    loaded: false,
  },
};

export default initialState;
