"use client"

import { motion } from "framer-motion"
import { Brain, Frown, DollarSign, RefreshCcw } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const icons = [Brain, Frown, DollarSign, RefreshCcw]
const colors = ["border-l-red-500/60", "border-l-orange-500/60", "border-l-amber-500/60", "border-l-red-400/60"]

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
}

export function PainPointsSection() {
  const { t } = useLanguage()
  
  // Create an array of pain points using translations
  const painPoints = [0, 1, 2, 3].map(i => ({
    icon: icons[i],
    title: t(`pain_points.items.${i}.title`),
    desc: t(`pain_points.items.${i}.desc`),
    color: colors[i]
  }))

  return (
    <section className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#7c3aed] font-mono text-sm mb-3 uppercase tracking-wider">
            {t('pain_points.tag')}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
            {t('pain_points.title')}{" "}
            <span className="text-[#71717a]">{t('pain_points.subtitle')}</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {painPoints.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}
              className={`bg-[#111111] border border-[#27272a] border-l-4 ${item.color} rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#1a1a1a] p-2.5 shrink-0">
                  <item.icon className="size-5 text-[#a1a1aa]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-[#71717a] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12 text-lg text-[#a1a1aa]"
        >
          {t('pain_points.footer')}{" "}
          <span className="text-[#7c3aed] font-semibold">Vibe Coding</span>.
        </motion.p>
      </div>
    </section>
  )
}
