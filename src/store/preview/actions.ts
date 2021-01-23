import {
  CHANGE_PREVIEWS_IN_ROW,
  CHANGE_PREVIEWS_ROWS,
  PreviewActionsCreators,
  TOGGLE_PREVIEW_COLLAPSED,
} from './types';

export const togglePreviewCollapsed = (value: boolean): PreviewActionsCreators => ({
  type: TOGGLE_PREVIEW_COLLAPSED,
  payload: value,
});

export const changePreviewsInRow = (value: number): PreviewActionsCreators => ({
  type: CHANGE_PREVIEWS_IN_ROW,
  payload: value,
});

export const changePreviewsRows = (value: number): PreviewActionsCreators => ({
  type: CHANGE_PREVIEWS_ROWS,
  payload: value,
});
