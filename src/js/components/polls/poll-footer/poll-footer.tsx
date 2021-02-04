import React from 'react';
import styles from './poll-footer.module.scss';
import ButtonForward from '../poll-buttons/button-forward';
import ButtonBackward from '../poll-buttons/button-backward';
import ButtonSend from '../poll-buttons/button-send';
import store from '../../../../store/store';

interface Props {
  handlerBackwardClick: () => void;
  handlerForwardClick: () => void;
  handlerSendClick?: () => void & typeof defaultProps.handlerSendClick;
}

const defaultProps = {
  handlerSendClick: null,
};
// TODO add arrows to buttons
const PollFooter = ({ ...props }: Props): JSX.Element => {
  const { handlerBackwardClick, handlerForwardClick, handlerSendClick } = props;
  return (
    <ul className={styles.footer}>
      {store.getState().popup.buttonBackVisible ? (
        <li className={styles.listItem}>
          <ButtonBackward handlerClick={handlerBackwardClick} />
        </li>
      ) : null}
      {store.getState().popup.buttonForwardVisible ? (
        <li className={styles.listItem}>
          <ButtonForward handlerClick={handlerForwardClick} />
        </li>
      ) : null}
      {store.getState().popup.buttonSendVisible ? (
        <li className={styles.listItem}>
          <ButtonSend handlerClick={handlerSendClick} />
        </li>
      ) : null}
    </ul>
  );
};

PollFooter.defaultProps = defaultProps;

export default PollFooter;
