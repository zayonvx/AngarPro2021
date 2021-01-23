export const TOGGLE_PREVIEW_COLLAPSED = 'TOGGLE_PREVIEW_COLLAPSED';
export const CHANGE_PREVIEWS_IN_ROW = 'CHANGE_PREVIEWS_IN_ROW';
export const CHANGE_PREVIEWS_ROWS = 'CHANGE_PREVIEWS_ROWS';

export interface PreviewState {
  collapsed: boolean;
  previewsInRow: number;
  previewsRows: number;
}

interface TogglePreviewCollapsed {
  type: typeof TOGGLE_PREVIEW_COLLAPSED;
  payload: boolean;
}
interface ChangePreviewsInRow {
  type: typeof CHANGE_PREVIEWS_IN_ROW;
  payload: number;
}
interface ChangePreviewsRows {
  type: typeof CHANGE_PREVIEWS_ROWS;
  payload: number;
}

export type PreviewActionsCreators = TogglePreviewCollapsed | ChangePreviewsInRow | ChangePreviewsRows;
