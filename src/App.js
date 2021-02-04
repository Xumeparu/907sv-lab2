import React from 'react';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div>
        <h1>Лабораторная №2. &quot;Список дел.&quot;</h1>
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
