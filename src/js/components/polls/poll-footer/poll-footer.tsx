import React from 'react';
import styles from './poll-footer.module.scss';
import ButtonForward from '../poll-buttons/button-forward';
import ButtonBackward from '../poll-buttons/button-backward';
import ButtonSend from '../poll-buttons/button-send';

interface Props {
  handlerBackwardClick: () => void;
  handlerForwardClick: () => void;
  handlerSendClick?: () => void & typeof defaultProps.handlerSendClick;
}

const defaultProps = {
  handlerSendClick: null,
};

const PollFooter = ({ ...props }: Props): JSX.Element => {
  const { handlerBackwardClick, handlerForwardClick, handlerSendClick } = props;
  return (
    <div className={styles.footer}>
      <ButtonBackward handlerClick={handlerBackwardClick} />
      <ButtonForward handlerClick={handlerForwardClick} />
      {handlerSendClick ? <ButtonSend handlerClick={handlerSendClick} /> : null}
    </div>
  );
};

PollFooter.defaultProps = defaultProps;

export default PollFooter;
