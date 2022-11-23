import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { NoteProp } from '../@types/types';

import EditNote from '../components/EditNote';
import MyButton from '../components/UI/Button';

import styles from '../styles/DetailPage.module.scss';

type DetailProps = {
  notes: NoteProp[];
  setNotes: Function;
  deleteNote: (id: string) => void;
};

const DetailNote: React.FC<DetailProps> = ({ notes, setNotes, deleteNote }) => {
  const { id } = useParams();

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [note, setNote] = useState<{
    id: string;
    title: string;
    text: string;
    tags: string[];
  }>();

  useEffect(() => {
    const noteItem = notes.find((note) => note.id === id);
    setNote(noteItem);
  }, [id, notes]);

  if (!note) {
    return <>'Loading...'</>;
  }

  return (
    <div className={styles.content}>
      {id !== undefined ? (
        <EditNote
          idNote={id}
          notes={notes}
          setNotes={setNotes}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
      ) : (
        ''
      )}
      <Link to={'/'}>
        <MyButton onClick={() => {}}>Назад</MyButton>
      </Link>
      <div className={styles.content__title}>{note.title}</div>
      {note.tags && (
        <div className={styles.content__tags}>
          Используемые теги:
          {note.tags.map((item, index) => (
            <div
              key={index}
              className={styles.content__tag}>
              {item}
            </div>
          ))}
        </div>
      )}

      <div className={styles.content__text}>{note.text}</div>

      <div className={styles.content__button}>
        {id !== undefined ? <MyButton onClick={() => deleteNote(id)}>Удалить</MyButton> : ''}
        <MyButton onClick={() => setIsVisible(!isVisible)}>Редактировать</MyButton>
      </div>
    </div>
  );
};

export default DetailNote;