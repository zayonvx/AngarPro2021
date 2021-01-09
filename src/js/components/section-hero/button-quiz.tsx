import React from 'react';

export const ButtonQuiz = () => {
  const handlerOnClick = () => {
    return null;
  };

  return (
    <button className={'button button--transparent'} style={{ marginRight: '0.5rem' }} onClick={handlerOnClick}>
      <span className="button__text">запрос</span>
      <i className="far fa-arrow-right button__icon" />
    </button>
  );
};
