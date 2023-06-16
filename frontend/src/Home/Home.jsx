import Header from '../Components/Header'
import styles from './home.module.css'


export default function Home() {
    return(
        <>
            <section className={styles.section}>
                <Header />

                <div className={styles.section_div}>
                    <h1 className={styles.section_title}>ConsigMe</h1>
                    <p className={styles.section_p}>Seu sistema de gerenciamento de venda de produtos por consignação, feito para revendedores consignados e para consumidores.</p>
                    <button className={styles.section_button}>Saiba mais</button>
                </div>
            </section>
        </>
    );
}
