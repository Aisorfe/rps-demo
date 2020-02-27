import * as React from 'react';
import css from './Score.module.css';

export const Score = ({ score }) => {
	return (
		<div className={css.score}>
			<div className={css.label}>
				score
			</div>
			<div className={css.value}>
				{score}
			</div>
		</div>
	)
};