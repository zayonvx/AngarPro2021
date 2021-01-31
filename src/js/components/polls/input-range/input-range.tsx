import React from 'react';
import styles from './input-range.module.scss';

interface Props {
  params: { min: number; max: number; step: number };
  value: number;
  prefix: string;
  suffix: string;
  handlerRangeChange: (evt) => void;
}

const InputRange = ({ ...props }: Props): JSX.Element => {
  const { params } = props;
  const { min, max, step } = params;
  const { value } = props;
  const { prefix } = props;
  const { suffix } = props;
  const { handlerRangeChange } = props;
  return (
    <div className={styles.wrapper}>
      <div id="rangeValue" className={styles.data_field}>
        {`${prefix}${String(value)}${suffix}`}
      </div>
      <input
        type="range"
        className={styles.input}
        min={min}
        max={max}
        step={step}
        onChange={handlerRangeChange}
        defaultValue={value}
      />
      <p className={`${styles.text} ${styles.textMin}`}>{`${min} м`}</p>
      <p className={`${styles.text} ${styles.textMax}`}>{`${max} м`}</p>
    </div>
  );
};

export default InputRange;
