import React from 'react';
import { Link } from 'react-router-dom';

import { NoteProp } from '../../@types/types';

import styles from './Note.module.scss';

// компонент заметки
const Note: React.FC<NoteProp> = React.memo(({ id, title, tags }) => {
  return (
    <div className={styles.note__block}>
      <Link to={`/${id}`}>
        <h4 className={styles.note__block__title}>{title}</h4>
      </Link>
      
      <div className={styles.note__block__selector}>
        <ul>
          {tags.map((tag, index) => (
            <li
              key={index}
              className={styles.active}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default Note;
