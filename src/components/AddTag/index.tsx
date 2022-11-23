import React, { useState } from 'react';

import MyButton from '../UI/Button';
import MyInput from '../UI/Input';

import { AddTagProps } from '../../@types/types';

import styles from './AddTag.module.scss';

// компонент для добавления тега
const AddTag: React.FC<AddTagProps> = React.memo(({ addTag, isVisible, setIsVisible }) => {
  const [tag, setTag] = useState<string>(''); // состояние текста в Input

  // стили для отображения модального окна
  const classVisible = [styles.modal];
  if (isVisible) classVisible.push(styles.modal__active);

  // действия при нажатия кнопи "Добавить"
  const onAddNote = () => {
    const tagList = tag.match(/#\S*/g);

    if (tagList) {
      // добавление тегов в список
      tagList.forEach((tag) => {
        addTag({
          id: String(Date.now()),
          title: tag,
        });
      });
    }

    // зактыие окна и очиста Input
    setTag('');
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
          value={tag}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTag(e.target.value)}
          type={'text'}
          placeholder={'Введите название заметки'}
        />
        <p>
          *Для добавление тегов используйте #, для добавление нескольких тегов, пишите их через
          пробел
        </p>

        {tag && <MyButton onClick={() => onAddNote()}>Добавить тег</MyButton>}
      </div>
    </div>
  );
});

export default AddTag;
