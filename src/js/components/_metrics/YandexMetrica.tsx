import React, { useEffect } from 'react';
import ym, { YMInitializer } from 'react-yandex-metrika';

const YandexMetrica = (): JSX.Element => {
  useEffect(() => {
    ym('hit');
  });
  return <YMInitializer accounts={[62751235]} options={{ webvisor: true }} />;
};

export default YandexMetrica;
