import React from 'react';

import styles from '../styles/Header.module.scss';

const Header = React.memo(() => {
  return (
    <div className={styles.header}>
      <div className='container'>
        <div>
          <h1>React Note</h1>
        </div>
      </div>
    </div>
  );
});

export default Header;
