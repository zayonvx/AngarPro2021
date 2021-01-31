import React from 'react';
import styles from './poll-radio-list.module.scss';
import RadioInput from './radio-input/radio-input';

interface Props {
  radio: { id: string; text: string; checked: boolean }[];
  handlerOnClick: (evt) => void;
}

const PollRadioList = ({ ...props }: Props): JSX.Element => {
  const { radio } = props;
  const { handlerOnClick } = props;
  return (
    <ul className={styles.list}>
      {radio.map((it) => (
        <li className={styles.listItem} key={it.id}>
          <RadioInput text={it.text} handlerOnClick={handlerOnClick} checked={it.checked} id={it.id} />
        </li>
      ))}
    </ul>
  );
};

export default PollRadioList;
