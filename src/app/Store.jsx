import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/counter/CounterSlice';
import todosReducer from '../components/todo/TodoSlice';
import formReducer from '../components/form/FormSlice';
import productsReducer from '../components/product/ProductSlice';
import darkModeReducer from '../components/darkMode/DarkModeSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    form: formReducer,
    product: productsReducer,
    darkMode: darkModeReducer
  }
});
