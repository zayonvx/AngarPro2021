import React from 'react';
import styles from './text-input.module.scss';

interface Props {
  input: { id: string; legend: string; placeHolder: string; value: string };
  handlerOnChange: (evt) => void;
}

const TextInput = ({ ...props }: Props): JSX.Element => {
  const { input } = props;
  const { handlerOnChange } = props;
  return (
    <>
      <fieldset className={styles.fieldSet}>
        <legend className={styles.legend}>{input.legend}</legend>
        <input
          className={styles.input}
          type="input"
          placeholder={input.placeHolder}
          id={input.id}
          onChange={handlerOnChange}
          defaultValue={input.value}
        />
      </fieldset>
    </>
  );
};

export default TextInput;
