import React, { useEffect, useState } from 'react';

import MyButton from '../UI/Button';
import MyInput from '../UI/Input';

import { EditNodeProps } from '../../@types/types';

import styles from './EditNote.module.scss';

const EditNote: React.FC<EditNodeProps> = React.memo(
  ({ addTag, idNote, notes, setNotes, isVisible, setIsVisible }) => {
    const [titleEdit, setTitleEdit] = useState<string>('');
    const [textEdit, setTextEdit] = useState<string>('');

    const [note, setNote] = useState<{
      id: string;
      title: string;
      text: string;
      tags: string[];
    }>({ id: '', title: '', text: '', tags: [] });

    const onEditNote = () => {
      const tagList = textEdit.match(/#\S*/g);

      if (tagList) {
        tagList.forEach((tag) => {
          addTag({
            id: String(Date.now()),
            title: tag,
          });
        });

        const editNote = {
          id: idNote,
          title: titleEdit,
          text: textEdit,
          tags: tagList,
        };

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

      setIsVisible(!isVisible);
    };

    const classVisible = [styles.modal];
    if (isVisible) classVisible.push(styles.modal__active);

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

          <MyButton onClick={() => onEditNote()}>Изменить заметку</MyButton>
        </div>
      </div>
    );
  },
);

export default EditNote;
