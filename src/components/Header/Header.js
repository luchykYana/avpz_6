import {NavLink} from 'react-router-dom';

import css from './Header.module.css';

const Header = () => {
    return (
        <header className={css.links}>
            <NavLink to={'criteria'}>Критерії</NavLink>
            <NavLink to={'evaluation'}>Оцінки</NavLink>
            <NavLink to={'evaluation-criteria'}>Критерії оцінювання</NavLink>
            <NavLink to={'software-quality'}>Якість ПЗ</NavLink>
        </header>
    );
};

export {Header};