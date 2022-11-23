import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/Header.module.scss';

// компонент шапки приложения
const Header = React.memo(() => {
  return (
    <div className={styles.header}>
      <Link to={'/'}>
        <h1>React Note</h1>
      </Link>
    </div>
  );
});

export default Header;
