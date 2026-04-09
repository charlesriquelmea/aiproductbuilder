"use client"

import { motion } from "framer-motion"
import { Building2, Users, Gem } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const icons = [Building2, Users, Gem]
const accents = ["text-[#7c3aed]", "text-[#22c55e]", "text-[#f97316]"]
const borders = ["border-[#7c3aed]/20", "border-[#22c55e]/20", "border-[#f97316]/20"]

export function SocialProofSection() {
  const { t } = useLanguage()

  const proofCards = [0, 1, 2].map(i => ({
    icon: icons[i],
    title: t(`social_proof.items.${i}.title`),
    desc: t(`social_proof.items.${i}.desc`),
    accent: accents[i],
    border: borders[i],
  }))

  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f14] to-[#0a0a0a]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#7c3aed] font-mono text-sm mb-3 uppercase tracking-wider">
            {t('social_proof.tag')}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
            {t('social_proof.title')}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {proofCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-[#111111]/80 backdrop-blur border ${card.border} rounded-xl p-6 text-left`}
            >
              <div className={`inline-flex items-center justify-center rounded-xl bg-[#1a1a1a] border border-[#27272a] p-3 mb-4`}>
                <card.icon className={`size-6 ${card.accent}`} />
              </div>
              <h3 className="font-semibold text-white mb-3">{card.title}</h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 max-w-3xl mx-auto bg-gradient-to-r from-[#7c3aed]/10 via-[#7c3aed]/5 to-[#7c3aed]/10 border border-[#7c3aed]/20 rounded-xl p-6 md:p-8 text-center"
        >
          <p className="text-xl md:text-2xl font-bold text-white mb-3 text-balance">
            {t('social_proof.blueprint_title')}
          </p>
          <p className="text-xl md:text-2xl font-bold text-[#7c3aed] mb-5 text-balance">
            {t('social_proof.blueprint_subtitle')}
          </p>
          <p className="text-[#a1a1aa] leading-relaxed">
            {t('social_proof.blueprint_desc')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
