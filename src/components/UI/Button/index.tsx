import React from 'react';

import styles from './MyButton.module.scss';

type MyButtonProps = {
  children: string;
  onClick: () => void;
};

// компонент кастомного Button для возможности переиспользования
const MyButton = React.memo(({ children, ...props }: MyButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles.button__outline} ${styles.button__option}`}
      {...props}>
      <span>{children}</span>
    </button>
  );
});

export default MyButton;
