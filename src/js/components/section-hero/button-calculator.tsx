import React from 'react';

export const ButtonCalculator = () => {
  const handlerOnClick = () => {
    return null;
  };

  return (
    <button className={'button button--accent'} style={{ marginLeft: '0.5rem' }} onClick={handlerOnClick}>
      <span className="button__text">калькулятор</span>
      <i className="far fa-arrow-right button__icon" />
    </button>
  );
};
