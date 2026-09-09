import './footer.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png'

export function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-brand">
                    <Link to="/" aria-label="Voltar para a página inicial">
                        <img src={logo} alt="Akira logo" className="logo" />
                    </Link>
                    <p>Uma jornada de honra, memória e purificação.</p>
                </div>

                <nav className="footer-nav" aria-label="Navegação do rodapé">
                    <span>Explorar</span>
                    <Link to="/">Página inicial</Link>
                    <Link to="/sobre-o-jogo">Sobre o jogo</Link>
                    <Link to="/historia">História</Link>
                    <Link to="/gameplay">Gameplay</Link>
                    <Link to="/contato">Contato</Link>
                </nav>
            </div>

            <div className="footer-bottom">
                <p>Desenvolvido como trabalho acadêmico por estudantes da FIAP</p>
                <span>Akira · 2026</span>
            </div>
        </footer>
    )
}