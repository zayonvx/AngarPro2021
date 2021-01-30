import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './nav-menu.module.scss';
import { menuList } from './nav-menu-const';

interface Props {
  visible: boolean;
}

const NavMenu = ({ ...props }: Props): JSX.Element => {
  const { visible } = props;
  const [height, setHeight] = useState('0');
  useEffect(() => {
    setHeight(` ${String(document.getElementById('navMenu').offsetHeight)}px`);
  }, [height]);
  const styleRow = visible ? { height } : { height: '0' };
  const styleNavMenu = visible ? { transform: 'rotateX(0)' } : { transform: 'rotateX(90deg)' };

  const getMenuList = () => (
    <ul className={styles.list}>
      {menuList.map((it) => (
        <li className={styles.listItem} key={it.id}>
          <Link href={it.link}>
            <a className={styles.link}>
              <span>{it.text}</span>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={styles.row} style={styleRow}>
      <div id="navMenu" className={styles.wrapper} style={styleNavMenu}>
        {getMenuList()}
      </div>
    </div>
  );
};

export default NavMenu;
