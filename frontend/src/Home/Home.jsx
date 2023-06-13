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

    return (
        <>
            <nav className={styles.navbar}>
                <h1>ConsigMe</h1>

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
        </>
    );
}
