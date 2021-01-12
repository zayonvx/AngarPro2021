import React, { useEffect, useState } from 'react';
import styles from './nav-menu.module.scss';
import { menuList } from './nav-menu-const';

interface props {
  visible: boolean;
}

const NavMenu = ({ ...props }: props): JSX.Element => {
  const { visible } = props;
  const [height, setHeight] = useState('0');
  useEffect(() => {
    setHeight(' ' + String(document.getElementById('navMenu').offsetHeight) + 'px');
    console.log(height);
  }, [height]);
  const styleRow = visible ? { height: height } : { height: '0' };
  const styleNavMenu = visible ? { transform: 'rotateX(0)' } : { transform: 'rotateX(90deg)' };

  const getMenuList = () => {
    return (
      <ul className={styles.list}>
        {menuList.map((it) => {
          return (
            <li className={styles.listItem} key={it.id}>
              <a href={it.link} className={styles.link}>
                <span>{it.text}</span>
              </a>
            </li>
          );
        })}
      </ul>
    );
  };
  console.log(styleRow);

  return (
    <div className={styles.row} style={styleRow}>
      <div id={'navMenu'} className={styles.wrapper} style={styleNavMenu}>
        {getMenuList()}
      </div>
    </div>
  );
};

export default NavMenu;
