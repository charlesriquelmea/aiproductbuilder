"use client"

import { motion } from "framer-motion"
import { Globe, Zap, Cpu } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const icons = [Globe, Zap, Cpu]
const colors = [
  "from-[#7c3aed]/20 to-[#7c3aed]/5",
  "from-[#22c55e]/20 to-[#22c55e]/5",
  "from-[#f97316]/20 to-[#f97316]/5"
]
const borders = ["border-[#7c3aed]/30", "border-[#22c55e]/30", "border-[#f97316]/30"]
const iconColors = ["text-[#7c3aed]", "text-[#22c55e]", "text-[#f97316]"]
const badgeColors = [
  "bg-[#7c3aed]/10 text-[#c4b5fd] border-[#7c3aed]/20",
  "bg-[#22c55e]/10 text-[#86efac] border-[#22c55e]/20",
  "bg-[#f97316]/10 text-[#fdba74] border-[#f97316]/20"
]

export function PortfolioSection() {
  const { t } = useLanguage()

  const deliverables = [0, 1, 2].map(i => ({
    icon: icons[i],
    title: t(`portfolio.items.${i}.title`),
    desc: t(`portfolio.items.${i}.desc`),
    badge: t(`portfolio.items.${i}.badge`),
    color: colors[i],
    border: borders[i],
    iconColor: iconColors[i],
    badgeColor: badgeColors[i],
  }))

  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a] via-[#0f0f14] to-[#0a0a0a]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#7c3aed] font-mono text-sm mb-3 uppercase tracking-wider">
            {t('portfolio.tag')}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
            {t('portfolio.title')}
          </h2>
          <p className="text-[#71717a] mt-4 max-w-xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {deliverables.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative bg-linear-to-br ${item.color} border ${item.border} rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-[#111111] border border-[#27272a] p-3">
                    <item.icon className={`size-6 ${item.iconColor}`} />
                  </div>
                  <span className={`text-xs font-mono px-3 py-1 rounded-full border ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
