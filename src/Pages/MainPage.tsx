import React from 'react';
import { MainPageProps } from '../@types/types';

import Note from '../components/Note';
import Tags from '../components/Tags';

import MyButton from '../components/UI/Button';

import styles from '../styles/MainPage.module.scss';

// основной компонент приложения
const MainPage: React.FC<MainPageProps> = React.memo(
  ({
    activTag,
    setActivTag,
    notes,
    tags,
    deleteTag,
    isVisibleAddNote,
    setIsVisibleAddNote,
    isVisibleAddTag,
    setIsVisibleAddTag,
  }) => {
    // переменная для хранения отфильтрованнх заметок
    const filter = notes.filter((item) => item.tags.includes(tags[Number(activTag)].title));

    // показать модальное окно добавление заметки
    const showModalAddNote = () => {
      setIsVisibleAddNote(!isVisibleAddNote);
    };
    // показать модальное окно добавление тега
    const showModalAddTag = () => {
      setIsVisibleAddTag(!isVisibleAddTag);
    };

    return (
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.content__top}>
            <Tags
              activTag={activTag}
              setActivTag={(id) => setActivTag(id)}
              deleteTag={(id) => deleteTag(id)}
              tagList={tags}
            />
            <div className={styles.add__btn}>
              <MyButton onClick={showModalAddNote}>Создать заметку</MyButton>
              <MyButton onClick={showModalAddTag}>Создать тег</MyButton>
            </div>
          </div>
          <h2 className={styles.content__title}>
            {notes.length > 0 ? 'Все заметки' : 'У вас пока что нет заметок'}
          </h2>
          <div className={styles.content__items}>
            {(Number(activTag) > 0 ? filter : notes).map((item) => (
              <Note
                key={item.id}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>
    );
  },
);

export default MainPage;
