"use client"

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function InstructorsSection() {
    const { t } = useLanguage()

    const instructorsData = [
        {
            initials: "CR",
            name: "Carlos Riquelme",
            badge: "🌎 Founder & CEO",
            bio: t('instructors.bios.0'),
            stats: [
                { value: "10+", label: t('instructors.label_projects') },
                { value: "13+", label: t('instructors.label_exp') },
            ],
            gradient: "linear-gradient(135deg, #8B5CF6, #06B6D4)",
            delay: 0,
        },
        {
            initials: "DC",
            name: "Daniel Castiblanco",
            badge: "🚀 Full-stack & IA · DevOps",
            bio: t('instructors.bios.1'),
            stats: [
                { value: "30+", label: t('instructors.label_deployed') },
                { value: "7+", label: t('instructors.label_exp') },
            ],
            gradient: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
            delay: 0.15,
        },
    ];

    return (
        <section className="py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="text-center mb-12"
                >
                    <p className="text-xs text-zinc-400 mb-2 font-semibold uppercase tracking-widest">
                        {t('instructors.tag')}
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-zinc-50">{t('instructors.title')}</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {instructorsData.map((person, i) => (
                        <InstructorCard key={i} person={person} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function InstructorCard({ person }: { person: any }) {
    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: person.delay }}
            className="flex flex-col items-center gap-6 bg-zinc-800 border border-zinc-700 rounded-2xl p-8"
        >
            <div className="flex flex-col items-center gap-3">
                <div
                    className="w-24 h-24 rounded-full flex items-center justify-center text-2xl font-black text-white"
                    style={{ background: person.gradient }}
                >
                    {person.initials}
                </div>
                <span className="text-xs text-violet-300 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full text-center">
                    {person.badge}
                </span>
            </div>

            <div className="flex flex-col items-center text-center gap-3 w-full">
                <h3 className="text-xl font-bold text-zinc-50">{person.name}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">{person.bio}</p>
                <div className="grid grid-cols-2 gap-3 w-full mt-2">
                    {person.stats.map((stat: any, j: number) => (
                        <div key={j} className="flex flex-col items-center bg-zinc-900 border border-zinc-700 rounded-xl p-3">
                            <span className="text-xl font-black text-violet-400">{stat.value}</span>
                            <span className="text-xs text-zinc-500 mt-1 leading-tight text-center">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}