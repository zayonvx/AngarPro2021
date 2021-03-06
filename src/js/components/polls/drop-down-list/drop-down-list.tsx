import React from 'react';
import styles from './drop-down-list.module.scss';

interface Props {
  legend?: string & typeof defaultProps.legend;
  array: Array<{ name: string; id: number }>;
  selected: number;
  handlerChange: (evt) => void;
  id?: string & typeof defaultProps.id;
}
const defaultProps = {
  id: '',
  legend: '',
};

const DropDownList = ({ ...props }: Props): JSX.Element => {
  const { legend, array, selected, handlerChange, id } = props;
  return (
    <div className={styles.wrapper}>
      {legend ? <p className="legend__input">{legend}</p> : null}
      <select className={styles.input} onChange={handlerChange} id={id}>
        {array.map((it) => (
          <option value={it.name} selected={it.id === selected} key={it.id}>
            {it.name}
          </option>
        ))}
      </select>
    </div>
  );
};

DropDownList.defaultProps = defaultProps;

export default DropDownList;
