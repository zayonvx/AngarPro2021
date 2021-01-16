import React from 'react';
import styles from './loading.module.scss';

interface Props {
  loaded: boolean;
}

const Loading = ({ ...props }: Props): JSX.Element => {
  const { loaded } = props;
  if (loaded) return null;
  return (
    <div className={styles.loading}>
      <i className="fas fa-spinner fa-spin" />
    </div>
  );
};

export default Loading;
