import React from 'react';

import MyButton from '../UI/Button';
import styles from './Note.module.scss';

const Note = React.memo(() => {
  return (
    <div className={styles.note__block}>
      <h4 className={styles.note__block__title}>Заметка 1</h4>
      <div className={styles.note__block__selector}>
        <ul>
          <li className={styles.active}>#shop</li>
          <li className={styles.active}>#world</li>
        </ul>
      </div>
      <div className={styles.note__block__bottom}>
        <MyButton onClick={() => console.log('Заметка удалена')}>Удалить</MyButton>
        <MyButton onClick={() => console.log('Редактировать заметку')}>Редактировать</MyButton>
      </div>
    </div>
  );
});

export default Note;
