import React from 'react';
import { useCallback, useEffect, useState } from 'react';

import styles from './Tags.module.scss';

type TagProp = {
  id: number;
  title: string;
};

const tagsList: TagProp[] = [
  {
    id: 0,
    title: 'Все',
  },
  {
    id: 1,
    title: '#shop',
  },
  {
    id: 2,
    title: '#music',
  },
  {
    id: 3,
    title: '#games',
  },
  {
    id: 4,
    title: '#world',
  },
];

const Tags = React.memo(() => {
  const [tags, setTag] = useState<TagProp[]>([]);
  const [activTag, setActivTag] = useState(0);

  const onChangeTag = useCallback((id: number) => {
    setActivTag(id);
  }, []);

  useEffect(() => {
    setTag(tagsList);
  }, []);

  return (
    <div className={styles.categories}>
      <ul>
        {tags?.length > 0 &&
          tags.map((tag, index) => (
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
