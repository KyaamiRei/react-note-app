import React from 'react';
import { useCallback, useState } from 'react';
import { TagProp } from '../../@types/types';

import styles from './Tags.module.scss';

type TagProps = {
  tagList: TagProp[];
};

const Tags: React.FC<TagProps> = React.memo(({ tagList }) => {
  const [activTag, setActivTag] = useState(0);

  const onChangeTag = useCallback((id: number) => {
    setActivTag(id);
  }, []);

  return (
    <div className={styles.categories}>
      <ul>
        {tagList.length > 0 &&
          tagList.map((tag, index) => (
            <li
              onClick={() => onChangeTag(index)}
              className={activTag === index ? styles.active : ''}
              key={tag.id}>
              {tag.title}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Tags;
