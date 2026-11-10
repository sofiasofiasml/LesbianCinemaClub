interface Props {
  hints: string[]
  shown: number
  locked: boolean
  onUnlock: () => void
}

/** La pista 1 es gratis. Cada pista extra resta 25 puntos. */
export default function HintSystem({ hints, shown, locked, onUnlock }: Props) {
  return (
    <div className="hints">
      {hints.slice(0, shown).map((h, i) => (
        <p key={i} className="hint">
          <span className="label">PISTA {i + 1}</span>
          {h}
        </p>
      ))}
      {shown < hints.length && !locked && (
        <button className="btn ghost" onClick={onUnlock}>
          🎞 DESBLOQUEAR PISTA {shown + 1} (−25 pts)
        </button>
      )}
    </div>
  )
}
