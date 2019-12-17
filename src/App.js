import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    { text: "React Hooksについて学ぶ" },
    { text: "GoModulesとパッケージ構成の整理" },
    { text: "TypeScriptの言語仕様" }
  ]);

  return <div />;
};

export default App;
