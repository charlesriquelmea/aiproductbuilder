"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Twitter, Linkedin, Instagram } from "lucide-react"
import { CountdownTimer } from "@/components/countdown-timer"
import { useLanguage } from "@/context/LanguageContext"

export function Footer() {
  const { t } = useLanguage()

  const links = [
    { label: t('footer.links.0.label'), href: "#curriculum" },
    { label: t('footer.links.1.label'), href: "#garantia" },
    { label: t('footer.links.2.label'), href: "#faq" },
    { label: t('footer.links.3.label'), href: "mailto:hola@buskero.com" },
  ]

  return (
    <footer className="py-16 border-t border-[#27272a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Countdown + CTA */}
        <div className="text-center mb-12 flex flex-col items-center gap-5">
          <div className="flex flex-col items-center gap-2">
            <CountdownTimer />
            <p className="text-sm text-[#71717a]">
              {t('urgency_cta.title')}{" "}
              {t('urgency_cta.start_label')} <span className="text-white font-semibold">{t('urgency_cta.start_date')}</span>.{" "}
            </p>
          </div>
          <a href="#aplicar">
            <Button
              size="lg"
              className="bg-[#7c3aed] hover:bg-[#6d28d9] text-lg px-8 py-6 font-semibold shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] transition-all"
            >
              <span className="text-white">{t('urgency_cta.cta')}</span>
            </Button>
          </a>
        </div>

        <Separator className="bg-[#27272a] mb-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <p className="text-sm text-[#71717a] mt-1">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer navigation">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[#71717a] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="text-[#71717a] hover:text-white transition-colors p-2"
              aria-label="Twitter"
            >
              <Twitter className="size-4" />
            </a>
            <a
              href="#"
              className="text-[#71717a] hover:text-white transition-colors p-2"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href="#"
              className="text-[#71717a] hover:text-white transition-colors p-2"
              aria-label="Instagram"
            >
              <Instagram className="size-4" />
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-[#3f3f46] mt-10">
          {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}
