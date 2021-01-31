import React from 'react';
import styles from './input-text-list.module.scss';
import TextInput from './text-input/text-input';

interface Props {
  inputs: { id: string; legend: string; placeHolder: string; value: string }[];
  handlerOnChange: (evt) => void;
}

const InputTextList = ({ ...props }: Props): JSX.Element => {
  const { inputs } = props;
  const { handlerOnChange } = props;
  return (
    <ul className={styles.list}>
      {inputs.map((it) => (
        <li className={styles.listItem} key={it.id}>
          <TextInput input={it} handlerOnChange={handlerOnChange} />
        </li>
      ))}
    </ul>
  );
};

export default InputTextList;
