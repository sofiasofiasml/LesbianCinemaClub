export type Modality = 'A' | 'B' | 'C' | 'D'

export interface Movie {
  id: string
  title: string
  year: number
  modality: Modality
  /** Etiqueta del formato (ej. "SINOPSIS MISTERIOSA") */
  prompt: string
  /** Texto principal del reto (A, B, C) */
  challenge: string
  /** Tres pistas progresivas (solo modalidad D) */
  hints?: [string, string, string]
  options: [string, string, string, string]
  /** Índice de la opción correcta */
  correct: number
  /** Breve descripción mostrada al acertar */
  blurb: string
  /** Dato curioso mostrado al fallar */
  trivia: string
}

export interface RoundResult {
  movieId: string
  correct: boolean
  hintsUsed: number
  points: number
}

export type Screen = 'welcome' | 'game' | 'results'
