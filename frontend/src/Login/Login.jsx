import './style.css'


export default function Login() {
    return(
        <main>
            <h1>ConsigMe</h1>
            
            <div id="message-error">
                <span className="material-symbols-outlined">cancel</span>
                <p>usuário ou senha incorretos</p>
            </div>
            
            <form>
                <input type="text" placeholder="Nome de usuário" />
                
                <div id="inputPassword-link">
                    <input type="password" placeholder="Senha" />
                    <small><a href="https://www.youtube.com/">Esqueceu a senha?</a></small>
                </div>
                
                <button>Entrar</button>
            </form>

            <small id="link-to-register">Ainda não possui uma conta? <a href="https://www.google.com/">Crie uma</a></small>
        </main>
    ); 
};
