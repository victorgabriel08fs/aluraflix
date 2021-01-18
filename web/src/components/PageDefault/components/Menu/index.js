import React from 'react';

import Logo from '../../../../assets/logo.png';
import './styles.css';

import { Link } from 'react-router-dom'

// import ButtonLink from './components/ButtonLink';
import Button from '../../../Button';

const Menu = () => {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Aluraflix" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">Vídeo Novo</Button>
        </nav>
    );
}
export default Menu;