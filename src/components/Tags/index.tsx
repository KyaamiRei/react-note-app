import React from 'react';
import { TagProp } from '../../@types/types';

import styles from './Tags.module.scss';
import closeIcon from '../../assets/image/close.svg';

type TagProps = {
  tagList: TagProp[];
  activTag: string;
  setActivTag: (id: string) => void;
  deleteTag: (id: string) => void;
};

const Tags: React.FC<TagProps> = React.memo(({ activTag, deleteTag, setActivTag, tagList }) => {
  const onChangeTag = (id: string) => {
    setActivTag(id);
  };

  const onClickDelete = (id: string) => {
    deleteTag(String(id));
  };

  return (
    <div className={styles.tags}>
      <ul>
        {tagList.length > 0 &&
          tagList.map((tag, index) => (
            <li
              onClick={() => onChangeTag(String(index))}
              className={activTag === String(index) ? styles.active : ''}
              key={tag.id}>
              {tag.title}
              {index !== 0 && (
                <div
                  onClick={(e) => {
                    onClickDelete(tag.id);
                    e.stopPropagation();
                  }}
                  className={styles.close__btn}>
                  {activTag !== String(index) && (
                    <img
                      src={closeIcon}
                      alt='Close'
                    />
                  )}
                </div>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Tags;
