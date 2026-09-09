import { Header } from '../../components/Header/header.tsx'
import { Footer } from '../../components/Footer/footer.tsx'
import './Contato.css'
import AssetVermelho from '../../assets/img/Contato/Arco.png'
import Lua from '../../assets/img/Contato/Lua.png'
import backgroundForms from '../../assets/img/Contato/forms/Background.png'
import borderForms from '../../assets/img/Contato/borda/BordaVermelha.png'
import mail from '../../assets/img/Contato/Mail.png'


export function Contato() {
    return (
        <div className="contato-page-wrapper">
            <Header />
            <main className="contato-page">
                <img src={AssetVermelho} alt="Imagem de contato" className="Arco" />
                <section className="SectionContato">
                    <img src={mail} alt="Ícone de mensagem" className="contato-mail" />
                    <h1 id="ParagrafoTitulo">Entre em contato com nossa equipe</h1>
                    <p id="ParagrafoContato">Tem interesse em colaborar com o desenvolvimento de Akira? Envie-nos uma mensagem! Sua opinião ajuda a tornar a experiência do jogo ainda melhor.</p>
                </section>
                <img src={Lua} alt="Imagem de lua" className="ImagemLua" />
            </main>

            <div className="after" />

            <section className="SectionFormulario">
                <img src={backgroundForms} alt="Imagem de fundo do formulário" className="ImagemFundoFormulario" />
                <img src={borderForms} alt="Borda vermelha do formulário" className="ImagemBordaFormulario" />
                <form action="https://formsubmit.co/luisfeliperkobelnik@gmail.com" method="POST" className="Formulario">
                    <input type="hidden" name="_subject" value="Nova mensagem do site Akira" />
                    <input type="hidden" name="_captcha" value="true" />
                    <label htmlFor="name">Nome completo:</label>
                    <input type="text" id="name" name="name" required />
                    <label htmlFor="email">Seu e-mail:</label>
                    <input type="email" id="email" name="_replyto" required />
                    <label htmlFor="subject">Assunto:</label>
                    <input type="text" id="subject" name="subject" required />
                    <label htmlFor="message">Mensagem:</label>
                    <textarea id="message" name="message" required></textarea>
                    <button type="submit" className="BotaoEnviar">Enviar Mensagem</button>
                </form>
            </section>

            <Footer />
        </div>
    )
}