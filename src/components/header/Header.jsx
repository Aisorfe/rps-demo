import * as React from 'react';
import css from './Header.module.css';
import { Score } from '../score/Score';

export const Header = () => {
	return (
		<div className={css.header}>
			<div className={css.logo} />
			<Score score={12} />
		</div>
	)
};