import styles from './MyInput.module.scss';

const MyInput = ({ ...props }) => {
  return (
    <input
      className={styles.input}
      {...props}
    />
  );
};

export default MyInput;
