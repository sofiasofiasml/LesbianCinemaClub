import { movies, MAX_POINTS, ROUNDS } from '../data/movies'
import type { RoundResult } from '../types/game'

interface Props {
  results: RoundResult[]
  onRestart: () => void
}

const rank = (p: number) =>
  p <= 300
    ? 'Espectadora ocasional'
    : p <= 600
      ? 'Cinéfila queer en prácticas'
      : p <= 800
        ? 'Reina del cine sáfico'
        : 'ICONIC. Directora del Lesbian Cinema Club'

export default function ResultsScreen({ results, onRestart }: Props) {
  const total = results.reduce((s, r) => s + r.points, 0)
  const hits = results.filter((r) => r.correct).length
  const pct = Math.round((hits / ROUNDS) * 100)

  return (
    <main className="screen results">
      <p className="label">FIN DE LA SESIÓN · PRIVATE SCREENING Nº 19</p>
      <h1 className="title small-title">
        THE END...
        <br />
        <em>OR MAYBE NOT?</em>
      </h1>

      <div className="big-score">
        <strong>{total}</strong>
        <span className="label">/ {MAX_POINTS} PUNTOS</span>
      </div>
      <p className="rank">{rank(total)}</p>

      <div className="result-stats">
        <div>
          <strong>
            {hits}/{ROUNDS}
          </strong>
          <span className="label">PELÍCULAS ACERTADAS</span>
        </div>
        <div>
          <strong>{pct}%</strong>
          <span className="label">ACIERTOS</span>
        </div>
      </div>

      <ul className="reel">
        {results.map((r) => {
          const m = movies.find((x) => x.id === r.movieId)
          return (
            <li key={r.movieId} className={r.correct ? 'ok' : 'ko'}>
              <span>{r.correct ? '★' : '☆'}</span>
              <span>
                {m?.title} <small>({m?.year})</small>
              </span>
              <span className="label">{r.points} pts</span>
            </li>
          )
        })}
      </ul>

      <p className="outro">
        El cine tiene muchas historias de amor, pero algunas de las mejores son las que nos hacen
        sentir representadas. Gracias por formar parte de esta sesión tan especial.
      </p>

      <div className="stamp" aria-label="Official Lesbian Cinema Club member">
        <span>OFFICIAL</span>
        <strong>LESBIAN CINEMA CLUB</strong>
        <span>MEMBER ♥</span>
      </div>

      <button className="btn ghost" onClick={onRestart}>
        VOLVER A VER LA SESIÓN
      </button>
    </main>
  )
}
