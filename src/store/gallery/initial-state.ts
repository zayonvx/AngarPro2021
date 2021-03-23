import { IGalleryState } from './types';

const initialState: IGalleryState = {
  gallery: {
    project: { id: 0, photos: [], coordinates: [], description: '', location: '', name: '' },
    mapVisible: false,
    visible: false,
  },
};

export default initialState;
