import React, { useState } from 'react';

import MyButton from '../UI/Button';
import MyInput from '../UI/Input';

import { AddNodeProps } from '../../@types/types';

import styles from './AddNote.module.scss';

// компонент добавления заметки
const AddNote: React.FC<AddNodeProps> = React.memo(
  ({ addNote, addTag, isVisibleAddNote, setIsVisibleAddNote }) => {
    const [title, setTitle] = useState<string>(''); // состояние заголовка заметки
    const [text, setText] = useState<string>(''); // состояние текста заметки

    // стили для отображения модального окна
    const classVisible = [styles.modal];
    if (isVisibleAddNote) classVisible.push(styles.modal__activ);

    // действие при нажатии кнопки "Добавить"
    const onAddNote = () => {
      // полчение из текста списка тегов
      const tagList = text.match(/#\S*/g);

      // если есть теги
      if (tagList) {
        // добавление заметки
        addNote({
          id: String(Date.now()),
          title: title,
          text: text,
          tags: tagList,
        });

        // добавление тегов в список
        tagList.forEach((tag) => {
          addTag({
            id: String(Date.now()),
            title: tag,
          });
        });
      } else {
        // если в тексте не было тегов
        addNote({
          id: String(Date.now()),
          title: title,
          text: text,
          tags: [],
        });
      }
      
      //очищение полей и скрытие окна
      setTitle('');
      setText('');
      setIsVisibleAddNote(!isVisibleAddNote);
    };

    return (
      <div
        className={classVisible.join(' ')}
        onClick={() => setIsVisibleAddNote(!isVisibleAddNote)}>
        <div
          className={styles.modal__content}
          onClick={(e) => e.stopPropagation()}>
          <MyInput
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            type={'text'}
            placeholder={'Введите название заметки'}
          />
          <MyInput
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
            type={'text'}
            placeholder={'Введите текст заметки'}
          />
          <p>*Оба поля должны быть заполнены</p>

          {text && title && <MyButton onClick={() => onAddNote()}>Добавить заметку</MyButton>}
        </div>
      </div>
    );
  },
);

export default AddNote;
