import { useCallback, useEffect, useRef, useState } from 'react'

type Sfx = 'click' | 'win' | 'lose' | 'hint' | 'curtain'

/** Sonidos sintetizados con WebAudio: sin archivos, sin derechos. */
export function useSound() {
  const [enabled, setEnabled] = useState(false)
  const ctx = useRef<AudioContext | null>(null)

  const getCtx = () => {
    if (!ctx.current) {
      const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      ctx.current = new Ctor()
    }
    if (ctx.current.state === 'suspended') void ctx.current.resume()
    return ctx.current
  }

  // Ambiente: ruido filtrado (zumbido de sala) + tic de proyector.
  useEffect(() => {
    if (!enabled) return
    const c = getCtx()
    const buf = c.createBuffer(1, c.sampleRate * 2, c.sampleRate)
    const d = buf.getChannelData(0)
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1
    const noise = c.createBufferSource()
    noise.buffer = buf
    noise.loop = true
    const lp = c.createBiquadFilter()
    lp.type = 'lowpass'
    lp.frequency.value = 400
    const g = c.createGain()
    g.gain.value = 0.025
    noise.connect(lp).connect(g).connect(c.destination)
    noise.start()
    const tick = window.setInterval(() => {
      const o = c.createOscillator()
      const og = c.createGain()
      o.type = 'square'
      o.frequency.value = 90
      og.gain.setValueAtTime(0.018, c.currentTime)
      og.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 0.03)
      o.connect(og).connect(c.destination)
      o.start()
      o.stop(c.currentTime + 0.035)
    }, 1000 / 12)
    return () => {
      window.clearInterval(tick)
      noise.stop()
    }
  }, [enabled])

  const play = useCallback(
    (sfx: Sfx) => {
      if (!enabled) return
      const c = getCtx()
      const notes: Record<Sfx, number[]> = {
        click: [660],
        hint: [520, 780],
        win: [523, 659, 784, 1047],
        lose: [392, 330],
        curtain: [196, 147],
      }
      notes[sfx].forEach((f, i) => {
        const t = c.currentTime + i * 0.09
        const o = c.createOscillator()
        const g = c.createGain()
        o.type = sfx === 'lose' || sfx === 'curtain' ? 'triangle' : 'sine'
        o.frequency.value = f
        g.gain.setValueAtTime(0.0001, t)
        g.gain.exponentialRampToValueAtTime(0.12, t + 0.02)
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.35)
        o.connect(g).connect(c.destination)
        o.start(t)
        o.stop(t + 0.4)
      })
    },
    [enabled],
  )

  return { enabled, toggle: () => setEnabled((e) => !e), play }
}

export type PlaySfx = ReturnType<typeof useSound>['play']
