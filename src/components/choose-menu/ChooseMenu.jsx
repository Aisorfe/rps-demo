import React from 'react';
import css from './ChooseMenu.module.css';
import { Token } from '../token/Token';

export const ChooseMenu = () => {
  return (
    <div className={css.menu}>
        <div className={css.topRow}>
        	<Token clickable type='rock' />
          <Token clickable type='paper' />
        </div>
        <div className={css.bottomRow}>
          <Token clickable type='scissors' />
        </div>
    </div>
  );
};