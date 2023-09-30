import { useState } from 'react';
import './header.css'

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false)

    function handleToggleMenu() {
        setToggleMenu(!toggleMenu)
    }

    return(
        <div id='banner'>
            <header className='header'>
                <a className='logo' href="google.com">ConsigMe</a>

                <nav id='nav' className='nav'>
                    <span className='btnButton' onClick={handleToggleMenu}></span>

                    <ul className={`menu${toggleMenu? 'Open': ''}`} id='menu'>
                        <li><a className='linkMenu' href="google.com">Sobre</a></li>
                        <li><a className='linkMenu' href="google.com">Contato</a></li>
                        <li><a className='linkMenu' href="google.com">Sair</a></li>
                    </ul>
                </nav>
            </header>

            <div id='banner-card'>
                <h2>ConsigMe</h2>
                <p>Sua plataforma para compra e venda de produtos por consignação, fácil e rápida de se utilizar. venha conhecer nossos serviços.</p>
                <button>Ver serviços</button>
            </div>
        </div>
    );
}
