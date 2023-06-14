import styles from './header.module.css';
import { useState } from 'react';


export default function Header() {
    const [modal, setModal] = useState(false);

    function modalVisible() {
        setModal(true)
    }

    function modalNotVisible() {
        setModal(false)
    }

    function handleChangeMenu(e) {
        const menu = document.getElementById('menu')
        
        if(!(menu.style.display === "none"))
            menu.style.display = "none"
        else 
            menu.style.display = "flex"
    }

    return (
        <>
            <header className={styles.header}>
                <div className={styles.logoMenu}>
                    <h2>ConsigMe</h2>
                    
                    <button className={styles.buttonHamburguer} onClick={handleChangeMenu}>
                        <span className="material-symbols-outlined">
                            menu
                        </span>
                    </button>
                </div>

                <nav id='menu' className={styles.navbar}>
                    <ul className={styles.ul}>
                        <li className={styles.li}>Home</li>
                        <li className={styles.li}>Sobre</li>
                        <li className={`${styles.li} ${styles.liDropdown}`} onMouseEnter={modalVisible} onMouseOut={modalNotVisible}>
                            Feito para você
                            <span className="material-symbols-outlined">arrow_drop_down</span>

                            {
                                modal? 
                                    <div className={styles.modalHeaderLink}>
                                        <a href="#" className={styles.modalLink}>Para distribuidores</a>
                                        <a href="#" className={styles.modalLink}>Para vendedores</a>
                                        <a href="#" className={styles.modalLink}>Para consumidores</a>
                                    </div>
                                : null
                            }
                        </li>
                        <li className={styles.li}>Funcionalidades</li>
                        <li className={styles.li}>Sair</li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
