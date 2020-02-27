import * as React from 'react';
import classNames from 'classnames';
import css from './Token.module.css';
import { Score } from '../score/Score';

import rock from '../../assets/icons/icon-rock.svg';
import paper from '../../assets/icons/icon-paper.svg';
import scissors from '../../assets/icons/icon-scissors.svg'; 

export const Token = ({ type, clickable }) => {
	const getIcon = React.useCallback(() => {
		switch (type) {
			case 'rock':
				return rock;
				break;
			case 'paper':
				return paper;
				break;
			case 'scissors':
				return scissors;
				break;
		}
	}, [type]);

	return (
		<div className={classNames({
			[css.token]: true,
			[css[type]]: true,
			[css.clickable]: true,
		})}>
			<div className={css.outerBg} />
			<div className={css.outerBgShadow} />
			<div className={css.inner}>
				<div className={css.innerBg} />
				<div className={css.innerBgShadow} />
			</div>
			<div className={css.icon} style={{ backgroundImage: `url(${getIcon(type)})` }} />
		</div>
	)
};