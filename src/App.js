import React from 'react';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div>
        <h1>Список дел</h1>
        <h2>Лабораторная №2. Добавляем элемент в список</h2>
      </div>
      <div>
        <input type="text" />
        <button>Добавить</button>
        <ul>
          <li>Купить картошки</li>
          <li>Помыть пол</li>
          <li>Покормить рыб</li>
          <li>Выгулять кошку</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
