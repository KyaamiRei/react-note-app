import React from 'react';
import { MainPageProps } from '../@types/types';

import Note from '../components/Note';
import Tags from '../components/Tags';

import MyButton from '../components/UI/Button';

import styles from '../styles/MainPage.module.scss';

const MainPage: React.FC<MainPageProps> = React.memo(
  ({ notes, tags, isVisible, setIsVisible }) => {
    
    const showModal = () => {
      setIsVisible(!isVisible);
    };

    return (
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.content__top}>
            <Tags tagList={tags} />
            <div className='add__note'>
              <MyButton onClick={showModal}>Создать заметку</MyButton>
            </div>
          </div>
          <h2 className={styles.content__title}>Все заметки</h2>
          <div className={styles.content__items}>
            {notes.map((item) => (
              <Note
                key={item.id}
                {...item}
                // deleteNote={(id: string) => deleteNote(id)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  },
);

export default MainPage;
