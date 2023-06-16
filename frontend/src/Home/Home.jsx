import Header from '../Components/Header'
import styles from './home.module.css'


export default function Home() {
    return(
        <>
            <section className={styles.section}>
                <img src="" alt="" />
                <Header />
                <h1>ConsigMe</h1>
                <p className={styles.section_p}>Seu sistema de gerenciamento de venda de produtos por consignação, feito para revendedores consignados e para consumidores.</p>
                <button className={styles.section_button}>Saiba mais</button>
            </section>
        </>
    );
}
