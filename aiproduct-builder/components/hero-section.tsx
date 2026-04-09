"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Rocket, DollarSign } from "lucide-react"
import { AnimatedTerminal } from "@/components/animated-terminal"
import { useLanguage } from "@/context/LanguageContext"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export function HeroSection() {
  const { t } = useLanguage()

return (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
    {/* Background gradient */}
    <div className="absolute inset-0 bg-linear-to-b from-violet/10 via-[#0a0a0a] to-[#0a0a0a]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.15),transparent_60%)]" />

    {/* Grid pattern overlay */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />

    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left content */}
        <div className="flex flex-col gap-6">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <Badge
              variant="outline"
              className="border-violet/50 bg-violet/10 text-[#c4b5fd] px-4 py-2 text-sm gap-2
              max-[424px]:text-xs max-[424px]:px-2 max-[424px]:py-1
              max-[375px]:text-[11px] max-[320px]:text-[10px]"
            >
              <p className="size-2 rounded-full h-fit w-full bg-violet animate-blink inline-block" />
              {t('hero.badge')}
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="
              text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white text-balance
              max-[424px]:text-2xl
              max-[375px]:text-xl
              max-[320px]:text-lg
            "
          >
            {t('hero.title_start')}{" "}
            <span className="text-violet">AI Product Builder</span>{" "}
            {t('hero.title_end')}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg text-[#a1a1aa] leading-relaxed max-w-xl
            max-[424px]:text-base
            max-[375px]:text-sm
            max-[320px]:text-xs"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-col sm:flex-row gap-4 max-[424px]:flex-col"
          >
            <a href="#aplicar">
              <Button
                size="lg"
                className="
                  bg-neon-green hover:bg-[#16a34a] text-lg px-8 py-6 font-semibold
                  shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.5)]
                  transition-all
                  max-[424px]:text-base max-[424px]:px-6 max-[424px]:py-4
                  max-[375px]:text-sm max-[375px]:px-4 max-[375px]:py-3
                  max-[320px]:text-xs max-[320px]:px-3 max-[320px]:py-2
                "
              >
                <span className="text-black">{t('hero.cta_primary')}</span>
              </Button>
            </a>
            <a href="#curriculum">
              <Button
                variant="outline"
                size="lg"
                className="
                  border-[#27272a] text-white hover:bg-[#1a1a1a] hover:text-white text-lg px-8 py-6
                  max-[424px]:text-base max-[424px]:px-6 max-[424px]:py-4
                  max-[375px]:text-sm max-[375px]:px-4 max-[375px]:py-3
                  max-[320px]:text-xs max-[320px]:px-3 max-[320px]:py-2
                "
              >
                {t('hero.cta_secondary')}
              </Button>
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#a1a1aa]
            max-[424px]:text-xs max-[424px]:gap-x-3
            max-[375px]:text-[11px] max-[320px]:text-[10px]"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle className="size-4 text-neon-green max-[424px]:size-3 max-[375px]:size-2.5" />
              {t('hero.stats.spots')}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-4 text-violet max-[424px]:size-3 max-[375px]:size-2.5" />
              {t('hero.stats.deadline')}
            </span>
            <span className="flex items-center gap-1.5">
              <Rocket className="size-4 text-violet max-[424px]:size-3 max-[375px]:size-2.5" />
              {t('hero.stats.start')}
            </span>
            <span className="flex items-center gap-1.5">
              <DollarSign className="size-4 text-neon-green max-[424px]:size-3 max-[375px]:size-2.5" />
              {t('hero.stats.guarantee')}
            </span>
          </motion.div>
        </div>

        {/* Right side: animated terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="hidden lg:block"
        >
          <AnimatedTerminal />
        </motion.div>
      </div>
    </div>
  </section>
)


}
