import React from 'react';

export default function ListItem({ item, remove, index }) {
  return (
    <li>
      {item}
      <button className="deleteBtn" onClick={() => remove(index)}>
        x
      </button>
    </li>
  );
}
