import { useMemo, useState } from 'react'
import { movies, ROUNDS } from '../data/movies'
import type { RoundResult } from '../types/game'
import type { PlaySfx } from '../hooks/useSound'
import ScoreBoard from './ScoreBoard'
import QuestionCard from './QuestionCard'
import AnswerOptions from './AnswerOptions'
import HintSystem from './HintSystem'

const POINTS = [100, 75, 50]
const CONFETTI = ['★', '♥', '✦', '♥', '★', '✧', '♥', '★', '✦', '♥', '★', '✧']

const shuffle = (n: number) => {
  const a = Array.from({ length: n }, (_, i) => i)
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

interface Props {
  onFinish: (results: RoundResult[]) => void
  play: PlaySfx
}

export default function GameScreen({ onFinish, play }: Props) {
  const [idx, setIdx] = useState(0)
  const [results, setResults] = useState<RoundResult[]>([])
  const [selected, setSelected] = useState<number | null>(null)
  const [confirmed, setConfirmed] = useState(false)
  const [hintsShown, setHintsShown] = useState(1)

  // Orden aleatorio de respuestas por ronda (se calcula una sola vez).
  const orders = useMemo(() => movies.map((m) => shuffle(m.options.length)), [])

  const movie = movies[idx]
  const order = orders[idx]
  const options = order.map((o) => movie.options[o])
  const correctIdx = order.indexOf(movie.correct)
  const hints = movie.hints
  const hintsUsed = hints ? hintsShown - 1 : 0
  const last = results[results.length - 1]
  const isRight = confirmed && selected === correctIdx

  const hits = results.filter((r) => r.correct).length
  const points = results.reduce((s, r) => s + r.points, 0)

  const confirm = () => {
    if (selected === null || confirmed) return
    const right = selected === correctIdx
    const pts = right ? POINTS[hintsUsed] : 0
    setConfirmed(true)
    setResults((r) => [...r, { movieId: movie.id, correct: right, hintsUsed, points: pts }])
    play(right ? 'win' : 'lose')
  }

  const next = () => {
    if (idx + 1 >= ROUNDS) return onFinish(results)
    setIdx(idx + 1)
    setSelected(null)
    setConfirmed(false)
    setHintsShown(1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    play('click')
  }

  return (
    <main className="screen game">
      <ScoreBoard round={idx + 1} total={ROUNDS} hits={hits} points={points} />

      {/* key => la tarjeta se re-monta y anima en cada ronda */}
      <div className="card-wrap" key={movie.id}>
        <QuestionCard movie={movie} round={idx + 1}>
          <p className="challenge">{movie.challenge}</p>

          {hints && (
            <HintSystem
              hints={hints}
              shown={hintsShown}
              locked={confirmed}
              onUnlock={() => {
                setHintsShown((h) => h + 1)
                play('hint')
              }}
            />
          )}

          <div className="perforation" aria-hidden />

          <AnswerOptions
            options={options}
            selected={selected}
            correct={correctIdx}
            revealed={confirmed}
            onSelect={(i) => {
              setSelected(i)
              play('click')
            }}
          />

          {!confirmed && (
            <button className="btn primary" disabled={selected === null} onClick={confirm}>
              {selected === null ? 'ELIGE UNA RESPUESTA' : 'CONFIRMAR'}
            </button>
          )}
        </QuestionCard>

        {confirmed && (
          <section className={`feedback ${isRight ? 'good' : 'bad'}`} role="status">
            {isRight && (
              <div className="burst" aria-hidden>
                {CONFETTI.map((c, i) => (
                  <span key={i} style={{ ['--i' as string]: i }}>
                    {c}
                  </span>
                ))}
                <b className="plus">+{last?.points}</b>
              </div>
            )}
            <h3>{isRight ? '¡BRAVO, CRÍTICA DE CINE!' : 'Esta se te ha escapado entre los créditos...'}</h3>
            <p className="film-name">
              {movie.title} <small>({movie.year})</small>
            </p>
            {isRight ? (
              <>
                <p>{movie.blurb}</p>
                <p className="label">
                  {hintsUsed === 0 ? 'SIN PISTAS' : `${hintsUsed} PISTA${hintsUsed > 1 ? 'S' : ''} USADA${hintsUsed > 1 ? 'S' : ''}`}{' '}
                  · +{last?.points} PTS
                </p>
              </>
            ) : (
              <>
                <p>{movie.blurb}</p>
                <p className="trivia">
                  <span className="label">DATO CURIOSO</span>
                  {movie.trivia}
                </p>
                <p className="label">Nadie las sabe todas. Sigue la sesión ♥</p>
              </>
            )}
            {isRight && (
              <p className="trivia">
                <span className="label">DATO CURIOSO</span>
                {movie.trivia}
              </p>
            )}
            <button className="btn primary" onClick={next}>
              {idx + 1 >= ROUNDS ? 'VER RESULTADOS' : 'SIGUIENTE PELÍCULA →'}
            </button>
          </section>
        )}
      </div>
    </main>
  )
}
