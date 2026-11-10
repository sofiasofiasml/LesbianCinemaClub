interface Props {
  round: number
  total: number
  hits: number
  points: number
}

export default function ScoreBoard({ round, total, hits, points }: Props) {
  return (
    <header className="scoreboard">
      <div className="stat">
        <span className="label">RONDA</span>
        <strong>
          {round}/{total}
        </strong>
      </div>
      <div className="stat">
        <span className="label">ACIERTOS</span>
        <strong>{hits}</strong>
      </div>
      <div className="stat points">
        <span className="label">PUNTOS</span>
        <strong key={points}>{points}</strong>
      </div>
      <div
        className="film-progress"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={round - 1}
      >
        {Array.from({ length: total }).map((_, i) => (
          <i key={i} className={i < round - 1 ? 'done' : i === round - 1 ? 'now' : ''} />
        ))}
      </div>
    </header>
  )
}
