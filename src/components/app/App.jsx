import React from 'react';
import css from './App.module.css';
import { Header } from '../header/Header';
import { ChooseMenu } from '../choose-menu/ChooseMenu';

export const App = () => {
  return (
    <div className={css.app}>
      <div className={css.background}>
        <div className={css.container}>
        	<Header />
          <div className={css.chooseMenu}>
        	   <ChooseMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
