"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"
import { useLanguage } from "@/context/LanguageContext"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLang(lang === 'es' ? 'en' : 'es')
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-[#27272a]/50"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            {/* Logo placeholder */}
          </a>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border
               border-violet/50 hover:border-violet/70 cursor-pointer
                text-xs font-mono text-[#a1a1aa] transition-colors"
            >
              <Globe className="size-3" />
              <span className={lang === 'es' ? 'text-violet-500 font-bold' : ''}>ES</span>
              <span className="text-[#3f3f46]">/</span>
              <span className={lang === 'en' ? 'text-violet-500 font-bold' : ''}>EN</span>
            </button>
            <div className="flex flex-col items-end gap-0.5">
              <CountdownTimer compact />
              <span className="text-[10px] text-[#71717a] font-mono">{t('navbar.timer_label')}</span>
            </div>
            <a href="#aplicar">
              <Button className="bg-neon-green hover:bg-[#16a34a] text-black font-semibold px-5">
                <span className="text-black">{t('navbar.cta')}</span>
              </Button>
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded-md border border-[#27272a] text-xs font-mono text-[#a1a1aa]"
            >
              <span>{lang.toUpperCase()}</span>
            </button>
            <button
              className="text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? t('navbar.aria_close') : t('navbar.aria_open')}
            >
              {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-[#27272a]/50"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              <div className="flex flex-col gap-0.5">
                <CountdownTimer compact />
                <span className="text-[10px] text-[#71717a] font-mono">{t('navbar.timer_label')}</span>
              </div>
              <a href="#aplicar" onClick={() => setMobileOpen(false)}>
                <Button className="w-full bg-neon-green hover:bg-[#16a34a] text-black font-semibold">
                  <span className="text-black">{t('navbar.cta')}</span>
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
