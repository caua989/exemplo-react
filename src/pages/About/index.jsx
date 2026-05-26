import { Link } from 'react-router-dom'
import './style.css'

function About() {
    return (
        <> OUTRA PAGINA
        <Link to="/">
            <button>Navegar para Home</button>
        </Link>

         <h2>Bem-Vindo(a) ao meu sistema</h2>
        </>
    )
}

export default About