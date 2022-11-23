import React, { useEffect, useState } from 'react';

import MyButton from '../UI/Button';
import MyInput from '../UI/Input';

import { EditNodeProps } from '../../@types/types';

import styles from './EditNote.module.scss';

// компонент модельного окна для редактирования заметки
const EditNote: React.FC<EditNodeProps> = React.memo(
  ({ addTag, idNote, notes, setNotes, isVisible, setIsVisible }) => {
    const [titleEdit, setTitleEdit] = useState<string>(''); // состояние первого Input для названия заметки
    const [textEdit, setTextEdit] = useState<string>(''); // состояние второго Input для текста заметки

    // состояние заметки
    const [note, setNote] = useState<{
      id: string;
      title: string;
      text: string;
      tags: string[];
    }>({ id: '', title: '', text: '', tags: [] });

    // действия при нажатии на кнопки "Редактировать"
    const onEditNote = () => {
      // получение списка тегов
      const tagList = textEdit.match(/#\S*/g);

      // если есть теги в тексте
      if (tagList) {
        // добавление тегов в список
        tagList.forEach((tag) => {
          addTag({
            id: String(Date.now()),
            title: tag,
          });
        });

        // объект отредактированной заметки
        const editNote = {
          id: idNote,
          title: titleEdit,
          text: textEdit,
          tags: tagList,
        };

        // изменение заметки в состоянии 
        setNotes(
          notes.map((obj) => {
            if (obj.id === idNote) {
              obj = editNote;
              return obj;
            } else {
              return obj;
            }
          }),
        );
      }

      // закрывает модальное окно
      setIsVisible(!isVisible);
    };

    // стили для отображения модального окна
    const classVisible = [styles.modal];
    if (isVisible) classVisible.push(styles.modal__active);

    // при изменении состоянии Input изменять состояние
    useEffect(() => {
      const noteItem = notes.find((note) => note.id === idNote);
      if (noteItem) {
        setNote(noteItem);
        setTitleEdit(note.title);
        setTextEdit(note.text);
      }
    }, [idNote, note.text, note.title, notes]);

    return (
      <div
        className={classVisible.join(' ')}
        onClick={() => setIsVisible(!isVisible)}>
        <div
          className={styles.modal__content}
          onClick={(e) => e.stopPropagation()}>
          <MyInput
            value={titleEdit}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitleEdit(e.target.value)}
            type={'text'}
            placeholder={'Введите название заметки'}
          />
          <MyInput
            value={textEdit}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTextEdit(e.target.value)}
            type={'text'}
            placeholder={'Введите текст заметки'}
          />

          {titleEdit && titleEdit && (
            <MyButton onClick={() => onEditNote()}>Изменить заметку</MyButton>
          )}
        </div>
      </div>
    );
  },
);

export default EditNote;
