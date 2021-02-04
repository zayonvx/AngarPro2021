import React from 'react';
import styles from './input-range.module.scss';

interface Props {
  params: { min: number; max: number; step: number };
  value: number;
  prefix: string;
  suffix: string;
  handlerRangeChange: (evt) => void;
  id?: string & typeof defaultProps.id;
  legend?: string & typeof defaultProps.legend;
}
const defaultProps = {
  id: '',
  legend: '',
};

const InputRange = ({ ...props }: Props): JSX.Element => {
  const { params } = props;
  const { min, max, step } = params;
  const { value, prefix, suffix, handlerRangeChange, id, legend } = props;

  const currentValue = value === 0 ? (max + min) / 2 : value;

  return (
    <div className={styles.wrapper}>
      {legend ? <p className="legend__input">{legend}</p> : null}
      <div
        className={styles.container}
        style={legend ? { border: 'solid 1px', paddingBottom: '1rem', backgroundColor: 'whitesmoke' } : null}
      >
        <div
          id="rangeValue"
          className={styles.data_field}
          style={legend ? { fontSize: '2rem', marginBottom: '1rem' } : null}
        >
          {`${prefix}${String(currentValue)}${suffix}`}
        </div>
        <input
          type="range"
          className={styles.input}
          min={min}
          max={max}
          step={step}
          onChange={handlerRangeChange}
          value={currentValue}
          id={id}
        />
        <div className={styles.textContainer}>
          <p className={`${styles.text} ${styles.textMin}`}>{`${min} м`}</p>
          <p className={`${styles.text} ${styles.textMax}`}>{`${max} м`}</p>
        </div>
      </div>
    </div>
  );
};

InputRange.defaultProps = defaultProps;

export default InputRange;
