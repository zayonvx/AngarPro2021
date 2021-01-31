import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './preview-list.module.scss';
import { projects, projectsOrder } from '../../database/gallery-base';
import { setPreviewSize } from '../../utils/functions';
import { IInitialState } from '../../../store/initial-state';
import store from '../../../store/store';
import { changePopupChildren, togglePopupVisible } from '../../../store/popup/actions';
import Gallery from '../gallery/gallery';

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

  const handlerOnClick = (event): void => {
    const e = event as MouseEvent;
    const project = e.currentTarget as Element;
    const projectID = project.id.slice(2);
    store.dispatch(togglePopupVisible(true));
    const layout = <Gallery projectID={projectID} />;
    store.dispatch(changePopupChildren(layout));
  };

  useEffect(() => {
    setPreviewSize();
  });
  //TODO need to add <picture>
  return (
    <ul className={`fadeIn ${styles.list}`}>
      {order.map((it) => {
        const { id } = projects[it - 1];
        const header = projects[it - 1].name;
        const text = projects[it - 1].location;
        return (
          <li className={`fadeIn ${styles.list_item} preview__list-item`} key={id}>
            <button className={styles.button} onClick={handlerOnClick} type="button" id={`gp${id}`}>
              <div className={`${styles.image_wrapper} preview__image-wrapper`}>
                <img
                  className={`${styles.image} preview__image`}
                  src={`/img/photos/gallery/preview/preview_${id}.jpg`}
                  alt="Превью фотогалереи"
                />
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

const mapState = (state: IInitialState) => ({
  collapsed: state.preview.collapsed,
  previewsInRow: state.preview.previewsInRow,
  previewsRows: state.preview.previewsRows,
});

export default connect(mapState)(PreviewList);
