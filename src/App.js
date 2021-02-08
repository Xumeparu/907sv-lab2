import React from 'react';
import './App.css';
import List from './List';

export default function App() {
  const [value, setValue] = React.useState('');
  const [list, setList] = React.useState([]);

  function handleAdd(event) {
    event.preventDefault();
    if (value === '') {
      alert('Пожалуйста, введите текст');
    } else {
      setList([...list, value]);
      setValue('');
    }
  }

  function handleDelete(index) {
    list.splice(index, 1);
    setList([...list]);
  }

  return (
    <div className="wrapper">
      <div>
        <h1>Список дел</h1>
        <h2>Лабораторная №2. Добавляем элемент в список</h2>
      </div>
      <form onSubmit={event => handleAdd(event)}>
        <div>
          <input type="text" value={value} onChange={e => setValue(e.target.value)} />
          <br />
          <button type="submit" className="addBtn" onClick={event => handleAdd(event)}>
            Добавить
          </button>
          <List list={list} remove={handleDelete} />
        </div>
      </form>
    </div>
  );
}
