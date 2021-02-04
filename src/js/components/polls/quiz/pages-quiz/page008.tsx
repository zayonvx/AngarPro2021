import React, { SyntheticEvent, useEffect } from 'react';
import { connect } from 'react-redux';
import PageSubtitle from '../../page-subtitle/page-subtitle';
import InputTextList from '../../input-text-list/input-text-list';
import store from '../../../../../store/store';
import { quizChangeMail, quizChangeName, quizChangeTel } from '../../../../../store/quiz/actions';
import { IQuizState } from '../../../../../store/quiz/types';

interface Props {
  name: string;
  mail: string;
  tel: string;
}

const QuizPage008 = ({ ...props }: Props): JSX.Element => {
  const { name } = props;
  const { mail } = props;
  const { tel } = props;
  const inputs = [
    { id: 'inputName', legend: 'Ваше имя', placeHolder: 'Имя', value: name },
    { id: 'inputMail', legend: 'E-mail для предложения', placeHolder: 'mail@mail.ru', value: mail },
    { id: 'inputTel', legend: 'Телефон для связи', placeHolder: '+7', value: tel },
  ];
  const handlerOnChange = (evt: SyntheticEvent) => {
    const e = evt.currentTarget as HTMLInputElement;
    const { value } = e;
    switch (e.id) {
      case 'inputName':
        store.dispatch(quizChangeName(value));
        break;
      case 'inputMail':
        store.dispatch(quizChangeMail(value));
        break;
      case 'inputTel':
        store.dispatch(quizChangeTel(value));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // TODO veryfications of inputs
    const buttonForward = document.getElementById('buttonSend');
    if (name === '' || mail === '' || tel === '') {
      buttonForward.classList.add('button__accent--disabled');
    } else {
      buttonForward.classList.remove('button__accent--disabled');
    }
  });

  return (
    <div className="popup__wrapper">
      <PageSubtitle text="Сообщите регион строительства" />
      <InputTextList inputs={inputs} handlerOnChange={handlerOnChange} />
    </div>
  );
};

const mapState = (state: IQuizState) => ({
  name: state.quiz.name,
  mail: state.quiz.mail,
  tel: state.quiz.tel,
});

export default connect(mapState)(QuizPage008);
