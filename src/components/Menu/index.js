import React from 'react';
import Logo from '../../assets/image/Logo.png'
import './menu.css';
//import ButtonLink from '../components/ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo Roberflix" />
            </a>

            <Button className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;