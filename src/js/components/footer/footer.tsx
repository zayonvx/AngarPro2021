import React from 'react';
import styles from './footer.module.scss';
import { contactFactory, contactOffice } from '../../database/contact-data';

const getList = (array: { string: string; ID: string }[]) => array.map((it) => (
  <p className={styles.address_text} key={it.ID}>
    {it.string}
  </p>
));

const Footer = (): JSX.Element => (
  <div className={styles.footer}>
    <div className={styles.wrapper}>
      <div className={styles.data_wrapper}>
        <div className={styles.address_wrapper}>
          <h5 className={styles.address_title}>Юридическая информация</h5>
          {getList(contactOffice)}
        </div>
        <div className={styles.address_wrapper}>
          <h5 className={styles.address_title}>Основная производстводственная площадка</h5>
          {getList(contactFactory)}
        </div>
      </div>
      <div className={styles.bar}>
        <div>
          <span className={styles.bar_text}>&#169;2021. angarPro. dev.by </span>
          <a href="mailto:oneliner@vivaldi.net" className={styles.link}>
            rom
          </a>
        </div>
        <div>
          <span className={styles.bar_text}>mailto: </span>
          <a href="mailto:admin@angarpro.com" className={styles.link}>
            admin@angarpro.com
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
