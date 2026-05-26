import { useState } from 'react';
import './style.css';

function SingUp() {
    const [ nome,setNome ] = useState("sla")
    const [ email,setEmail ] = useState("sla@sla")
    const [ senha,setSenha ] = useState("slasla")
    //variaveis
    //funçoes
    const [ resultado,setResultado ] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        console.log(nome, email, senha)
        setResultado(1+1)
    }

    return (
        <>
        <h2>Criar Conta</h2>

        <form onSubmit={handleSubmit}>
            <label>Nome</label>
             <input 
               type="text"
               value={nome}
               onChange={ (event) => setNome(event.target.value) }
               />

            <label>Email</label>
             <input 
               type="email"
               value={email}
               onChange={ (event) => setEmail(event.target.value) }
               />

             <label>Senha</label>
             <input 
               type="password"
               value={senha}
               onChange={ (event) => setSenha(event.target.value) }
               />

               <p>{resultado}</p>

               <button type="submit">Cadastrar</button>
        </form>

         <Link to="/about" >
        <button>navegar para About</button>
        </Link>
        </>
    )
}

export default SingUp

//const [state, setState] = useState("valorInicial");