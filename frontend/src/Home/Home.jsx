import Header from '../Components/Header'
import Services from '../Components/Services'
import Informations from '../Components/Informations';
import styles from './home.module.css'
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';


export default function Home() {
    return(
        <>
            <Header />

            <main className={styles.main}>
                <Services />
                <Informations />
                <Contact />
            </main>

            <Footer />
        </>
    );
}
