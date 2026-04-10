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
      <div className="absolute inset-0 bg-linear-to-b from-violet/10 via-[#0a0a0a] to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.15),transparent_60%)]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-3 xs:px-4 sm:px-6 lg:px-8 w-full box-border">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start w-full min-w-0">

            {/* Badge */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0} className="w-full flex justify-center lg:justify-start">
              <Badge
                variant="outline"
                className="border-violet/50 bg-violet/10 text-[#c4b5fd] px-3 py-1.5 text-sm gap-2 max-w-full truncate"
              >
                <p className="size-2 rounded-full shrink-0 bg-violet animate-blink inline-block" />
                <span className="truncate">{t('hero.badge')}</span>
              </Badge>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white w-full wrap-break-word"
            >
              {t('hero.title_start')}{" "}
              <span className="text-violet">AI Product Builder</span>{" "}
              {t('hero.title_end')}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-lg text-[#a1a1aa] leading-relaxed w-full wrap-break-word"
            >
              {t('hero.description')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-col gap-3 w-full"
            >
              <a href="#aplicar" className="w-full">
                <Button
                  size="lg"
                  className="w-full bg-neon-green hover:bg-[#16a34a] text-lg font-semibold py-6
                    shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] transition-all"
                >
                  <span className="text-black truncate">{t('hero.cta_primary')}</span>
                </Button>
              </a>
              <a href="#curriculum" className="w-full">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-[#27272a] text-white hover:bg-[#1a1a1a] hover:text-white text-lg py-6"
                >
                  <span className="truncate">{t('hero.cta_secondary')}</span>
                </Button>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="grid grid-cols-2 justify-items-start gap-x-4 gap-y-2 text-sm text-[#a1a1aa] w-full"
            >
              <span className="flex items-center gap-1.5 min-w-0">
                <CheckCircle className="size-4 text-neon-green shrink-0" />
                <span className="truncate">{t('hero.stats.spots')}</span>
              </span>
              <span className="flex items-center gap-1.5 min-w-0">
                <Clock className="size-4 text-violet shrink-0" />
                <span className="truncate">{t('hero.stats.deadline')}</span>
              </span>
              <span className="flex items-center gap-1.5 min-w-0">
                <Rocket className="size-4 text-violet shrink-0" />
                <span className="truncate">{t('hero.stats.start')}</span>
              </span>
              <span className="flex items-center gap-1.5 min-w-0">
                <DollarSign className="size-4 text-neon-green shrink-0" />
                <span className="truncate">{t('hero.stats.guarantee')}</span>
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="hidden md:block"
          >
            <AnimatedTerminal />
          </motion.div>
        </div>
      </div>
    </section>
  )
}