import styles from './MyInput.module.scss';

// компонент кастомного Input для возможности переиспользования
const MyInput = ({ ...props }) => {
  return (
    <input
      className={styles.input}
      {...props}
    />
  );
};

export default MyInput;
