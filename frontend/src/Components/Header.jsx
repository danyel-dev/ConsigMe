import { useEffect, useState } from 'react';
import './header.css'

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false)
    
    const [token, setToken] = useState('')    

    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [])

    function handleToggleMenu() {
        setToggleMenu(!toggleMenu)
    }

    function handleLogout() {
        localStorage.removeItem('token')
        setToken(localStorage.getItem('token'))
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
                        
                        {token ? 
                            <li><button className='linkMenu' onClick={handleLogout}>Sair</button></li>:
                            <li><a className='linkMenu' href='/login'>Entrar</a></li>
                        }
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
