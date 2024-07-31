import React from 'react';
import Counter from './components/counter/Counter';
import TodoList from './components/todo/TodoList';
import Form from './components/form/Form';
import ProductList from './components/product/ProductList';
import DarkModeToggler from './components/darkMode/DarkMode';

function App() {
  return (
    <div className="App">
      <Counter />
      <TodoList />
      <Form />
      <ProductList />
      <DarkModeToggler />
    </div>
  );
}

export default App;
