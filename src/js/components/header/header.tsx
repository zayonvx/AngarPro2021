import React from 'react';
import styles from './header.module.scss';

const Header = (): JSX.Element => {
  return (
    <header id="header" className={styles.header}>
      <div className={styles.container}>
        <div className={styles.row_fluid}>
          <div className={styles.menu_burger}>
            <i className="far fa-bars" />
          </div>
          <div className={styles.logo}>logo</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
