import React from 'react';
import styles from './page004.module.scss';
import PriceList from '../../../../features/calculator/classes/price-list/price-list';

const CalcPage004 = (): JSX.Element => {
  const priceList = new PriceList();

  return (
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
              <th className={`${styles.cellData} ${styles.cellAlignRight} ${styles.cellBottomBordered}`}>{textCost}</th>
            </tr>
          );
        })}
      </tbody>
      {/*      <tfoot>
        <tr className={`${styles.rowFooter} ${styles.rowAccent}`}>
          <th className={`${styles.cellFooter} ${styles.cellAlignLeft} `}>{tableTotal.text}</th>
          <th className={styles.cellFooter}> </th>
          <th className={`${styles.cellFooter} ${styles.cellAlignRight} `}>
            {tableTotal.summ.toLocaleString(undefined)}
          </th>
        </tr>
        <tr className={styles.rowFooter}>
          <th className={`${styles.cellFooter} ${styles.cellAlignLeft}`}>{totalSpecific.text}</th>
          <th className={`${styles.cellFooter} ${styles.cellAlignLeft}`}> </th>
          <th className={`${styles.cellFooter} ${styles.cellAlignRight}`}>
            {totalSpecific.cost.toLocaleString(undefined)}
          </th>
        </tr>
      </tfoot> */}
    </table>
  );
};

export default CalcPage004;
