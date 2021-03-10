import React, { useState } from 'react';
import './App.css';
import Form from '../components/Form/Form';
import List from '../components/List/List';

export default function App() {
  const [list, setList] = useState([]);

  function add(value) {
    const newValue = {
      id: Math.random().toString(36).substr(2),
      title: value
    };
    setList([...list, newValue]);
  }

  function remove(id) {
    setList([...list.filter(item => item.id !== id)]);
  }

  return (
    <div className="wrapper">
      <div>
        <h1>Список дел</h1>
        <h2>Лабораторная №2. Добавляем элемент в список</h2>
      </div>
      <Form handleSubmit={value => add(value)} />
      <List list={list} deleteHandler={id => remove(id)} />
    </div>
  );
}
