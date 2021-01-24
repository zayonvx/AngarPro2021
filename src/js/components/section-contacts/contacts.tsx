import React from 'react';
import styles from './contacts.module.scss';
import { contactEmails, contactPhones } from '../../database/contact-data';

const getList = (array: { string: string; link: string; ID: number }[]) =>
  array.map((it) => (
    <li className={styles.list_item} key={it.ID}>
      <a href={it.link} className={styles.link}>
        {it.string}
      </a>
    </li>
  ));

const Contacts = (): JSX.Element => (
  <section id="contacts" className={styles.contacts}>
    <div className={styles.wrapper}>
      <h4 className={styles.header}>Как с нами связаться</h4>
      <div className={styles.cards_wrapper}>
        <div className={styles.card}>
          <div className={styles.icon}>
            <span className="fal fa-phone-square-alt" />
          </div>
          <ul className={styles.list}>{getList(contactPhones)}</ul>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>
            <span className="fal fa-envelope" />
          </div>
          <div>
            <ul className={styles.list}>{getList(contactEmails)}</ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contacts;
