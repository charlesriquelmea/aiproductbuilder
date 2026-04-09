"use client"

import { motion } from "framer-motion"
import { Monitor, Cpu, Workflow } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const icons = [Monitor, Cpu, Workflow]

export function ToolsSection() {
  const { t } = useLanguage()

  const mainTools = [0, 1, 2].map(i => ({
    icon: icons[i],
    label: t(`tools.main.${i}.label`),
    desc: t(`tools.main.${i}.desc`),
  }))

  const supportTools = [0, 1, 2, 3, 4].map(i => ({
    label: t(`tools.support.${i}.label`),
    name: t(`tools.support.${i}.name`),
  }))

  return (
    <section className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#7c3aed] font-mono text-sm mb-3 uppercase tracking-wider">
            {t('tools.tag')}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
            {t('tools.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {mainTools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#111111] border border-[#27272a] rounded-2xl p-8 flex flex-col items-center text-center hover:border-[#7c3aed]/50 transition-colors group"
            >
              <div className="size-16 rounded-2xl bg-[#1a1a1a] border border-[#27272a] flex items-center justify-center mb-6 group-hover:bg-[#7c3aed]/10 group-hover:border-[#7c3aed]/30 transition-colors">
                <tool.icon className="size-8 text-[#71717a] group-hover:text-[#7c3aed] transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{tool.label}</h3>
              <p className="text-sm text-[#71717a] leading-relaxed">{tool.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {supportTools.map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-[#0c0c0c] border border-[#27272a] rounded-xl p-4 text-center"
              >
                <p className="text-[10px] font-mono text-[#52525b] uppercase tracking-widest mb-1">
                  {tool.label}
                </p>
                <p className="text-sm font-semibold text-[#a1a1aa]">{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
