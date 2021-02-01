import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PollRadioList from '../../radio-list/poll-radio-list';
import store from '../../../../../store/store';
import PageSubtitle from '../../page-subtitle/page-subtitle';
import { buildingChangeTentType } from '../../../../../store/building/actions';
import { IInitialState } from '../../../../../store/types';

interface Props {
  tentType: number;
}

const QuizPage003 = ({ ...props }: Props): JSX.Element => {
  const { tentType } = props;

  const radio = [
    { id: '001', text: 'холодный тент', checked: tentType === 1 },
    { id: '002', text: 'тент с утеплителем', checked: tentType === 2 },
  ];
  const handlerClick = (evt: MouseEvent): void => {
    const e = evt.currentTarget as Element;
    const tentId = Number(e.id);
    store.dispatch(buildingChangeTentType(tentId));
  };
  useEffect(() => {
    const buttonForward = document.getElementById('buttonForward');
    if (tentType === 0) {
      buttonForward.classList.add('button__accent--disabled');
    } else {
      buttonForward.classList.remove('button__accent--disabled');
    }
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
      <PageSubtitle text="Выберите тип тентового покрытия" />
      <PollRadioList radio={radio} handlerOnClick={handlerClick} />
    </div>
  );
};

const mapState = (state: IInitialState) => ({
  tentType: state.building.tentType,
});

export default connect(mapState)(QuizPage003);
