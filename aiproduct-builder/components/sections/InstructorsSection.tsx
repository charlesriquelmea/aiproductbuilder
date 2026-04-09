import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const instructors = [
    {
        initials: "CR",
        name: "Carlos Riquelme",
        badge: "🌎 Founder & CEO",
        bio: "Arquitecto de ecosistemas con 12 años innovando en tech. 10 productos construidos. 9 incubaciones impulsadas en Latam. Especializado en el mercado latino: emprendedores, equipos y builders que quieren construir negocios reales con herramientas de frontera.",
        stats: [
            { value: "10+", label: "Proyectos en tech e innovación" },
            { value: "13+", label: "Años de experiencia" },
        ],
        gradient: "linear-gradient(135deg, #8B5CF6, #06B6D4)",
        delay: 0,
    },
    {
        initials: "DC",
        name: "Daniel Castiblanco",
        badge: "🚀 Full-stack & IA · DevOps",
        bio: "Ingeniero de software con 7+ años construyendo productos full-stack a escala. Especialista en arquitectura TypeScript/Angular, DevOps con Docker y productos basados en IA. Creador de Sendell, plataforma de agentes IA en producción con clientes activos.",
        stats: [
            { value: "30+", label: "Proyectos deployados" },
            { value: "7+", label: "Años de experiencia" },
        ],
        gradient: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
        delay: 0.15,
    },
];

export default function InstructorsSection() {
    return (
        <section className="py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="text-center mb-12"
                >
                    <p className="text-xs text-zinc-400 mb-2 font-semibold uppercase tracking-widest">
                        Tu instructor
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-zinc-50">Los fundadores</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {instructors.map((person, i) => (
                        <InstructorCard key={i} person={person} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function InstructorCard({ person }: { person: (typeof instructors)[0] }) {
    return (
        <div
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
                    {person.stats.map((stat, j) => (
                        <div key={j} className="flex flex-col items-center bg-zinc-900 border border-zinc-700 rounded-xl p-3">
                            <span className="text-xl font-black text-violet-400">{stat.value}</span>
                            <span className="text-xs text-zinc-500 mt-1 leading-tight text-center">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}