interface Props {
  onStart: () => void
}

export default function WelcomeScreen({ onStart }: Props) {
  return (
    <main className="screen welcome">
      <div className="marquee" aria-hidden>
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} style={{ animationDelay: `${(i % 6) * 0.2}s` }} />
        ))}
      </div>

      <p className="label">PRIVATE SCREENING Nº 19</p>
      <h1 className="title">
        <span>Lesbian</span>
        <span>Cinema</span>
        <span>Club</span>
      </h1>
      <p className="subtitle">The sapphic movie experience</p>

      <div className="stars" aria-hidden>
        ★ ♥ ★
      </div>

      <p className="intro">
        Bienvenida a tu propio club de cine. Hoy toca demostrar cuánto sabes de historias de amor,
        miradas imposibles, romances secretos y mujeres que nos han hecho suspirar delante de una
        pantalla.
      </p>
      <p className="label dim">Una experiencia cinematográfica para Irina</p>

      <button className="btn primary big" onClick={onStart}>
        ENTRAR AL CINE
      </button>
      <p className="label dim small">10 rondas · 1.000 puntos · palomitas opcionales</p>
    </main>
  )
}
