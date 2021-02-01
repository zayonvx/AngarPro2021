import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PageSubtitle from '../../page-subtitle/page-subtitle';
import PollRadioList from '../../radio-list/poll-radio-list';
import store from '../../../../../store/store';
import { buildingChangeSandwichType } from '../../../../../store/building/actions';
import { IInitialState } from '../../../../../store/types';

interface Props {
  sandwichType: number;
}

const QuizPage002 = ({ ...props }: Props): JSX.Element => {
  const { sandwichType } = props;
  const radio = [
    { id: '001', text: 'Минеральная вата', checked: sandwichType === 1 },
    { id: '002', text: 'ПИР - полиизоцианурат', checked: sandwichType === 2 },
    { id: '003', text: 'Пенополистирол', checked: sandwichType === 3 },
  ];
  const handlerClick = (evt: MouseEvent): void => {
    const e = evt.currentTarget as Element;
    const sandwichId = Number(e.id);
    store.dispatch(buildingChangeSandwichType(sandwichId));
  };

  useEffect(() => {
    const buttonForward = document.getElementById('buttonForward');
    if (sandwichType === 0) {
      buttonForward.classList.add('button__accent--disabled');
    } else {
      buttonForward.classList.remove('button__accent--disabled');
    }
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
      <PageSubtitle text="Выберите тип утеплителя седвич-панели" />
      <PollRadioList radio={radio} handlerOnClick={handlerClick} />
    </div>
  );
};

const mapState = (state: IInitialState) => ({
  sandwichType: state.building.sandwichType,
});

export default connect(mapState)(QuizPage002);
