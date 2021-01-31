import React from 'react';
import { ButtonOff } from './radio-button/radio-button-off';
import { ButtonOn } from './radio-button/radio-button-on';
import styles from './radio-input.module.scss';

interface Props {
  text: string;
  handlerOnClick: (evt) => void;
  checked: boolean;
  id: string;
}

const RadioInput = ({ ...props }: Props): JSX.Element => {
  const { text } = props;
  const { id } = props;
  const { handlerOnClick } = props;
  const { checked } = props;

  return (
    <button className={styles.button} type="button" onClick={handlerOnClick} id={id}>
      {checked ? <ButtonOn /> : <ButtonOff />}
      <p className={styles.text}>{text}</p>
    </button>
  );
};

export default RadioInput;
