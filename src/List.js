import React from 'react';
import ListItem from './ListItem';

export default function List({ list, remove }) {
  return (
    <ul>
      {list.map((item, index) => (
        // eslint-disable-next-line react/jsx-key
        <ListItem item={item} index={index} remove={remove} />
      ))}
    </ul>
  );
}
