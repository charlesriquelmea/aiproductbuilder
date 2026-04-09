"use client"

import { motion } from "framer-motion"
import { Check, ArrowUpRight, DollarSign } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export default function ROISection() {
    const { t } = useLanguage()

    const marketValueItems = [0, 1, 2].map(i => ({
        title: t(`roi.items.${i}.title`),
        price: t(`roi.items.${i}.price`),
        desc: t(`roi.items.${i}.desc`),
    }))

    const checklist = [0, 1, 2].map(i => t(`roi.checklist.${i}`))

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-zinc-950" />
            <div className="absolute inset-0 bg-linear-to-b
             from-violet-500/5 via-transparent to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 
                        rounded-full bg-violet-500/10 border border-violet-500/20
                         text-violet-400 text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        <p className="" />
                        {t('roi.tag')}
                    </motion.div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-50 mb-6 tracking-tight">
                        {t('roi.title')}
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        {t('roi.description')}{" "}
                        <span className="text-violet-400 font-bold">$6,500 USD</span>.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Market Value Cards */}
                    <div className="lg:col-span-8 space-y-4">
                        <div className="flex items-center gap-3 mb-6">
                            <h3 className="text-xl font-bold text-zinc-50">{t('roi.market_value_title')}</h3>
                            <div className="h-px flex-1 bg-zinc-800" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                            {marketValueItems.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-violet-500/30 transition-all"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div className="space-y-1">
                                            <h4 className="text-lg font-bold text-zinc-50 group-hover:text-violet-400 transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
                                                {item.desc}
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-xl font-black text-zinc-50">{item.price}</span>
                                            <span className="text-[10px] text-zinc-500 uppercase tracking-widest">USD Est.</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-8 p-6 bg-violet-500/5 border border-violet-500/20 rounded-2xl flex items-center justify-between">
                            <span className="text-zinc-400 font-medium">{t('roi.total_value_label')}</span>
                            <span className="text-3xl font-black text-violet-400">$6,500+</span>
                        </div>
                    </div>

                    {/* Investment Card */}
                    <div className="lg:col-span-4 mt-8 lg:mt-0 lg:top-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 bg-zinc-900 border-2 border-violet-500 
                            rounded-3xl shadow-[0_0_50px_rgba(139,92,246,0.15)]"
                        >
                            <h3 className="text-xl font-bold text-zinc-50 mb-2">{t('roi.investment_title')}</h3>
                            <div className="flex items-baseline gap-2 mb-6">
                                <span className="text-4xl font-black text-zinc-50">$1,897</span>
                                <span className="text-zinc-500 font-medium">USD</span>
                            </div>

                            <div className="space-y-4 mb-8">
                                {checklist.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="mt-1 bg-violet-500/20 rounded-full p-1">
                                            <Check className="w-3 h-3 text-violet-400" />
                                        </div>
                                        <span className="text-sm text-zinc-300 leading-tight">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-4">
                                <a href="#aplicar" className="block">
                                    <button className="w-full py-4 bg-violet-500 hover:bg-violet-600 text-zinc-50 font-bold rounded-xl transition-all shadow-[0_10px_20px_rgba(139,92,246,0.3)] flex items-center justify-center gap-2 group">
                                        {t('hero.cta_primary')}
                                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </button>
                                </a>
                                <p className="text-[10px] text-center text-zinc-500 uppercase tracking-widest leading-relaxed">
                                    {t('roi.roi_guarantee')}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}