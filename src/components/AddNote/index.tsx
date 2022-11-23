import React, { useState } from 'react';

import MyButton from '../UI/Button';
import MyInput from '../UI/Input';

import { AddNodeProps } from '../../@types/types';

import styles from './AddNote.module.scss';

const AddNote: React.FC<AddNodeProps> = React.memo(
  ({ addNote, addTag, isVisibleAddNote, setIsVisibleAddNote }) => {
    const [title, setTitle] = useState<string>('');
    const [text, setText] = useState<string>('');

    const classVisible = [styles.modal];
    if (isVisibleAddNote) classVisible.push(styles.modal__activ);

    const onAddNote = () => {
      const tagList = text.match(/#\S*/g);

      if (tagList) {
        addNote({
          id: String(Date.now()),
          title: title,
          text: text,
          tags: tagList,
        });

        tagList.forEach((tag) => {
          addTag({
            id: String(Date.now()),
            title: tag,
          });
        });
      } else {
        addNote({
          id: String(Date.now()),
          title: title,
          text: text,
          tags: [],
        });
      }
      
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
