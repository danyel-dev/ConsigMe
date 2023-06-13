import { useState } from 'react';
import styles from './home.module.css'


export default function Home() {
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
                    <h1>ConsigMe</h1>
                    
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

                            {modal? <div className={styles.modalHeaderLink}></div>: null}
                        </li>
                        <li className={styles.li}>Funcionalidades</li>
                        <li className={styles.li}>Sair</li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
