import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Odometer = dynamic(import('react-odometerjs'), {
  ssr: false,
});

interface Props {
  valueEnd: number;
  id: string;
}

const isOnVisibleSpace = (element: Element): boolean => {
  const bodyHeight = window.innerHeight;
  const elemRect = element.getBoundingClientRect();
  const offset = elemRect.top; // - bodyRect.top;
  if (offset < 0) return false;
  return offset <= bodyHeight;
};

const OdometerElement = ({ ...props }: Props): JSX.Element => {
  const { valueEnd } = props;
  const { id } = props;
  const [odometerValue, setOdometerValue] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const element = document.getElementById(id);
      const visible = isOnVisibleSpace(element);
      if (visible && odometerValue === 0) {
        setTimeout(() => {
          setOdometerValue(() => valueEnd);
        }, 100);
      }
    });
  }, [id, odometerValue, valueEnd]);

  // @ts-ignore
  return <Odometer value={odometerValue} format="(.ddd),dd" duration={5000} />;
};

export default OdometerElement;
