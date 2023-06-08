import styles from './home.module.css'


export default function Home() {
    return (
        <>
            <nav className={styles.navbar}>
                <h1>ConsigMe</h1>

                <ul className={styles.ul}>
                    <li className={styles.li}>Home</li>
                    <li className={styles.li}>Sobre</li>
                    <li className={`${styles.li} ${styles.liDropdown}`}>
                        Feito para você
                        <span class="material-symbols-outlined">arrow_drop_down</span>
                    </li>
                    <li className={styles.li}>Funcionalidades</li>
                    <li className={styles.li}>Sair</li>
                </ul>
            </nav>
        </>
    );
}
