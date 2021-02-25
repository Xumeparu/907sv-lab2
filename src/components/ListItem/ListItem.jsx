import React from 'react';

export default function ListItem({ id, title, deleteHandler }) {
  return (
    <li>
      {title}
      <button className="deleteBtn" data-testid="deleteButton" onClick={() => deleteHandler(id)}>
        x
      </button>
    </li>
  );
}
