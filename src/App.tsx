import { useState } from 'react'
import WelcomeScreen from './components/WelcomeScreen'
import GameScreen from './components/GameScreen'
import ResultsScreen from './components/ResultsScreen'
import { useSound } from './hooks/useSound'
import type { RoundResult, Screen } from './types/game'

export default function App() {
  const [screen, setScreen] = useState<Screen>('welcome')
  const [results, setResults] = useState<RoundResult[]>([])
  const [curtain, setCurtain] = useState(false)
  const [gameKey, setGameKey] = useState(0)
  const sound = useSound()

  // Cortinas: se cierran, cambia la pantalla bajo ellas, se abren.
  const go = (next: Screen) => {
    sound.play('curtain')
    setCurtain(true)
    window.setTimeout(() => {
      setScreen(next)
      window.scrollTo(0, 0)
    }, 800)
    window.setTimeout(() => setCurtain(false), 1900)
  }

  const finish = (r: RoundResult[]) => {
    setResults(r)
    go('results')
  }
  const restart = () => {
    setGameKey((k) => k + 1)
    go('game')
  }

  return (
    <div className="app">
      <div className="grain" aria-hidden />
      <button
        className="sound-toggle"
        onClick={sound.toggle}
        aria-pressed={sound.enabled}
        aria-label={sound.enabled ? 'Silenciar sonido' : 'Activar sonido'}
      >
        {sound.enabled ? '🔊 SONIDO ON' : '🔇 SONIDO OFF'}
      </button>

      {screen === 'welcome' && <WelcomeScreen onStart={() => go('game')} />}
      {screen === 'game' && <GameScreen key={gameKey} onFinish={finish} play={sound.play} />}
      {screen === 'results' && <ResultsScreen results={results} onRestart={restart} />}

      {curtain && (
        <div className="curtains" aria-hidden>
          <div className="curtain left" />
          <div className="curtain right" />
        </div>
      )}
    </div>
  )
}
