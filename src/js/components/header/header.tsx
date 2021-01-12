import React from 'react';
import styles from './header.module.scss';
import Logo from './logo';

const Header = (): JSX.Element => {
  return (
    <header id="header" className={styles.header}>
      <div className={styles.container}>
        <div className={styles.row_fluid}>
          <div className={styles.menu_burger}>
            <i className="far fa-bars" />
          </div>
          <nav>
            <ul className={styles.nav_menu_list}>
              <li className={styles.nav_menu_list_item}>
                <a href={'#'} className={styles.nav_menu_link}>
                  портфолио
                </a>
              </li>
              <li className={styles.nav_menu_list_item}>
                <a href={'#'} className={styles.nav_menu_link}>
                  о нас
                </a>
              </li>
              <li className={styles.nav_menu_list_item}>
                <a href={'#'} className={styles.nav_menu_link}>
                  контакты
                </a>
              </li>
            </ul>
          </nav>
          <div className={styles.logo} role="img" aria-label="Логотип АнгарПро">
            <Logo />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
