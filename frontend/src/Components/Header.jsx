import { useState } from 'react';
import './header.css'

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false)

    function handleToggleMenu() {
        setToggleMenu(!toggleMenu)
    }

    return(
        <header className='header'>
            <a className='logo' href="google.com">Logo</a>

            <nav id='nav' className='nav'>
                <button className='btnButton' onClick={handleToggleMenu}>Menu</button>

                <ul className={`menu${toggleMenu? 'Open': ''}`} id='menu'>
                    <li><a className='linkMenu' href="google.com">Sobre</a></li>
                    <li><a className='linkMenu' href="google.com">Contao</a></li>
                    <li><a className='linkMenu' href="google.com">Sair</a></li>
                </ul>
            </nav>
        </header>
    );
}
