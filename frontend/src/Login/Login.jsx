import { useState } from 'react';
import './style.css'
import Home from '../Home/Home'
import axios from 'axios';


export default function Login() {
    const [token, setToken] = useState("")

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleChangeUsername(e) {
        setUsername(e.target.value)
    }

    function handleChangePassword(e) {
        setPassword(e.target.value)
    }

    function handleFormSubmit(e) {
        axios.post("http://127.0.0.1:8000/api-token-auth/", 
        {username: username, password: password}).then(response => {
            localStorage.setItem('token', response.data.token)
            setToken(response.data.token)
        })
        e.preventDefault();
    }

    if(!token) {
        return(
            <main>
                <h1>ConsigMe</h1>
                
                <div id="message-error">
                    <span className="material-symbols-outlined">cancel</span>
                    <p>usuário ou senha incorretos</p>
                </div>
                
                <form onSubmit={handleFormSubmit}>
                    <input type="text" placeholder="Nome de usuário" value={username} onChange={handleChangeUsername} />

                    <div id="inputPassword-link">
                        <input type="password" placeholder="Senha" value={password} onChange={handleChangePassword} />
                        <small><a href="https://www.youtube.com/">Esqueceu a senha?</a></small>
                    </div>
                    
                    <button>Entrar</button>
                </form>

                <small id="link-to-register">Ainda não possui uma conta? <a href="https://www.google.com/">Crie uma</a></small>
            </main>
        ); 
    } return <Home />
};
