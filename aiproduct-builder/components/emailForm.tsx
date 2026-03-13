'use client'

import { useState } from 'react'

export default function EmailForm() {
    const [to, setTo] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        await fetch('/api/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ to, subject, message }),
        })
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 max-w-md mx-auto p-6 bg-black text-white font-mono rounded-lg"
        >
            <h2 className="text-2xl font-bold text-green-400">Enviar correo</h2>

            <input
                type="email"
                placeholder="Ingrese su mail"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="p-2 bg-[#0a0a0a] border border-violet-500 text-white focus:outline-none focus:border-green-400 rounded-md"
            />

            <input
                type="text"
                placeholder="Asunto"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="p-2 bg-[#0a0a0a] border border-violet-500 text-white focus:outline-none focus:border-green-400 rounded-md"
            />

            <textarea
                placeholder="Ingrese su consulta"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="p-2 bg-[#0a0a0a] border border-violet-500 text-white focus:outline-none focus:border-green-400 h-32 rounded-md"
            />

            <button
                type="submit"
                className="p-2 bg-violet-600 text-white font-bold hover:bg-green-400 hover:text-black transition-colors rounded-md cursor-pointer"
            >
                Enviar
            </button>
        </form>
    )
}
