import initialState from './initial-state';
import {
  CHANGE_PREVIEWS_IN_ROW,
  CHANGE_PREVIEWS_ROWS,
  IPreviewState,
  PreviewActionsCreators,
  TOGGLE_PREVIEW_COLLAPSED,
} from './types';

const previewRedusers = (state = initialState.preview, action: PreviewActionsCreators): IPreviewState['preview'] => {
  switch (action.type) {
    case TOGGLE_PREVIEW_COLLAPSED:
      return { ...state, collapsed: action.payload };
    case CHANGE_PREVIEWS_IN_ROW:
      return { ...state, previewsInRow: action.payload };
    case CHANGE_PREVIEWS_ROWS:
      return { ...state, previewsRows: action.payload };
    default:
      return state;
  }
};

export default previewRedusers;
