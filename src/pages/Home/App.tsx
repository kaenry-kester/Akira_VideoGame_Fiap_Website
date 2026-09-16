import { useEffect, useState } from 'react'
import './App.css'
import { Header } from '../../components/Header/header.tsx'
import { Footer } from '../../components/Footer/footer.tsx'
import CursorTrails from '../../components/CursorTrail/CursorTrails.tsx'
import image from '../../assets/img/image.png'
import symbol from '../../assets/img/symbol.png'
import ungrowLogo from '../../assets/img/logo_ungrow_branca.png'

export default function App() {
  const [isPartnerPopupVisible, setIsPartnerPopupVisible] = useState(true)

  useEffect(() => {
    const popupTimer = window.setTimeout(() => {
      setIsPartnerPopupVisible(false)
    }, 7000)

    return () => window.clearTimeout(popupTimer)
  }, [])

  return (
    <div className="homePage">
      <CursorTrails />
      <Header />
      {isPartnerPopupVisible && (
        <aside className="partnerPopup" aria-label="Conheça mais sobre nossos colegas desenvolvedores">
          <img src={ungrowLogo} alt="Ungrow" className="ungrow" />
          <p>Conheça mais sobre o projeto de nossos colegas </p>
        </aside>
      )}
      <main>
        <section className="homeHero">
          <div className="heroAtmosphere" />
          <div className="homeHeroCopy">
            <h1>Akira</h1>
            <p className="heroQuote">"Meus passos já sabem o caminho, e todos eles me levam de volta para casa..."</p>
            <p className="heroLead">A Lua de Sangue despertou, e com isso, uma profecia está para se cumprir...</p>
            <div className="heroActions">
              <a className="homeButton homeButton--quiet" href="/historia">Descubra sobre o passado <span aria-hidden="true">↗</span></a>
              <a className="homeButton homeButton--quiet" href="/gameplay">Ver tela de gameplay <span aria-hidden="true">→</span></a>
              <a className="homeButton homeButton--quiet" href="https://youtu.be/xQPChuhhcrg?si=7bsYGfbKouoPG0dm" target="_blank" rel="noreferrer">Conheça mais sobre nosso jogo <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="homeHeroArt">
            <img src={image} alt="Akira diante da Lua de Sangue" />
          </div>
        </section>

        <section className="homeManifesto">
          <div className="manifestoLayout">
            <h2><em>Uma maldição antiga.</em></h2>
            <div>
              <p>Você é o último descendente de Yamato, uma linhagem capaz de purificar as armas que condenaram o Japão. Seu retorno a Hinogawa inicia uma jornada que foi iniciada por seus ancestrais, e cabe à você, derrotar divindades épicas e colocar um fim na maldição que dominou o Japão.</p>
              <a className="textLink" href="/historia">Ler a história completa <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="homePillars">
          <article className="homePillar">
            <span className="pillarNumber">01</span>
            <img src={symbol} alt="" aria-hidden="true" />
            <h3>Purifique o caminho</h3>
            <p>Recupere armas ancestrais e devolva a cor ao mundo.</p>
          </article>
          <article className="homePillar homePillar">
            <span className="pillarNumber">02</span>
            <img src={symbol} alt="" aria-hidden="true" />
            <h3>Lute do seu jeito</h3>
            <p>Alterne entre katana, arco, bō e kusarigama para construir combinações únicas de combate.</p>
          </article>
          <article className="homePillar">
            <span className="pillarNumber">03</span>
            <img src={symbol} alt="" aria-hidden="true" />
            <h3>Encare seres divinos</h3>
            <p>Cada nova criatura será necessário uma estratégia a ser pensada para enfrentá-la.</p>
          </article>
        </section>

        <section className="homeClosing">
          <h2>A lua de sangue surgiu,<br /><em>e o mundo, precisa de você.</em></h2>
          <a className="homeButton homeButton--primary" href="/gameplay">Prepare-se para a jornada <span aria-hidden="true">↗</span></a>
        </section>
      </main>
      <Footer />
    </div>
  )
}