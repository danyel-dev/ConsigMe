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
                    <label htmlFor="firstname" className={styles.labelForm}>Nome</label>
                    <input id="firstname" type="text" className={styles.inputForm} />
                   
                    <label htmlFor="lastname" className={styles.labelForm}>Sobrenome</label>
                    <input id='lastname' type="text" className={styles.inputForm} />

                    <label htmlFor="email" className={styles.labelForm}>Email</label>
                    <input id="email" type="email" className={styles.inputForm} />
                    
                    <label htmlFor="username" className={styles.labelForm}>Nome de usuário</label>
                    <input id='username' type="text" className={styles.inputForm} />

                    <label htmlFor="passwordOne" className={styles.labelForm}>Senha</label>
                    <input id='passwordOne' type="password" className={styles.inputForm} />

                    <label htmlFor="passwordTwo" className={styles.labelForm}>Confirmar senha</label>
                    <input id='passwordTwo' type="password" className={styles.inputForm} />
                </form>
            </main>
        </>
    );
}
