import { Header } from '../../components/Header/header.tsx'
import { Footer } from '../../components/Footer/footer.tsx'
import './Gameplay.css'
import akirasGif from '../../assets/img/Gameplay/Akiras.gif'
import akiraFemaleA from '../../assets/img/Gameplay/Akiras/female/akirafa-frame0.png'
import akiraFemaleB from '../../assets/img/Gameplay/Akiras/female/akirafb-frame0.png'
import akiraFemaleE from '../../assets/img/Gameplay/Akiras/female/akirafe-frame0.png'
import akiraFemaleK from '../../assets/img/Gameplay/Akiras/female/akirafk-frame0.png'
import akiraMaleA from '../../assets/img/Gameplay/Akiras/male/akirama-frame0.png'
import akiraMaleB from '../../assets/img/Gameplay/Akiras/male/akiramb-frame0.png'
import akiraMaleE from '../../assets/img/Gameplay/Akiras/male/akirame-frame0 (1).png'
import akiraMaleK from '../../assets/img/Gameplay/Akiras/male/akiramk-frame0 (1).png'
import bow from '../../assets/img/Gameplay/armas/ARCO E FLECHA.png'
import bo from '../../assets/img/Gameplay/armas/BO.png'
import katana from '../../assets/img/Gameplay/armas/KATANA.png'
import kusarigama from '../../assets/img/Gameplay/armas/KUSARIGAMA.png'
import enemyOne from '../../assets/img/Gameplay/Inimigos/1Iimigos_Akira.png'
import enemyTen from '../../assets/img/Gameplay/Inimigos/10Iimigos_Akira.png'
import enemyTwentyOne from '../../assets/img/Gameplay/Inimigos/21Inimigos_Akira.png'
import oni from '../../assets/img/Gameplay/Inimigos/onihashimanSprite-0002.png'
import hashiman from '../../assets/img/Gameplay/Inimigos/hashimanSprite-0002.png'

