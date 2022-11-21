import MyButton from '../UI/Button';
import MyInput from '../UI/Input';

import { ModalProp } from '../../@types/modal';

import styles from './AddNote.module.scss';
import React from 'react';

const AddNote: React.FC<ModalProp> = React.memo(({ isVisible, setIsVisible }) => {
  const classVisible = [styles.modal];
  if (isVisible) classVisible.push(styles.modal__active);

  const onAddNote = () => {
    console.log('Заметка добавлена');
    setIsVisible(!isVisible);
  };

  return (
    <div
      className={classVisible.join(' ')}
      onClick={() => setIsVisible(!isVisible)}>
      <div
        className={styles.modal__content}
        onClick={(e) => e.stopPropagation()}>
        <MyInput
          type={'text'}
          placeholder={'Введите название заметки'}
        />
        <MyInput
          type={'text'}
          placeholder={'Введите текст заметки'}
        />

        <MyButton onClick={() => onAddNote()}>Добавить заметку</MyButton>
      </div>
    </div>
  );
});

export default AddNote;
