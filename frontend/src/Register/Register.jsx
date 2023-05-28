// import axios from "axios";
import styles from './register.module.css'


export default function Register() {
    // const config = {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Token ' + localStorage.getItem('token')
    //     }
    // }

    function handleSubmitForm() {
        // axios.post("http://127.0.0.1:8000/users/", 
        // {username: "amelia", email:"amelia@gmail.com", password: "santoscdp"}, config).then(response => {
        //     console.log(response)
        // })  
    }

    return (
        <>
            <main className={styles.mainRegister}>
                <form onSubmit={handleSubmitForm} className={styles.formRegister}>
                    <div className={styles.fullnameForm}>
                        <div className={styles.iconInput}>
                            <label htmlFor="firstname" className={styles.labelForm}>Nome *</label>
                            <input id="firstname" type="text" className={styles.inputForm} placeholder='Primeiro nome' />
                            
                            <span className={`material-symbols-outlined ${styles.icon}`}>
                                person
                            </span>
                        </div>

                        <div className={styles.iconInput}>
                            <label htmlFor="lastname" className={styles.labelForm}>Sobrenome *</label>
                            <input id='lastname' type="text" className={styles.inputForm} placeholder='Último nome' />
                        
                            <span className={`material-symbols-outlined ${styles.icon}`}>
                                person
                            </span>
                        </div>
                    </div>

                    <div className={styles.iconInput}>
                        <label htmlFor="email" className={styles.labelForm}>Email *</label>
                        <input id="email" type="email" className={styles.inputForm} placeholder='Ex: email@email.com' />

                        <span className={`material-symbols-outlined ${styles.icon}`}>
                            mail
                        </span>
                    </div>
                    
                    <div className={styles.iconInput}>
                        <label htmlFor="username" className={styles.labelForm}>Nome de usuário *</label>
                        <input id='username' type="text" className={styles.inputForm} placeholder='Digite um nome de usuário' />

                        <span className={`material-symbols-outlined ${styles.icon}`}>
                            badge
                        </span>
                    </div>

                    <div className={styles.iconInput}>
                        <label htmlFor="passwordOne" className={styles.labelForm}>Senha *</label>
                        <input id='passwordOne' type="password" className={styles.inputForm} placeholder='Informe uma senha' />
                        
                        <span className={`material-symbols-outlined ${styles.icon}`}>
                            lock
                        </span>
                    </div>

                    <div className={styles.iconInput}>
                        <label htmlFor="passwordTwo" className={styles.labelForm}>Confirmar senha *</label>
                        <input id='passwordTwo' type="password" className={styles.inputForm} placeholder='Repita novamente a senha' />

                        <span className={`material-symbols-outlined ${styles.icon}`}>
                            lock
                        </span>
                    </div>

                    <div className={styles.submitDiv}>
                        <button className={styles.buttonForm}>Cadastrar</button>
                        <small className={styles.small}>Já possui uma conta? <a href="https://google.com">Entre nela</a></small>
                    </div>
                </form>
            </main>
        </>
    );
}
