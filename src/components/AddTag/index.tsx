import React, { useState } from 'react';

import MyButton from '../UI/Button';
import MyInput from '../UI/Input';

import { AddTagProps } from '../../@types/types';

import styles from './AddTag.module.scss';

const AddTag: React.FC<AddTagProps> = React.memo(({ addTag, isVisible, setIsVisible }) => {
  const [tag, setTag] = useState<string>('');

  const classVisible = [styles.modal];
  if (isVisible) classVisible.push(styles.modal__active);

  const onAddNote = () => {
    const tagList = tag.match(/#\S*/g);

    if (tagList) {
      tagList.forEach((tag) => {
        addTag({
          id: String(Date.now()),
          title: tag,
        });
      });
    }

    setTag('');
    setIsVisible(!isVisible);
  };

  return (
    <div
      className={classVisible.join(' ')}
      onClick={() => setIsVisible(!isVisible)}>
      <div
        className={styles.modal__content}
        onClick={(e) => e.stopPropagation()}>
        <MyInput
          value={tag}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTag(e.target.value)}
          type={'text'}
          placeholder={'Введите название заметки'}
        />

        {tag && <MyButton onClick={() => onAddNote()}>Добавить тег</MyButton>}
      </div>
    </div>
  );
});

export default AddTag;
