import { Header } from '../../components/Header/header.tsx'
import { Footer } from '../../components/Footer/footer.tsx'
import './Minigame.css'
import BackgroundWood from '../../assets/img/background_Wood.png'
import enemyOne from '../../assets/img/minigame/1Iimigos_Akira.png'
import enemyTen from '../../assets/img/minigame/10Iimigos_Akira.png'
import enemyTwentyOne from '../../assets/img/minigame/21Inimigos_Akira.png'
import enemyOni from '../../assets/img/minigame/onihashimanSprite-0002 copy.png'
import enemyVariant from '../../assets/img/minigame/111111.png'
import CutSoundAsset from '../../songs/Cut.mp3'
import MusicSoundAsset from '../../songs/Music.mp3'
import { useEffect, useRef, useState } from 'react'

const gameObjectAssets = [enemyOne, enemyTen, enemyTwentyOne, enemyOni, enemyVariant]

type GameStatus = 'ready' | 'playing' | 'finished'

type GameObject = {
    id: number
    image: string
    x: number
    y: number
    vx: number
    vy: number
    rotation: number
    size: number
    sliced: boolean
    slicedAt: number
}

const MAX_MISSES = 5
const THROW_INTERVAL = 1050
const DIFFICULTY_INTERVAL = 10000

export function Minigame() {
    const arenaRef = useRef<HTMLDivElement>(null)
    const frameRef = useRef<number | null>(null)
    const objectsRef = useRef<GameObject[]>([])
    const pointerRef = useRef({ x: 0, y: 0, active: false })
    const lastThrowRef = useRef(0)
    const gameStartRef = useRef(0)
    const nextIdRef = useRef(0)
    const assetQueueRef = useRef<string[]>([])
    const audioContextRef = useRef<AudioContext | null>(null)
    const musicRef = useRef<HTMLAudioElement | null>(null)
    const [status, setStatus] = useState<GameStatus>('ready')
    const [objects, setObjects] = useState<GameObject[]>([])
    const [score, setScore] = useState(0)
    const [misses, setMisses] = useState(0)
    const [elapsedSeconds, setElapsedSeconds] = useState(0)
    const [soundEnabled, setSoundEnabled] = useState(true)

    const shuffleAssets = () => {
        const shuffledAssets = [...gameObjectAssets]
        for (let index = shuffledAssets.length - 1; index > 0; index -= 1) {
            const swapIndex = Math.floor(Math.random() * (index + 1))
            ;[shuffledAssets[index], shuffledAssets[swapIndex]] = [shuffledAssets[swapIndex], shuffledAssets[index]]
        }
        assetQueueRef.current = shuffledAssets
    }

    const getNextAsset = () => {
        if (assetQueueRef.current.length === 0) shuffleAssets()
        return assetQueueRef.current.shift() ?? gameObjectAssets[0]
    }

    const getAudioContext = () => {
        if (!audioContextRef.current) audioContextRef.current = new AudioContext()
        if (audioContextRef.current.state === 'suspended') void audioContextRef.current.resume()
        return audioContextRef.current
    }

    const playCutSound = () => {
        if (!soundEnabled) return
        const cutSound = new Audio(CutSoundAsset)
        cutSound.preload = 'auto'
        cutSound.volume = 1
        void cutSound.play().catch(() => playFallbackCutSound())
    }

    const playFallbackCutSound = () => {
        const context = getAudioContext()
        const oscillator = context.createOscillator()
        const gain = context.createGain()
        const now = context.currentTime

        oscillator.type = 'sawtooth'
        oscillator.frequency.setValueAtTime(760, now)
        oscillator.frequency.exponentialRampToValueAtTime(140, now + 0.12)
        gain.gain.setValueAtTime(0.0001, now)
        gain.gain.exponentialRampToValueAtTime(0.16, now + 0.01)
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14)
        oscillator.connect(gain)
        gain.connect(context.destination)
        oscillator.start(now)
        oscillator.stop(now + 0.15)
    }

    const stopMusic = () => {
        const music = musicRef.current
        if (!music) return
        music.pause()
        music.currentTime = 0
    }

    const startMusic = (force = false) => {
        if (!soundEnabled && !force) return
        if (!musicRef.current) {
            musicRef.current = new Audio(MusicSoundAsset)
            musicRef.current.loop = true
            musicRef.current.volume = 0.35
        }
        void musicRef.current.play().catch(() => undefined)
    }

    const finishGame = () => {
        if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
        stopMusic()
        frameRef.current = null
        objectsRef.current = []
        setObjects([])
        setStatus('finished')
    }

    const startGame = () => {
        if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
        objectsRef.current = []
        pointerRef.current.active = false
        lastThrowRef.current = 0
        gameStartRef.current = performance.now()
        shuffleAssets()
        setObjects([])
        setScore(0)
        setMisses(0)
        setElapsedSeconds(0)
        setStatus('playing')
        startMusic()
    }

    const minutes = Math.floor(elapsedSeconds / 60).toString().padStart(2, '0')
    const seconds = (elapsedSeconds % 60).toString().padStart(2, '0')

    const toggleSound = () => {
        setSoundEnabled((enabled) => {
            if (enabled) {
                stopMusic()
                return false
            }
            if (status === 'playing') startMusic(true)
            return true
        })
    }

    const cutObjectsAt = (x: number, y: number) => {
        let cutsCount = 0
        const now = performance.now()
        objectsRef.current = objectsRef.current.map((gameObject) => {
            const distance = Math.hypot(gameObject.x - x, gameObject.y - y)
            if (!gameObject.sliced && distance < gameObject.size * 0.54) {
                cutsCount += 1
                return { ...gameObject, sliced: true, slicedAt: now }
            }
            return gameObject
        })

        if (cutsCount > 0) {
            setScore((currentScore) => currentScore + cutsCount * 10)
            for (let cutIndex = 0; cutIndex < cutsCount; cutIndex += 1) {
                playCutSound()
            }
            setObjects([...objectsRef.current])
        }
    }

    const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
        const arena = arenaRef.current
        if (!arena || status !== 'playing') return
        const bounds = arena.getBoundingClientRect()
        const x = event.clientX - bounds.left
        const y = event.clientY - bounds.top
        pointerRef.current = { x, y, active: true }
        cutObjectsAt(x, y)
    }

    useEffect(() => {
        return () => {
            if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
            stopMusic()
            musicRef.current = null
            audioContextRef.current?.close()
        }
    }, [])

    useEffect(() => {
        if (status !== 'playing') return

        const timer = window.setInterval(() => {
            setElapsedSeconds(Math.floor((performance.now() - gameStartRef.current) / 1000))
        }, 1000)

        return () => window.clearInterval(timer)
    }, [status])

    useEffect(() => {
        if (status !== 'playing') return

        const animate = (time: number) => {
            const arena = arenaRef.current
            if (!arena) return
            const { width, height } = arena.getBoundingClientRect()
            if (!gameStartRef.current) gameStartRef.current = time
            const delta = Math.min((time - (lastThrowRef.current || time)) / 1000, 0.035)

            if (!lastThrowRef.current || time - lastThrowRef.current > THROW_INTERVAL) {
                const size = Math.max(64, Math.min(104, width * 0.11))
                const elapsedTime = time - gameStartRef.current
                const assetsToThrow = 1 + Math.floor(elapsedTime / DIFFICULTY_INTERVAL)

                for (let assetIndex = 0; assetIndex < assetsToThrow; assetIndex += 1) {
                    objectsRef.current.push({
                        id: nextIdRef.current++,
                        image: getNextAsset(),
                        x: size + Math.random() * Math.max(1, width - size * 2),
                        y: height + size,
                        vx: (Math.random() - 0.5) * width * 0.12,
                        vy: -height * (0.5 + Math.random() * 0.08),
                        rotation: Math.random() * 40 - 20,
                        size,
                        sliced: false,
                        slicedAt: 0,
                    })
                }
                lastThrowRef.current = time
            }

            let newMisses = 0
            objectsRef.current = objectsRef.current
                .map((gameObject) => {
                    const halfSize = gameObject.size / 2
                    const nextX = gameObject.x + gameObject.vx * delta
                    const hitLeftEdge = nextX < halfSize
                    const hitRightEdge = nextX > width - halfSize
                    const boundedX = Math.max(halfSize, Math.min(width - halfSize, nextX))

                    return {
                        ...gameObject,
                        x: boundedX,
                        vx: hitLeftEdge || hitRightEdge ? -gameObject.vx : gameObject.vx,
                        y: gameObject.y + gameObject.vy * delta,
                        vy: gameObject.vy + height * 0.24 * delta,
                        rotation: gameObject.rotation + gameObject.vx * delta * 0.08,
                    }
                })
                .filter((gameObject) => {
                    if (gameObject.sliced && time - gameObject.slicedAt > 360) return false
                    if (!gameObject.sliced && gameObject.y > height + gameObject.size) {
                        newMisses += 1
                        return false
                    }
                    return true
                })

            if (newMisses) {
                setMisses((currentMisses) => {
                    const totalMisses = currentMisses + newMisses
                    if (totalMisses >= MAX_MISSES) finishGame()
                    return totalMisses
                })
            }

            setObjects([...objectsRef.current])
            frameRef.current = requestAnimationFrame(animate)
        }

        frameRef.current = requestAnimationFrame(animate)
        return () => {
            if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
        }
    }, [status])

    return (
        <div className="minigamePage">
            <Header />
            <main
                ref={arenaRef}
                className="minigameArena"
                style={{ backgroundImage: `url(${BackgroundWood})` }}
                onPointerMove={handlePointerMove}
                onPointerLeave={() => { pointerRef.current.active = false }}
            >
                <div className="minigameHud">
                    <div>
                        <span>Pontos</span>
                        <strong>{score}</strong>
                    </div>
                    <div>
                        <span>Erros</span>
                        <strong>{misses}/{MAX_MISSES}</strong>
                    </div>
                    <div>
                        <span>Tempo</span>
                        <strong>{minutes}:{seconds}</strong>
                    </div>
                    <button
                        className="soundButton"
                        type="button"
                        onClick={toggleSound}
                        aria-label={soundEnabled ? 'Desativar som' : 'Ativar som'}
                        aria-pressed={soundEnabled}
                    >
                        {soundEnabled ? '🔊' : '🔇'}
                    </button>
                </div>

                {objects.map((gameObject) => (
                    <div
                        className={`thrownObject${gameObject.sliced ? ' isSliced' : ''}`}
                        key={gameObject.id}
                        style={{
                            left: gameObject.x,
                            top: gameObject.y,
                            width: gameObject.size,
                            height: gameObject.size,
                            transform: `translate(-50%, -50%) rotate(${gameObject.rotation}deg)`,
                        }}
                    >
                        {gameObject.sliced ? (
                            <>
                                <img className="objectSlice objectSliceLeft" src={gameObject.image} alt="Inimigo cortado" />
                                <img className="objectSlice objectSliceRight" src={gameObject.image} alt="Inimigo cortado" />
                            </>
                        ) : (
                            <img src={gameObject.image} alt="Inimigo para cortar" />
                        )}
                    </div>
                ))}

                <section className={`gamePanel gamePanel-${status}`}>
                    {status === 'ready' && (
                        <>

                            <h1>Teste suas habilidades!</h1>
                            <p className="gameDescription">Corte todos os inimigos o mais rápido que conseguir.</p>
                            <button className="playButton" type="button" onClick={startGame}>Play</button>
                        </>
                    )}
                    {status === 'finished' && (
                        <>
                            <p className="eyebrow gameOverTitle">Fim de jogo</p>
                            <h1>{score} pontos</h1>
                            <button className="playButton" type="button" onClick={startGame}>Jogar novamente</button>
                        </>
                    )}
                </section>
            </main>
            <Footer />
        </div>
    )
}