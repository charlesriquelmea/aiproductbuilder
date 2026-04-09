"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Check, Send } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function ApplicationForm() {
  const { t } = useLanguage()
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const questions = [
    {
      id: "name",
      question: t('application.questions.0.question'),
      placeholder: t('application.questions.0.placeholder'),
      type: "text" as const,
    },
    {
      id: "email",
      question: t('application.questions.1.question'),
      placeholder: t('application.questions.1.placeholder'),
      type: "email" as const,
    },
    {
      id: "experience",
      question: t('application.questions.2.question'),
      placeholder: "",
      type: "select" as const,
      options: [0, 1, 2, 3].map(i => t(`application.questions.2.options.${i}`)),
    },
    {
      id: "motivation",
      question: t('application.questions.3.question'),
      placeholder: "",
      type: "select" as const,
      options: [0, 1, 2, 3].map(i => t(`application.questions.3.options.${i}`)),
    },
    {
      id: "commitment",
      question: t('application.questions.4.question'),
      placeholder: "",
      type: "select" as const,
      options: [0, 1, 2].map(i => t(`application.questions.4.options.${i}`)),
    },
  ]

  const question = questions[currentStep]
  const isLast = currentStep === questions.length - 1
  const canProceed = answers[question?.id]?.trim()

  const handleNext = () => {
    if (isLast) {
      setSubmitted(true)
    } else {
      setCurrentStep((s) => s + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1)
  }

  if (submitted) {
    return (
      <section id="aplicar" className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f14] to-[#0a0a0a]" />
        <div className="relative mx-auto max-w-2xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-[#111111] border border-[#22c55e]/30 rounded-2xl p-10"
          >
            <div className="inline-flex items-center justify-center size-16 rounded-full bg-[#22c55e]/10 mb-6">
              <Check className="size-8 text-[#22c55e]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              {t('application.received_title')}
            </h3>
            <p className="text-[#a1a1aa] leading-relaxed">
              {t('application.received_desc', { name: answers.name, email: answers.email })}
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="aplicar" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f14] to-[#0a0a0a]" />

      <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-[#7c3aed] font-mono text-sm mb-3 uppercase tracking-wider">
            {t('application.tag')}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
            {t('application.title')}
          </h2>
        </motion.div>

        <div className="bg-[#111111] border border-[#27272a] rounded-2xl p-8 md:p-10">
          {/* Progress */}
          <div className="flex gap-1.5 mb-10">
            {questions.map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                  i <= currentStep ? "bg-[#7c3aed]" : "bg-[#27272a]"
                }`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-xs text-[#71717a] mb-2 font-mono">
                {currentStep + 1} / {questions.length}
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-8">
                {question.question}
              </h3>

              {question.type === "select" ? (
                <div className="space-y-3">
                  {question.options?.map((option) => (
                    <button
                      key={option}
                      onClick={() =>
                        setAnswers((prev) => ({ ...prev, [question.id]: option }))
                      }
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                        answers[question.id] === option
                          ? "border-[#7c3aed] bg-[#7c3aed]/10 text-white"
                          : "border-[#27272a] bg-[#0f0f0f] text-[#a1a1aa] hover:border-[#3f3f46]"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              ) : (
                <input
                  type={question.type}
                  placeholder={question.placeholder}
                  value={answers[question.id] || ""}
                  onChange={(e) =>
                    setAnswers((prev) => ({
                      ...prev,
                      [question.id]: e.target.value,
                    }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && canProceed) handleNext()
                  }}
                  className="w-full bg-[#0f0f0f] border border-[#27272a] rounded-xl px-5 py-4 text-white text-lg placeholder:text-[#3f3f46] focus:outline-none focus:border-[#7c3aed] transition-colors"
                  
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={currentStep === 0}
              className="text-[#71717a] hover:text-white disabled:opacity-30"
            >
              <ArrowLeft className="size-4 mr-2" />
              {t('application.back_btn')}
            </Button>

            <Button
              onClick={handleNext}
              disabled={!canProceed}
              className={`${
                isLast
                  ? "bg-[#22c55e] hover:bg-[#16a34a]"
                  : "bg-[#7c3aed] hover:bg-[#6d28d9]"
              } text-white font-semibold px-6 disabled:opacity-30`}
            >
              {isLast ? (
                <>
                  <span className="text-white">{t('application.send_btn')}</span>
                  <Send className="size-4 ml-2" />
                </>
              ) : (
                <>
                  <span className="text-white">{t('application.next_btn')}</span>
                  <ArrowRight className="size-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
