interface Props {
  options: string[]
  selected: number | null
  correct: number
  revealed: boolean
  onSelect: (i: number) => void
}

export default function AnswerOptions({ options, selected, correct, revealed, onSelect }: Props) {
  return (
    <div className="options" role="radiogroup" aria-label="Respuestas">
      {options.map((o, i) => {
        const state = revealed
          ? i === correct
            ? 'right'
            : i === selected
              ? 'wrong'
              : 'faded'
          : i === selected
            ? 'selected'
            : ''
        return (
          <button
            key={o}
            role="radio"
            aria-checked={i === selected}
            className={`option ${state}`}
            disabled={revealed}
            onClick={() => onSelect(i)}
          >
            <span className="letter">{'ABCD'[i]}</span>
            <span>{o}</span>
          </button>
        )
      })}
    </div>
  )
}