export function Gameplay() {
    return (
        <div>
            <Header />
            <main className="gameplayPage">
                <section className="gameplayHero">
                    <div className="gameplayHeroCopy">
                        <p className="gameplayKicker">Escolha seu personagem</p>
                        <h1 className="titleGameplay">A jornada se inicia...</h1>
                        <p className="gameplayLead">Sua primeira escolha é a seleção de personagem. A versão masculina possui velocidade de ataque menor, porém, um dano maior, enquanto a versão feminina possui dano reduzido, mas velocidade de ataque aumentada..</p>
                    </div>
                    <figure className="gameplayMotion">
                        <figcaption>Escolha seu estilo e encontre seu caminho.</figcaption>
                        <div className="figure" />
                        <img src={akirasGif} alt="Animação de Akira em combate" />
                    </figure>
                </section>

                <section className="gameplaySection gameplayFoundations">
                    <div className="sectionHeading">
                        <p className="gameplayKicker">Conceitos básicos</p>
                        <h2>Três princípios da jornada</h2>
                    </div>
                    <div className="mechanicsGrid">
                        <article className="mechanicCard">
                            <span>01</span>
                            <h3>Caminho para casa</h3>
                            <p>Enfrente os desafios do mundo de Akira com estratégia e atenção. As armas conquistadas ampliam sua mobilidade e lhe dão habilidades únicas: o bastão permite saltos mais longos, enquanto a Kusarigama ajuda a escalar e alcançar novas áreas. Estes são apenas alguns das diversas habilidades desbloqueadas, cabe ao jogador buscar por todas elas.</p>
                        </article>
                        <article className="mechanicCard">
                            <span>02</span>
                            <h3>Crie combos únicos</h3>
                            <p>À medida que avança na história, novas armas serão desbloqueadas, e durante o combate, será necessário utilizar os diferentes estilos de combates disponíveis, e misturá-los para formar combos a fim de causar um estrago maior em seus inimigos. A cada inimigo novo, uma nova estratégia deverá ser utilizada, e cada arma recuperada, um universo de combinações lhe é despertado.</p>
                        </article>
                        <article className="mechanicCard">
                            <span>03</span>
                            <h3>Purifique o caminho</h3>
                            <p>À cada divindade derrotada e arma recuperada, irá devolver para o Japão, a cor e a vida que um dia lhe foi roubada. Essa maldição é representada pela cor avermelhada no mundo, e a cada desafio concluído, o mundo voltará ao normal.</p>
                        </article>
                    </div>
                </section>

                <section className="gameplaySection gameplayCombat">
                    <div className="sectionHeading">
                        <p className="gameplayKicker">Identidade do guerreiro</p>
                        <h2>Akira é quem você decide ser</h2>
                        <p>Cada divindade derrotada, uma nova arma é desbloqueada, e consequentemente, uma nova gameplay com um novo universo de combinações a ser explorado.</p>
                    </div>
                    <div className="akiraRoster">
                        <div className="akiraGroup">
                            <p>Variações femininas</p>
                            <div className="akiraSprites">
                                <img src={akiraFemaleA} alt="Akira feminino, variação A" />
                                <img src={akiraFemaleB} alt="Akira feminino, variação B" />
                                <img src={akiraFemaleE} alt="Akira feminino, variação E" />
                                <img src={akiraFemaleK} alt="Akira feminino, variação K" />
                            </div>
                        </div>
                        <div className="akiraGroup">
                            <p>Variações masculinas</p>
                            <div className="akiraSprites">
                                <img src={akiraMaleA} alt="Akira masculino, variação A" />
                                <img src={akiraMaleB} alt="Akira masculino, variação B" />
                                <img src={akiraMaleE} alt="Akira masculino, variação E" />
                                <img src={akiraMaleK} alt="Akira masculino, variação K" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="gameplaySection weaponsSection">
                    <div className="sectionHeading">
                        <p className="gameplayKicker">Makai</p>
                        <h2>Quatro formas de lutar, infinitas possibilidades</h2>
                        <p>As armas carregam a memória da família de Yamato. Cada uma muda a distância, o ritmo e a leitura de um combate.</p>
                    </div>
                    <div className="weaponsGrid">
                        <article className="weaponCard">
                            <img src={katana} alt="Katana Makai" />
                            <div>
                                <span>01 · Precisão</span>
                                <h3>Katana</h3>
                                <p>Rápida, direta e letal em combates próximos.</p>
                                <span>Habilidade de sobrevivência</span>
                                <p><strong>Corte Makai:</strong> rompe cipós, selos e obstáculos corrompidos que escondem novas passagens.</p>
                                <span>Habilidade de combate</span>
                                <p><strong>Lua Crescente:</strong> um parry preciso bloqueia o golpe inimigo seguido de um contra-ataque veloz.</p>
                            </div>
                        </article>
                        <article className="weaponCard">
                            <img src={bow} alt="Arco e flecha" />
                            <div>
                                <span>02 · Alcance</span>
                                <h3>Arco e flecha</h3>
                                <p>Controle o campo e ataque antes que o inimigo se aproxime.</p>
                                <span>Habilidade de sobrevivência</span>
                                <p><strong>Flecha-Guia:</strong> aciona alvos, interruptores e mecanismos distantes para liberar caminhos.</p>
                                <span>Habilidade de combate</span>
                                <p><strong>Chuva Espectral:</strong> a flecha se multiplica em flechas menores, atingindo uma pequena área e marcando inimigos, segundos depois, essa marca explode e parte do dano causado é replicado.</p>
                            </div>
                        </article>
                        <article className="weaponCard">
                            <img src={bo} alt="Bō, bastão de combate" />
                            <div>
                                <span>03 · Equilíbrio</span>
                                <h3>Bō</h3>
                                <p>Defesa e alcance em um estilo versátil e disciplinado.</p>
                                <span>Habilidade de sobrevivência</span>
                                <p><strong>Impulso:</strong> usa o bastão para saltar mais longe, alcançar plataformas e atravessar abismos.</p>
                                <span>Habilidade de combate</span>
                                <p><strong>Roda de Tempestade:</strong> um giro amplo repele inimigos pesados e levanta inimigos menores.</p>
                            </div>
                        </article>
                        <article className="weaponCard">
                            <img src={kusarigama} alt="Kusarigama" />
                            <div>
                                <span>04 · Controle</span>
                                <h3>Kusarigama</h3>
                                <p>Prenda, alcance e surpreenda com ataques de trajetórias imprevisíveis.</p>
                                <span>Habilidade de sobrevivência</span>
                                <p><strong>Laço da Misericórdia:</strong> prende pontos de ancoragem e permite escalar paredes.</p>
                                <span>Habilidade de combate</span>
                                <p>Corrente Predadora: captura um inimigo para puxar um inimigo menor até Akira ou lança Akira até o alvo, quando encarar inimigos maiores.</p>
                            </div>
                        </article>
                    </div>
                </section>

                <section className="gameplaySection enemiesSection">
                    <div className="sectionHeading">
                        <p className="gameplayKicker">Ameaças do caminho</p>
                        <h2>Leia o inimigo antes de atacar</h2>
                        <p>Cada criatura possui um ritmo próprio. Observe seus padrões, use o cenário e o tempo a seu favor e escolha a arma certa para o confronto.</p>
                    </div>
                    <div className="enemiesGrid">
                        <article className="enemyCard">
                            <div className="enemyArtwork"><img src={enemyOne} alt="Inimigo corrompido da primeira área" /></div>
                            <div>
                                <span>01 · Sentinela</span>
                                <h3>Worg</h3>
                                <p>Ataque devastador que faz o inimigo sangrar até a morte.</p>
                            </div>
                        </article>
                        <article className="enemyCard">
                            <div className="enemyArtwork"><img src={enemyTen} alt="Inimigo corrompido da área intermediária" /></div>
                            <div>
                                <span>02 · Emboscador</span>
                                <h3>Entidade aflita</h3>
                                <p>Um ser agonizante que roga para que chegue sua hora e enfim possa deixar este mundo.</p>
                            </div>
                        </article>
                        <article className="enemyCard">
                            <div className="enemyArtwork"><img src={enemyTwentyOne} alt="Inimigo corrompido da área avançada" /></div>
                            <div>
                                <span>03 · Guardião</span>
                                <h3>Entidade guerreira</h3>
                                <p>Um duelista que mesmo morto, jamais conheceu a derrota.</p>
                            </div>
                        </article>
                        <article className="enemyCard">
                            <div className="enemyArtwork"><img src={oni} alt="Oni, criatura corrompida" /></div>
                            <div>
                                <span>04 · Yokai</span>
                                <h3>Oni</h3>
                                <p>Um ser corrompido que serve aos seres divinos, uma fera incontrolável capaz de suportar qualquer coisa.</p>
                            </div>
                        </article>
                    </div>
                    <article className="bossPlaceholder bossCard bossCard--revealed">
                        <div className="bossPlaceholderArtwork"><img src={hashiman} alt="Hashiman, deus corrompido da guerra" /></div>
                        <div className="bossPlaceholderCopy">
                            <p className="gameplayKicker">Primeiro confronto</p>
                            <h2>Hashiman</h2>
                            <p>Deus da guerra e protetor dos samurais. Empunhou o arco e a flecha para defender seu povo durante guerras cada vez mais violentas, mas acabou consumido pelo poder da arma.</p>
                            <span className="bossStatus">Arco e flecha</span>
                        </div>
                    </article>
                    <article className="bossPlaceholder">
                        <div className="bossPlaceholderArtwork" aria-hidden="true"><span>J</span></div>
                        <div className="bossPlaceholderCopy">
                            <p className="gameplayKicker">Segundo confronto</p>
                            <h2>Jizō</h2>
                            <p>Inimigo em desenvolvimento...</p>
                            <span className="bossStatus">Bo</span>
                        </div>
                    </article>
                    <article className="bossPlaceholder">
                        <div className="bossPlaceholderArtwork" aria-hidden="true"><span>I</span></div>
                        <div className="bossPlaceholderCopy">
                            <p className="gameplayKicker">Terceiro confronto</p>
                            <h2>Inari</h2>
                            <p>Inimigo em desenvolvimento...</p>
                            <span className="bossStatus">Kusarigama</span>
                        </div>
                    </article>
                </section>
            </main>
            <Footer />
        </div>
    )
}