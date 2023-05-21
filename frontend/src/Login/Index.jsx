import './style.css'


export default function Index() {
    return(
        <main>
            <h1>ConsigMe</h1>
            
            <div id="message-error">
                <span class="material-symbols-outlined">
                    cancel
                    </span>
                <p>usuário ou senha incorretos</p>
            </div>
            
            <form>
                <input type="text" placeholder="Nome de usuário" />
                
                <div class="password-link">
                    <input type="password" placeholder="Senha" />
                    <small><a href="https://www.youtube.com/">Esqueceu a senha?</a></small>
                </div>
                
                <button>Entrar</button>
            </form>

            <small>Ainda não possui uma conta? <a href="https://www.google.com/">Crie uma</a></small>
        </main>
    ); 
};
