import React, { useState } from 'react';
import styles from './header.module.scss';
import Logo from './logo';
import NavMenu from './nav-menu';
import { menuList } from './nav-menu-const';

const Header = (): JSX.Element => {
  const [menuVisible, setMenuVisible] = useState(false);
  const handlerMenuButton = () => {
    setMenuVisible(!menuVisible);
  };

  const getMenuList = () => (
    <nav>
      <ul className={styles.list}>
        {menuList.map((it) => (
          <li className={styles.listItem} key={it.id}>
            <a href={it.link} className={styles.link}>
              <span>{it.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
  return (
    <header id="header" className={styles.header}>
      <div className={styles.container}>
        <button className={styles.menu_burger} type="button" onClick={handlerMenuButton}>
          <i className="far fa-bars" />
        </button>
        {getMenuList()}
        <div className={styles.logo} role="img" aria-label="Логотип АнгарПро">
          <Logo />
        </div>
      </div>
      <NavMenu visible={menuVisible} />
    </header>
  );
};

export default Header;
