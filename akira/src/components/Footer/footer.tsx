import './footer.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png'

export function Footer() {
    return (
        <footer>
            <div className="InitialContent">
                <Link to="/">
                    <img src={logo} alt="Akira logo" className="logo" />
                </Link>
                <p>Desenvolvido como trabalho acadêmico por estudantes da Fiap</p>
            </div>
        </footer>
    )
}