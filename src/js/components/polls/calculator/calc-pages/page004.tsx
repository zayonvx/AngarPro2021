import React, { useEffect } from 'react';
import styles from './page004.module.scss';
import PriceList from '../../../../features/calculator/classes/price-list/price-list';
import BuildingDescription from './building-description/building-description';
import CalculatorPost from '../../../../features/calculator/classes/posts/calculator-post';

const CalcPage004 = (): JSX.Element => {
  const priceList = new PriceList();

  useEffect(() => {
    const post = new CalculatorPost();
    post.postXHR();
  });

  return (
    <>
      <BuildingDescription />
      <table className={styles.table}>
        <thead>
          <tr className={`${styles.rowHeader} ${styles.rowAccent}`}>
            <th className={`${styles.cellHeader} ${styles.cellAlignLeft}`}>Наименование</th>
            <th className={`${styles.cellHeader} ${styles.cellAlignLeft}`}>Описание</th>
            <th className={`${styles.cellHeader} ${styles.cellAlignRight}`}>Цена, руб.</th>
          </tr>
        </thead>
        <tbody>
          {priceList.list.map((it) => {
            const textPosition = it.posName;
            const textDescription = it.posDescription;
            const textCost = it.posCost.toLocaleString(undefined);
            return (
              <tr className={styles.rowData} key={it.posName}>
                <th className={`${styles.cellData} ${styles.cellAlignLeft} ${styles.cellBottomBordered}`}>
                  {textPosition}
                </th>
                <th className={`${styles.cellData} ${styles.cellAlignLeft} ${styles.cellBottomBordered}`}>
                  {textDescription}
                </th>
                <th className={`${styles.cellData} ${styles.cellAlignRight} ${styles.cellBottomBordered}`}>
                  {textCost}
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CalcPage004;
