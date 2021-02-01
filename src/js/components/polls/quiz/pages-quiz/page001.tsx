import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PollRadioList from '../../radio-list/poll-radio-list';
import store from '../../../../../store/store';
import PageSubtitle from '../../page-subtitle/page-subtitle';
import { buildingChangeFences } from '../../../../../store/building/actions';
import { IInitialState } from '../../../../../store/types';

interface Props {
  fences: number;
}

const QuizPage001 = ({ ...props }: Props): JSX.Element => {
  const { fences } = props;

  const radio = [
    { id: '001', text: 'Сендвич панель', checked: fences === 1 },
    { id: '002', text: 'Профнастил', checked: fences === 2 },
    { id: '003', text: 'Тент', checked: fences === 3 },
  ];
  const handlerClick = (evt: MouseEvent): void => {
    const e = evt.currentTarget as Element;
    const fenceId = Number(e.id);
    store.dispatch(buildingChangeFences(fenceId));
  };
  useEffect(() => {
    const buttonForward = document.getElementById('buttonForward');
    if (fences === 0) {
      buttonForward.classList.add('button__accent--disabled');
    } else {
      buttonForward.classList.remove('button__accent--disabled');
    }
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
      <PageSubtitle text="Выберите материал кровли и стен" />
      <PollRadioList radio={radio} handlerOnClick={handlerClick} />
    </div>
  );
};

const mapState = (state: IInitialState) => ({
  fences: state.building.fences,
});

export default connect(mapState)(QuizPage001);
