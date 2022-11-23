import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { DetailProps, TagProp } from '../@types/types';

import EditNote from '../components/EditNote';
import MyButton from '../components/UI/Button';

import styles from '../styles/DetailPage.module.scss';

// компонент для детального просмотра записки, ее редактировании и удаление
const DetailNote: React.FC<DetailProps> = ({ addTag, notes, setNotes, deleteNote }) => {
  const { id } = useParams(); // взять id заметки из адреса строки

  const [isVisible, setIsVisible] = useState<boolean>(false); // состояние для модального окна редактирования

  // состояние для заметки
  const [note, setNote] = useState<{
    id: string;
    title: string;
    text: string;
    tags: string[];
  }>();

  // при первой загрузке выбирает запись из всего списка
  useEffect(() => {
    const noteItem = notes.find((note) => note.id === id);
    setNote(noteItem);
  }, [id, notes]);

  // ожидание загрузки данных
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
          addTag={(obj: TagProp) => addTag(obj)}
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
