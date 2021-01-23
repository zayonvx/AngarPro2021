import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import styles from './load-more-button.module.scss';
import store from '../../../store/store';
import { togglePreviewCollapsed } from '../../../store/preview/actions';
import { IInitialState } from '../../../store/initial-state';

const mapState = (state: IInitialState) => ({ visible: state.preview.collapsed });
const connector = connect(mapState);
type StateProps = ConnectedProps<typeof connector>;

const LoadMoreButton = ({ ...props }: StateProps): JSX.Element => {
  const { visible } = props;
  const onClick = () => {
    store.dispatch(togglePreviewCollapsed(!visible));
  };
  const text = visible ? 'показать все' : 'свернуть';

  return (
    <button className={`button button--accent ${styles.loadMore}`} type="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default connector(LoadMoreButton);
