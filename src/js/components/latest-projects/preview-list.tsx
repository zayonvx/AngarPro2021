import React, { SyntheticEvent, useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './preview-list.module.scss';
import { projects, projectsOrder } from '../../database/gallery-base';
import { setPreviewSize, setTrailingZeros } from '../../utils/functions';
import store from '../../../store/store';
import { changePopupChildren, togglePopupCloseable, togglePopupVisible } from '../../../store/popup/actions';
import Gallery from '../gallery/gallery';
import { IPreviewState } from '../../../store/preview/types';
import { changeProject } from '../../../store/gallery/actions';
// TODO add animation to hide/unhide all projects
interface Props {
  collapsed: boolean;
  previewsInRow: number;
  previewsRows: number;
}

const PreviewList = ({ ...props }: Props): JSX.Element => {
  const { collapsed } = props;
  const { previewsInRow } = props;
  const { previewsRows } = props;
  const orderLenght = previewsInRow * previewsRows;
  let order = projectsOrder;
  if (collapsed) {
    order = projectsOrder.slice(0, orderLenght);
  }

  const handlerOnClick = (evt: SyntheticEvent) => {
    const projectId = Number(evt.currentTarget.id);
    const project = projects.find((it) => it.id === projectId);
    store.dispatch(changeProject(project));
    store.dispatch(togglePopupCloseable(true));
    store.dispatch(togglePopupVisible(true));
    store.dispatch(changePopupChildren(<Gallery />));
  };

  useEffect(() => {
    setPreviewSize();
  });
  return (
    <ul className={`fadeIn ${styles.list}`}>
      {order.map((it) => {
        const { id } = projects[it - 1];
        const header = projects[it - 1].name;
        const text = projects[it - 1].location;
        const fileNameId = setTrailingZeros(id, 3);
        return (
          <li className={`fadeIn ${styles.list_item} preview__list-item`} key={id}>
            <button className={styles.button} onClick={handlerOnClick} type="button" id={String(id)}>
              <div className={`${styles.image_wrapper} preview__image-wrapper`}>
                <picture>
                  <source type="image/webp" srcSet={`/img/photos/gallery/preview/preview_${fileNameId}.webp`} />
                  <img
                    className={`${styles.image} preview__image`}
                    src={`/img/photos/gallery/preview/preview_${id}.jpg`}
                    alt="Превью фотогалереи"
                  />
                </picture>
                <div className={styles.triangle} />
              </div>

              <div className={styles.description_wrapper}>
                <h5 className={styles.header}>
                  <span className={styles.link}>{header}</span>
                </h5>
                <p className={styles.text}>{text}</p>
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

const mapState = (state: IPreviewState) => ({
  collapsed: state.preview.collapsed,
  previewsInRow: state.preview.previewsInRow,
  previewsRows: state.preview.previewsRows,
});

export default connect(mapState)(PreviewList);
