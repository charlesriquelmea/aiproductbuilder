"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, useInView, AnimatePresence, useMotionValue, useTransform, animate, useReducedMotion } from "framer-motion"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, X, ArrowRight, ShieldCheck, CreditCard, Users, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

// --- Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
}

const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

// --- Components ---

const CountUpNumber = ({ value, label, prefix = "", suffix = "" }: { value: number, label: string, prefix?: string, suffix?: string }) => {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" })
      return controls.stop
    }
  }, [isInView, value, count])

  useEffect(() => {
    return rounded.on("change", (latest) => setDisplayValue(latest))
  }, [rounded])

  return (
    <div ref={ref} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
      <div className="font-mono text-3xl font-bold text-[#2dd4bf]">
        {prefix}{displayValue.toLocaleString()}{suffix}
      </div>
      <div className="text-zinc-400 text-sm mt-2">{label}</div>
    </div>
  )
}

const TechMarquee = () => {
  const techs = [
    "v0.app", "Claude Code", "n8n", "Supabase", "Vercel", "GitHub", "Stripe", "Next.js 15"
  ]
  // Duplicate array for seamless loop
  const list = [...techs, ...techs, ...techs]

  return (
    <div className="w-full overflow-hidden py-4">
      <p className="text-zinc-500 text-[10px] sm:text-xs uppercase tracking-widest mb-6 text-center">
        En 8 semanas dominarás el stack que usan las startups que importan:
      </p>
      <div className="relative flex max-w-[100vw] overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 whitespace-nowrap px-4"
        >
          {list.map((tech, i) => (
            <Badge 
              key={i} 
              variant="outline" 
              className="bg-zinc-800 text-zinc-300 text-xs font-mono px-3 py-1 rounded-full border border-zinc-700 h-8"
            >
              {tech}
            </Badge>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

const CountdownTimer = () => {
  const targetDate = new Date("2026-05-31T23:59:00-04:00") // ET timezone (UTC-4 in April)
  const [timeLeft, setTimeLeft] = useState<{ dd: number; hh: number; mm: number; ss: number } | null>(null)
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        setIsFinished(true)
        return null
      }

      return {
        dd: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hh: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mm: Math.floor((difference / 1000 / 60) % 60),
        ss: Math.floor((difference / 1000) % 60),
      }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      const remaining = calculateTimeLeft()
      if (remaining) {
        setTimeLeft(remaining)
      } else {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!timeLeft && !isFinished) return null

  return (
    <div className="py-12 border-t border-zinc-800/50 mt-12">
      <AnimatePresence mode="wait">
        {isFinished ? (
          <motion.div
            key="closed"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 font-bold text-lg">
              <Clock className="w-5 h-5" />
              Inscripciones cerradas
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="timer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center space-y-6"
            aria-live="polite"
          >
            <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider">
              Inscripciones cierran en:
            </p>
            <div className="grid grid-cols-4 gap-4 px-4 sm:gap-6">
              {[
                { label: "DD", value: timeLeft?.dd },
                { label: "HH", value: timeLeft?.hh },
                { label: "MM", value: timeLeft?.mm },
                { label: "SS", value: timeLeft?.ss },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl w-16 h-20 sm:w-20 sm:h-24 flex items-center justify-center shadow-lg">
                    <span className="font-mono text-3xl sm:text-4xl font-bold text-[#f87171]">
                      {String(item.value).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-zinc-500 text-[10px] mt-2 font-bold">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function HeroUrgencySection() {
  const shouldReduceMotion = useReducedMotion()
  
  // Custom scroll target for the button
  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = document.querySelector("#aplicar")
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="bg-[#0a0a0a] text-[#fafafa] font-sans py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* BLOQUE 1 — Scarcity Badge */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Badge className="bg-red-500/10 border-red-500/30 text-[#f87171] hover:bg-red-500/15 transition-colors px-4 py-1.5 rounded-full flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-medium">
              Solo 18 cupos restantes · Cohort #1 cierra 31 de Mayo
            </span>
          </Badge>
        </motion.div>

        {/* BLOQUE 2 & 3 — Wake-up Call & Subheadline */}
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto leading-[1.1] tracking-tight text-balance">
            {["¿Cuántos proyectos llevas en el backlog", "que nunca pasaron de una", "porque no tenías quién los construyera?"].map((line, i) => (
              <motion.span
                key={i}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="block"
              >
                {i === 1 ? (
                  <>
                    {line.split(" ").slice(0, 4).join(" ")}{" "}
                    <span className="line-through text-zinc-600">idea en Notion</span>
                  </>
                ) : line}
              </motion.span>
            ))}
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto text-balance leading-relaxed"
          >
            Esa lista es tu costo de oportunidad real.
            <br className="hidden md:block" /> Alguien en tu industria ya tomó la decisión que tú estás postergando.
          </motion.p>
        </div>

        {/* BLOQUE 4 — Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Card Izquierda — teal glow */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative group border border-[#2dd4bf]/40 bg-zinc-900 rounded-2xl p-8 shadow-[0_0_20px_rgba(45,212,191,0.05)] hover:shadow-[0_0_40px_rgba(45,212,191,0.1)] transition-all"
          >
            <div className="absolute inset-0 bg-[#2dd4bf]/5 rounded-2xl pointer-events-none" />
            <Badge className="bg-[#2dd4bf]/10 text-[#2dd4bf] border-[#2dd4bf]/20 text-[10px] uppercase tracking-wider mb-6">
              ✦ Abril 2026 — Actúas ahora
            </Badge>
            <ul className="space-y-4">
              {[
                "Founding Member: acceso 1-on-1 con los fundadores",
                "Curriculum vivo que moldeas tú",
                "MVP en semanas, no en 18 meses",
                "Stack correcto desde el día 1 — cero deuda técnica",
                <span key="price">Precio Cohort #1: <b className="text-white text-xl">$1,897</b></span>
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 text-zinc-300 text-sm sm:text-base leading-snug">
                  <Check className="w-5 h-5 text-[#2dd4bf] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card Derecha — red glow */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative border border-red-500/40 bg-red-500/5 rounded-2xl p-8 transition-all"
          >
            <Badge className="bg-red-500/10 text-[#f87171] border-red-500/20 text-[10px] uppercase tracking-wider mb-6">
              ✦ Octubre 2026 — Si esperas
            </Badge>
            <ul className="space-y-4 opacity-70">
              {[
                "Cohort genérico, sin acceso a fundadores",
                "Curriculum rígido, diseñado para la masa",
                "Pagarás para migrar lo que mal-construiste",
                "Sigues dependiendo de developers externos",
                "El precio de mercado habrá subido un 40%"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 text-zinc-400 text-sm sm:text-base leading-snug">
                  <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* BLOQUE 5 — COI Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8">
          <CountUpNumber value={800} prefix="$" suffix="" label="por landing subcontratada · para siempre" />
          <CountUpNumber value={4} suffix=" sem" label="de latencia por cada proyecto dependiente de un dev" />
          <CountUpNumber value={8} suffix=" sem" label="de aprendizaje acelerado (vs 18 meses)" />
        </div>

        {/* BLOQUE 6 — Tech Marquee */}
        <TechMarquee />

        {/* BLOQUE 7 — CTA Block */}
        <div className="max-w-md mx-auto text-center space-y-8 pt-12">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              El mercado no espera a que estés listo.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Protolylat no vende cursos. Vende el tiempo de mercado que no puedes recuperar si esperas.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="#aplicar" onClick={handleCtaClick}>
                <Button 
                  className="w-full h-16 rounded-2xl font-bold text-lg bg-[#2dd4bf] text-black hover:bg-[#2dd4bf]/90 shadow-[0_0_24px_rgba(45,212,191,0.2)] hover:shadow-[0_0_32px_rgba(45,212,191,0.4)] transition-all flex items-center justify-center gap-3 group"
                  aria-label="Asegurar mi cupo en el Cohort #1"
                >
                  Asegurar mi cupo en el Cohort #1 — $1,897
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>

            <div className="space-y-2.5 text-zinc-500 text-[11px] sm:text-xs">
              <div className="flex items-center justify-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2dd4bf]/70" />
                <span>Garantía total si no construyes 3 portafolios funcionales</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CreditCard className="w-3.5 h-3.5 text-zinc-600" />
                <span>3 pagos de $632 (a 0, 30 y 60 días)</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Users className="w-3.5 h-3.5 text-red-400/70" />
                <span>Solo 18 cupos disponibles en el Cohort #1</span>
              </div>
            </div>
          </div>
        </div>

        {/* BLOQUE 8 — Countdown Timer */}
        <CountdownTimer />

      </div>
    </section>
  )
}
