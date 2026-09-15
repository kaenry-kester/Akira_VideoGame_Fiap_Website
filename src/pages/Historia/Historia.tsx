import { Header } from '../../components/Header/header.tsx'
import { Footer } from '../../components/Footer/footer.tsx'
import './Historia.css'
import gashadokuro from '../../assets/img/Historia/gashadokuro.jpg'
import hachiman from '../../assets/img/Historia/hachiman.jpg'
import inari from '../../assets/img/Historia/inari.jpg'
import izanagi from '../../assets/img/Historia/izanagi.jpg'
import izanami from '../../assets/img/Historia/izanami.jpg'
import jizo from '../../assets/img/Historia/jizo.jpg'

export function Historia() {
    return (
        <div>
            <Header />
            <main className="historia-page">
                <header className="historia-intro">
                    <p className="historia-kicker">Os registros esquecidos de Hinogawa</p>
                    <h1>A Lenda de Yamato</h1>
                    <p className="historia-lead">Quando a Lua de Sangue surgir, uma linhagem marcada pelo fogo precisará despertar, enfrentar divindades e purificar armas que condenaram todo um país.</p>
                </header>
                <article className="historia">
                    <p>No início dos tempos, existiam dois seres primordiais, deuses ancestrais cujos feitos transcendiam o possível e o impossível: Izanagi, deus da criação, conhecido como “o homem que convoca”, e Izanami, “a mulher que convoca”.</p>
                    <div className="historia-gallery historia-gallery--deuses">
                        <figure className="historia-figure">
                            <img src={izanagi} alt="Representação de Izanagi, deus da criação" />
                            <figcaption>Izanagi, o deus da criação <small className="historia-credit">Créditos: Noxypia: https://www.deviantart.com/noxypia/art/Izanagi-125449659</small></figcaption>
                        </figure>
                        <figure className="historia-figure">
                            <img src={izanami} alt="Representação de Izanami, deusa da morte" />
                            <figcaption>Izanami, a deusa da morte <small className="historia-credit">Créditos: Noxypia: https://www.deviantart.com/noxypia/art/Izanami-125447607</small></figcaption>
                        </figure>
                    </div>
                    <p>Juntos, eles moldaram o mundo, ergueram o arquipélago japonês e deram origem aos primeiros povos e aos primeiros deuses, conhecidos como <em>kami</em>.</p>

                    <p>O primeiro filho foi Hiruko/Ebisu, uma criança nascida sem ossos e deformada após um erro ritualístico de Izanami. Ao perceber sua criação, ela o abandonou em um barco e deixou que seu destino fosse traçado pelas águas.</p>

                    <p>Mais tarde, da união entre os irmãos nasceu Kagutsuchi, o deus do fogo. Seu nascimento trouxe vida, mas também destruição. Consumida pelas chamas, Izanami morreu e desceu ao submundo, onde se tornou a deusa da morte. Lá, nomeou seu novo reino de Yami.</p>
                    <p>Tomado pela dor, Izanagi decapitou Kagutsuchi. Depois, cortou seu corpo em oito pedaços e os espalhou pelo Japão. Cada fragmento se transformou em um vulcão lendário. Do sangue derramado nasceram novos <em>kami</em>, associados aos trovões, às montanhas e aos metais. O coração de Kagutsuchi, porém, foi enterrado e esquecido por milênios.</p>
                    <p>Desde então, Kagutsuchi passou a ser lembrado como o deus primordial do fogo, símbolo do nascimento, do descontrole e do fim.</p>

                    <p>As eras passaram. Enquanto divindades caíam e outras surgiam, a vida prosperava. Em um pequeno vilarejo chamado Hinogawa nasceu um menino chamado Yamato.</p>
                    <p>Yamato dedicou sua vida à criação de armas. Suas lâminas eram precisas o bastante para atravessar armaduras, e suas próprias proteções resistiam a flechas, projéteis e ataques mágicos. Sua habilidade se tornou conhecida por todo o Japão, e a vila prosperou sob o império da forja.</p>
                    <p>Um dia, Yamato ouviu falar de uma forja capaz de criar armas tão poderosas que até os deuses sentiriam inveja. Dizia-se que ela estava escondida sob uma montanha formada pelo coração de Kagutsuchi.</p>
                    <p>A montanha havia sido ocultada por Izanagi, que desejava apagar da memória o legado de seu filho. Contudo, pequenos seguidores de Kagutsuchi ainda guardavam aquele lugar. Eles acreditavam que o fogo, quando controlado, poderia deixar de ser apenas destruição e se transformar em arte.</p>
                    <p>Após anos de busca, Yamato e seus aprendizes encontraram a forja esquecida. Durante décadas, trabalharam na criação de quatro armas. Segundo a lenda, seus portadores seriam capazes de enfrentar seres ancestrais e divindades além do plano terreno.</p>

                    <p>Yamato, porém, desconhecia a maldição de Izanagi.</p>
                    <p>Ao descobrir que a forja de Kagutsuchi havia sido reativada, o deus da criação amaldiçoou as armas. Qualquer ser que as empunhasse seria corrompido e transformado em um <em>yokai</em>, uma criatura dominada pela fome, pela violência e pelo desejo de destruir tudo em seu caminho.</p>
                    <p>Os primeiros a sucumbir foram os próprios filhos de Izanagi. Eles acreditavam que poderiam usar as armas para proteger seus povos, territórios e ideais. No entanto, pouco a pouco, a corrupção tomou conta de suas mentes.</p>

                    <h2>Os deuses corrompidos</h2>
                    <ul>
                        <li>
                            <figure className="historia-god-card">
                                <img src={hachiman} alt="Hachiman, deus da guerra" />
                                <figcaption><strong>Hachiman:</strong> Deus da guerra e protetor dos samurais. Empunhou o arco e a flecha para defender seu povo durante guerras cada vez mais violentas, mas acabou consumido pelo poder da arma. <small className="historia-credit">Créditos: SLIMHANNYA: https://commons.wikimedia.org/wiki/File:%E5%85%AB%E5%B9%A1%E7%A5%9E%E5%9D%90%E5%83%8F,_Hachiman.jpg</small></figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure className="historia-god-card">
                                <img src={jizo} alt="Jizō, guardião das crianças e almas perdidas" />
                                <figcaption><strong>Jizō:</strong> Guardião das crianças, dos viajantes e das almas perdidas. Usou seu <em>bastão</em> para salvar um orfanato do yokai superior Gashadokuro. Venceu a criatura, mas foi corrompido pouco depois. <small className="historia-credit">Créditos:  Unkei: https://picryl.com/media/jizo-rokuharamitsuji-unkei-attrib-aca12b</small></figcaption>
                            </figure>
                            <figure className="historia-inline-figure">
                                <img src={gashadokuro} alt="Gashadokuro, o yokai superior" />
                                <figcaption>Gashadokuro, o yokai superior derrotado por Jizō <small className="historia-credit">Créditos: devilguineapig: https://www.deviantart.com/devilguineapig/art/Inktober-2018-Day-6%3A-Gashadokuro-770802757</small></figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure className="historia-god-card">
                                <img src={inari} alt="Inari, deusa da fertilidade e da prosperidade" />
                                <figcaption><strong>Inari:</strong> Deusa da fertilidade, da prosperidade, da riqueza e da sorte. Capaz de se transformar em raposa e em humana, protetora de ferreiros e guerreiros, empunhou a <em>kusarigama</em> para resgatar Yamato, pois sabia o que o aguardava. Apesar de sua resistência, foi presa, torturada e possuída por Izanagi, tornando-se uma divindade controlada pelo próprio deus da criação. <small className="historia-credit">Créditos: Azurfrog: https://commons.wikimedia.org/wiki/User:Azurfrog</small></figcaption>
                            </figure>
                        </li>
                    </ul>

                    <p>Após a queda dos deuses, a maldição se espalhou por florestas, montanhas, templos, vilarejos e antigas estradas. Animais se tornaram criaturas hostis, guerreiros foram transformados em monstros e até mesmo espíritos protetores passaram a atacar quem cruzasse seus caminhos.</p>
                    <p>O mundo começou a perder suas cores. O Japão mergulhou no caos.</p>
                    <p>Os deuses corrompidos avançaram até Hinogawa, destruindo tudo em seu caminho. A vila de Yamato foi o destino final da devastação. Sua família foi massacrada, e seu legado quase desapareceu.</p>

                    <p>Ao testemunhar o caos causado pelas armas, agora chamadas de Makai, Izanami decidiu interferir. Para impedir que a linhagem de Yamato fosse extinta, ela concedeu duas dádivas aos seus descendentes:</p>
                    <ul>
                        <li>- Imunidade à maldição das armas;</li>
                        <li>- O poder de purificar as armas amaldiçoadas e transformá-las novamente em armas comuns.</li>
                    </ul>
                    <p>Izanami passou a guiar a linhagem por meio de aparições e visões. Também estabeleceu uma condição: quando a Lua de Sangue surgisse, um evento que ocorre apenas uma vez a cada mil anos, a profecia seria concretizada.</p>
                    <p>Um descendente de Yamato retornaria para casa, enfrentaria as criaturas corrompidas, derrotaria os deuses consumidos pelas Makai e recuperaria as armas ancestrais.</p>

                    <p>Entretanto, havia algo que Izanami não havia revelado.</p>
                    <p>Izanagi nunca havia abandonado Hinogawa. Seu corpo desaparecera há milhares de anos, mas seu espírito permanecia no local onde tudo começou. Ali, aguardaria o retorno do último descendente de Yamato para um duelo final.</p>

                    <p className="historia-climax">E é aqui que você entra, jogador.</p>
                    <p>Você é Akira, o último descendente de Yamato. Guiado por divindades que escolheram seu lado, deverá retornar à terra natal e atravessar florestas corrompidas, templos abandonados, montanhas e territórios dominados pela maldição.</p>
                    <p>A cada deus derrotado, uma arma ancestral será recuperada. A cada arma purificada, parte da cor perdida do mundo retornará.</p>
                    <p>Mas a jornada não termina quando todas as armas forem recuperadas. Akira ainda precisará voltar para Hinogawa, onde o espírito de Izanagi estará esperando pelo juízo final.</p>
                    <p className="historia-final">A Lua de Sangue está no céu. A profecia está começando...</p>
                    <p className="historia-note">Esta história é baseada em elementos da mitologia japonesa. Por se tratar de uma obra inspirada nessas tradições, alguns personagens, eventos e detalhes podem apresentar alterações criativas.</p>
                </article>
            </main>
            <Footer />
        </div>
    )
}