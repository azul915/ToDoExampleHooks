import React, { useState } from "react";

const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.priventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: "React Hooksについて学ぶ",
      isCompleted: false
    },
    {
      text: "GoModulesとパッケージ構成の整理",
      isCompleted: false
    },
    {
      text: "TypeScriptの言語仕様",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
