import React from 'react';

import Logo from '../../assets/logo.png';
import './styles.css';

// import ButtonLink from './components/ButtonLink';
import Button from '../Button';

const Menu = () => {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Aluraflix" />
            </a>

            <Button as="a" className="ButtonLink" href="/">Vídeo Novo</Button>
        </nav>
    );
}
export default Menu;