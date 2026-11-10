import type { ReactNode } from 'react'
import type { Movie } from '../types/game'

interface Props {
  movie: Movie
  round: number
  children: ReactNode
}

/** Tarjeta con forma de entrada de cine. */
export default function QuestionCard({ movie, round, children }: Props) {
  return (
    <article className="ticket">
      <div className="ticket-head">
        <span className="label">ADMIT ONE</span>
        <span className="label">SALA {String(round).padStart(2, '0')}</span>
      </div>
      <h2 className="ticket-kind">{movie.prompt}</h2>
      {children}
    </article>
  )
}
