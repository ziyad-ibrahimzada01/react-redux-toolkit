import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from './DarkModeSlice';

const DarkModeToggler = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  React.useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  return (
    <button onClick={() => dispatch(toggleDarkMode())}>
      Toggle Dark Mode
    </button>
  );
};

export default DarkModeToggler;
