export type Language = 'es' | 'en';

export const language = {
  es: {
    from : "Desde",
    week: "sem",
    navbar: {
      timer_label: "Cierran inscripciones el 31 de Mayo",
      cta: "Quiero ser AI Product Builder",
      aria_open: "Abrir menu",
      aria_close: "Cerrar menu",
    },
    common: {
      days: "Dias",
      hours: "Hrs",
      minutes: "Min",
      seconds: "Seg",
      days_short: "D",
      hours_short: "H",
      minutes_short: "M",
      seconds_short: "S",
    },
    terminal: {
      line1: "$ init --stack vibe-coding",
      line2: "  Conectando a v0.app...",
      line3: "  UI generada en 4.2s",
      line4: "  Enviando a Claude Code...",
      line5: "  Lógica de negocio desplegada",
      line6: "  n8n workflow activado",
      line7: "  App publicada en app",
      line9: "  Listo para publicar.",
    },
    hero: {
      badge: "Solo 18 cupos restantes · Cohort #1 cierra 31 de Mayo",
      title_start: "Conviértete en un",
      title_end: "by Protolylat",
      description: "Un programa intensivo de 8 semanas para fusionar la visión estratégica de producto con la agilidad del Visual Coding. De no saber programar, a construir aplicaciones reales usando la IA como tu copiloto.",
      cta_primary: "Quiero ser AI Product Builder",
      cta_secondary: "Ver el programa completo ↓",
      stats: {
        spots: "20 cupos",
        deadline: "Cierra 31 de Mayo",
        start: "Start: 1 de Junio",
        guarantee: "Garantía incluida",
      }
    },
    pain_points: {
      tag: "¿Te suena familiar?",
      title: "Por qué sigues atascado",
      subtitle: "(y no es tu culpa)",
      footer: "Existe una forma diferente. Se llama",
      items: [
        { title: "Parálisis por sintaxis", desc: "Crees que necesitas años para entrar en tech" },
        { title: "Miedo al código", desc: "Lo asocias con matemáticas complejas y lenguajes crípticos" },
        { title: "Brecha de ingresos", desc: "Ganas más que el mínimo pero sin ruta de crecimiento" },
        { title: "Cursos sin estructura", desc: "Empiezas y abandonas por falta de comunidad" }
      ]
    },
    transformation: {
      tag: "La diferencia",
      title: "La IA no te reemplaza, te potencia como arquitecto.",
      bad_col: "Usuario de ChatGPT",
      good_col: "Vibe Coder (AI Product Builder)",
      labels: ["El Humano", "La IA", "El Resultado"],
      bad_rows: [
        "Pide que le hagan el trabajo.",
        "Ejecuta a ciegas (y a menudo falla).",
        "Un fragmento de código aislado o un texto genérico. Dependencia total."
      ],
      good_rows: [
        "Define el problema, toma decisiones de negocio y dirige la visión creativa.",
        "Sugiere soluciones, explica conceptos y escribe el código táctico.",
        "Un sistema completo, integrado y desplegado en producción. El humano domina la arquitectura."
      ],
      promise: "En 8 semanas, pasarás de no saber programar a construir aplicaciones reales usando IA como tu copiloto"
    },
    portfolio: {
      tag: "Portafolio",
      title: "Tu portafolio en producción al finalizar la cohorte.",
      subtitle: "3 entregables reales, desplegados y funcionando. No proyectos académicos.",
      items: [
        { title: "Landing Page Funcional", desc: "Un sitio web profesional optimizado para la captura de leads, con arquitectura de información efectiva e interfaces creadas rápidamente mediante constructores visuales.", badge: "Semana 2" },
        { title: "Sistema de Automatización", desc: "Un motor impulsado por IA, construido en n8n, capaz de extraer, transformar y enviar datos entre plataformas usando Webhooks y APIs sin intervención manual.", badge: "Sprint 2" },
        { title: "Single-Function App", desc: "Tu propio Producto Mínimo Viable (MVP) resolviendo un problema real, conectado a bases de datos, lógica de negocio y completamente desplegado en la nube.", badge: "Sprint 3" }
      ]
    },
    curriculum: {
      tag: "Currículo de Sprints",
      title: "8 semanas para dominar el stack completo",
      subtitle: "4 sprints intensivos con entregables reales en cada fase",
      sprint_label: "Sprint",
      outcome_label: "Outcome",
      tools_label: "Herramientas:",
      sprints: [
        {
          title: "Fundamentos y Captura",
          weeks: "Semanas 1-2",
          description: "Pensamiento en sistemas, lógica computacional, diseño de interfaces y el ecosistema Low-Code.",
          topics: ["Interacción Cliente/Servidor", "Inputs/Outputs", "Diseño Responsivo", "HTML/CSS básico"],
          outcome: "Landing Page profesional conectada a automatización de leads."
        },
        {
          title: "Backend & Data Logic",
          weeks: "Semanas 3-4",
          description: "APIs, webhooks, JSON, operaciones CRUD y arquitectura de agentes con datos persistentes.",
          topics: ["Webhooks & JSON", "Métodos HTTP", "Operaciones CRUD", "Integración de LLMs"],
          outcome: "Sistema de notificaciones y apps con datos dinámicos."
        },
        {
          title: "Auth & Monetización",
          weeks: "Semanas 5-6",
          description: "Autenticación, gestión de sesiones, seguridad RLS e integraciones de pago.",
          topics: ["Login/Registro", "Row Level Security", "APIs REST", "Flujos de pago"],
          outcome: "MVP con usuarios autenticados y monetización real."
        },
        {
          title: "Deployment & Scale",
          weeks: "Semanas 7-8",
          description: "Ambientes Dev/Prod, Cloud/Hosting, logs, testing y documentación técnica.",
          topics: ["Dev vs Production", "Lectura de logs", "Testing básico", "Documentación"],
          outcome: "Portfolio Final en producción con dominio propio."
        }
      ],
      mockups: {
        send: "Enviar",
        login_title: "Iniciar Sesión",
        access: "Acceder",
        payment_success: "Pago Exitoso",
        transaction_completed: "Transacción completada",
        building: "Construyendo...",
        done: "Listo en 1.2s",
        deployed: "Desplegado en Producción"
      }
    },
    tools: {
      tag: "Stack Tecnológico",
      title: "El stack tecnológico del Product Builder.",
      main: [
        { label: "Interfaces (Frontend)", desc: "Generación de UI responsiva mediante prompts directos." },
        { label: "Lógica (El Cerebro)", desc: "Manipulación de datos, reglas de negocio y Vibe Coding real." },
        { label: "Orquestación", desc: "Workflows visuales y conexión de APIs." }
      ],
      support: [
        { label: "Datos (Backend)", name: "Supabase" },
        { label: "Despliegue (Cloud)", name: "Vercel / Netlify" },
        { label: "Seguridad", name: "Supabase Auth (RLS)" },
        { label: "Pagos", name: "Stripe / MercadoPago" },
        { label: "Control de versiones", name: "GitHub" }
      ]
    },
    roi: {
      tag: "RETORNO DE TU INVERSIÓN (ROI)",
      title: "No compras un curso. Construyes un portafolio rentable desde el Día 1.",
      description: "La educación tradicional te da un diploma. El AI Engineer Builder te entrega proyectos reales con demanda inmediata. En 8 semanas, tendrás un portafolio valorizado en más de",
      market_value_title: "Valor de Mercado",
      total_value_label: "Valor Total del Portafolio:",
      investment_title: "Tu Inversión",
      investment_label: "Inversión:",
      investment_price: "$1497 USD (Solo por referido: Si traes un amigo, familiar y juntos c/u paga) Hasta 3 pagos de $499 USD a 0, 30 y 60 días (Tarjeta de Crédito)",
      roi_guarantee: "ROI de 3x a 4x garantizado en habilidades",
      checklist: [
        "8 semanas de dedicación",
        "Hasta 3 cuotas sin interés",
        "Capacidad de facturar desde el Día 1"
      ],
      items: [
        { title: "Landing Pages en Next.js", price: "Desde $1500", desc: "Sitios web profesionales y de alta conversión, optimizados para producción y analítica. Representan tu primera entrega profesional y validan tu capacidad de generar ingresos inmediatos en el mercado freelance." },
        { title: "Workflows Automatizados (n8n)", price: "Desde $2000", desc: "Diseñarás flujos que conectan aplicaciones, reducen tareas repetitivas y aumentan la eficiencia operativa. Cada implementación se traduce en un ahorro tangible para el cliente, justificando el valor de mercado y tu facturación inmediata." },
        { title: "Web Apps con IA", price: "Desde $3000", desc: "Construirás aplicaciones web modernas integradas con modelos de IA para resolver problemas reales: cotizadores inteligentes, formularios dinámicos y directorios con búsqueda avanzada. Estas soluciones premium posicionan tu portafolio en el rango más alto del mercado." }
      ]
    },
    instructors: {
      tag: "Tu instructor",
      title: "Los fundadores",
      label_exp: "Años de experiencia",
      label_projects: "Proyectos tech",
      label_deployed: "Proyectos deployados",
      bios: [
        "Arquitecto de ecosistemas con 12 años innovando en tech. 10 productos construidos. 9 incubaciones impulsadas en Latam. Especializado en el mercado latino: emprendedores, equipos y builders que quieren construir negocios reales con herramientas de frontera.",
        "Ingeniero de software con 7+ años construyendo productos full-stack a escala. Especialista en arquitectura TypeScript/Angular, DevOps con Docker y productos basados en IA. Creador de Sendell, plataforma de agentes IA en producción con clientes activos."
      ]
    },
    offer: {
      tag: "Oferta Exclusiva Cohort #1",
      title: "Lo que obtienes como Founding Member",
      original_price: "$2,497 USD",
      current_price: "$1,897",
      payment_plan: "o 3 pagos de $632 a 0, 30 y 60 días",
      total_value_label: "Valor total: $2,497+",
      investment_cta: "Tu inversión hoy:",
      cta: "Quiero ser AI Product Builder",
      urgency: "Solo quedan 18 de 20 cupos disponibles",
      stack: [
        { item: "Programa completo 8 semanas", value: "$997" },
        { item: "Acceso vitalicio a actualizaciones del curriculum", value: "$500" },
        { item: "Sesión 1-on-1 de 20 min con el fundador para revisar portafolio", value: "$200" },
        { item: 'Badge digital "Founding Member"', value: "Exclusivo" },
        { item: "Comunidad post-bootcamp", value: "Priceless" }
      ]
    },
    urgency: {
      badge: "Solo 18 cupos restantes · Cohort #1 cierra 31 de Mayo",
      headline: [
        "¿Cuántos proyectos llevas en el backlog",
        "que nunca pasaron de una",
        "porque no tenías quién los construyera?"
      ],
      notion_idea: "idea en Notion",
      subheadline: "Esa lista es tu costo de oportunidad real. Alguien en tu industria ya tomó la decisión que tú estás postergando.",
      now_tag: "Mayo 2026 — Actúas ahora",
      later_tag: "Octubre 2026 — Si esperas",
      now_items: [
        "Founding Member: acceso 1-on-1 con los fundadores",
        "Curriculum vivo que moldeas tú",
        "MVP en semanas, no en 18 meses",
        "Stack correcto desde el día 1 — cero deuda técnica",
        "Precio Cohort #1:"
      ],
      later_items: [
        "Cohort genérico, sin acceso a fundadores",
        "Curriculum rígido, diseñado para la masa",
        "Pagarás para migrar lo que mal-construiste",
        "Sigues dependiendo de developers externos",
        "El precio de mercado habrá subido un 40%"
      ],
      metrics: [
        "por landing subcontratada",
        "por cada automatización en n8n subcontratada",
        "por cada Web App Básica subcontratada",
        "de latencia por cada proyecto dependiente de un dev",
        "de aprendizaje acelerado (vs 18 meses)"
      ],
      marquee: "En 8 semanas dominarás el stack que usan las startups que importan:",
      final_title: "El mercado no espera a que estés listo.",
      final_desc: "Protolylat no vende cursos. Vende el tiempo de mercado que no puedes recuperar si esperas.",
      cta: "Asegurar mi cupo en el Cohort #1 — $1,897",
      guarantee: "Garantía total si no construyes 3 portafolios funcionales",
      payments: "3 pagos de $632 (a 0, 30 y 60 días)",
      timer_label: "Inscripciones cierran en:"
    },
    coaching: {
      tag: "Soporte",
      title: "Un ecosistema de soporte infalible: Nunca te quedas atascado.",
      subtitle: "Metodología 'Build Together': El ritmo que asegura la finalización.",
      items: [
        { title: "Instructores Expertos", desc: "Office Hours diarias de 1h para debugging en vivo y mentoría estratégica durante las sesiones sincrónicas." },
        { title: "Peers (Comunidad)", desc: "Buddy Coding (parejas semanales) para pair programming virtual y resolución colaborativa en canales activos." },
        { title: "Agente IA (24/7)", desc: 'Un "colega" entrenado específicamente con nuestro currículum. Resuelve dudas técnicas inmediatas a cualquier hora.' }
      ],
      secondary: [
        "Build Together (instructor codea en vivo)",
        "Q&A Estructurado por votación",
        "Show & Tell semanal",
        "Daily Wins antes de las 10 PM",
        "Peer Code Review cruzado",
        "Friday Ship Party"
      ]
    },
    guarantee: {
      title: "Garantía de Inversión Segura",
      description: "Si no completas 2 de los 3 de los proyectos funcionales al final del programa, te incluimos en el",
      free_next: "próximo cohort completamente gratis",
      footer: "Queremos que ganes. Punto."
    },
    social_proof: {
      tag: "Credibilidad",
      title: "Respaldado por experiencia",
      items: [
        { title: "Metodología probada", desc: "Buskero es un spin-off de Protoly, una software factory con experiencia real construyendo productos digitales para clientes reales." },
        { title: "Fundadores en las trincheras", desc: "No somos teóricos. Construimos, desplegamos y monetizamos productos todos los días. Enseñamos lo que practicamos." },
        { title: "Primera edición exclusiva", desc: "El Cohort #1 es una oportunidad única: acceso directo a los fundadores, precio de founding member, y la oportunidad de dar forma al programa." }
      ],
      blueprint_title: "El código ya no es una barrera.",
      blueprint_subtitle: "Es tu material de construcción.",
      blueprint_desc: "Tienes el blueprint, las herramientas y la comunidad. En 8 semanas, pasarás de la idea a la ejecución arquitectónica. Tu portafolio te está esperando."
    },
    urgency_cta: {
      title: "Cierran inscripciones el 31 de Mayo.",
      start_label: "Start:",
      start_date: "1 de Junio de 2026",
      spots_label: "Solo 20 cupos",
      spots_taken: "ya tomados",
      cta: "Quiero ser AI Product Builder",
      price_footer: "$1,897 USD o 3x $632 (a 0, 30 y 60 días)"
    },
    faq: {
      tag: "FAQ",
      title: "Preguntas frecuentes",
      items: [
        { q: "¿Necesito saber programar?", a: "No. Aprendes arquitectura y vibe coding con IA. El programa está diseñado para personas sin experiencia técnica previa." },
        { q: "¿Cuánto tiempo debo dedicar?", a: "8-10 horas semanales recomendadas. Incluye sesiones en vivo (3 horas) y trabajo en proyectos (5-7 horas)." },
        { q: "¿El precio sube después?", a: "Sí. $2,497 después del Cohort #1. El precio de founding member es exclusivo para los primeros 20." },
        { q: "¿Qué pasa si no puedo en alguna sesión en vivo?", a: "Quedan grabadas y disponibles en la plataforma. Además tienes acceso al AI Teaching Assistant 24/7 para resolver dudas." },
        { q: "¿La garantía tiene letra pequeña?", a: "Solo completar los proyectos semanales. Si haces el trabajo y no obtienes resultados, entras gratis al siguiente cohort." },
        { q: "¿En qué idioma es el bootcamp?", a: "Español, diseñado para Latinos. Las herramientas son en inglés pero el soporte, sesiones y comunidad son 100% en español." }
      ]
    },
    application: {
      tag: "Aplicación",
      title: "Aplica al Cohort #1",
      received_title: "Aplicación recibida",
      received_desc: "Gracias, {{name}}. Te contactaremos a {{email}} con los próximos pasos.",
      back_btn: "Atrás",
      next_btn: "Siguiente",
      send_btn: "Enviar",
      questions: [
        { question: "¿Cómo te llamas?", placeholder: "Tu nombre completo" },
        { question: "¿Cuál es tu email?", placeholder: "tu@email.com" },
        {
          question: "¿Tienes experiencia programando?",
          options: [
            "Cero experiencia",
            "He hecho tutoriales básicos",
            "Entiendo conceptos pero no puedo construir",
            "Tengo algo de experiencia (no-code o similares)"
          ]
        },
        {
          question: "¿Qué te motiva a aprender Vibe Coding?",
          options: [
            "Quiero cambiar de carrera a tech",
            "Quiero construir mi propio producto",
            "Quiero ganar más como freelancer",
            "Quiero agregar tech a mi trabajo actual"
          ]
        },
        {
          question: "¿Puedes dedicar 8-10 horas por semana?",
          options: [
            "Sí, totalmente",
            "Creo que sí, con algo de esfuerzo",
            "No estoy seguro/a"
          ]
        }
      ]
    },
    footer: {
      tagline: "Build with AI. Ship fast. Get paid.",
      rights: "© 2026 Protolytal. Todos los derechos reservados.",
      links: [
        { label: "Programa" },
        { label: "Garantía" },
        { label: "FAQ" },
        { label: "Contacto" }
      ]
    }
  },

  en: {
    from : "From",
    week: "week",
    navbar: {
      timer_label: "Enrollment closes May 31st",
      cta: "I want to be an AI Product Builder",
      aria_open: "Open menu",
      aria_close: "Close menu",
    },
    common: {
      days: "Days",
      hours: "Hrs",
      minutes: "Min",
      seconds: "Sec",
      days_short: "D",
      hours_short: "H",
      minutes_short: "M",
      seconds_short: "S",
    },
    terminal: {
      line1: "$ init --stack vibe-coding",
      line2: "  Connecting to v0.app...",
      line3: "  UI generated in 4.2s",
      line4: "  Sending to Claude Code...",
      line5: "  Business logic deployed",
      line6: "  n8n workflow activated",
      line7: "  App live at app",
      line9: "  Ready to ship.",
    },
    hero: {
      badge: "Only 18 spots remaining · Cohort #1 closes May 31st",
      title_start: "Become an",
      title_end: "by Protolylat",
      description: "An intensive 8-week program to merge strategic product vision with the agility of Visual Coding. From not knowing how to code to building real applications using AI as your co-pilot.",
      cta_primary: "I want to be an AI Product Builder",
      cta_secondary: "See the full program ↓",
      stats: {
        spots: "20 spots",
        deadline: "Closes May 31st",
        start: "Start: June 1st",
        guarantee: "Guarantee included",
      }
    },
    pain_points: {
      tag: "Sound familiar?",
      title: "Why you're still stuck",
      subtitle: "(and it's not your fault)",
      footer: "There is a different way. It's called",
      items: [
        { title: "Syntax paralysis", desc: "You think you need years to enter tech" },
        { title: "Fear of code", desc: "You associate it with complex math and cryptic languages" },
        { title: "Income gap", desc: "You earn more than the minimum but with no growth path" },
        { title: "Unstructured courses", desc: "You start and quit due to lack of community" }
      ]
    },
    transformation: {
      tag: "The difference",
      title: "AI doesn't replace you, it empowers you as an architect.",
      bad_col: "ChatGPT User",
      good_col: "Vibe Coder (AI Product Builder)",
      labels: ["The Human", "The AI", "The Result"],
      bad_rows: [
        "Asks common tasks to be done.",
        "Executes blindly (and often fails).",
        "An isolated snippet of code or generic text. Total dependency."
      ],
      good_rows: [
        "Defines the problem, makes business decisions, and directs creative vision.",
        "Suggests solutions, explains concepts, and writes tactical code.",
        "A full system, integrated and deployed in production. The human masters the architecture."
      ],
      promise: "In 8 weeks, you'll go from not knowing how to code to building real applications using AI as your co-pilot"
    },
    portfolio: {
      tag: "Portfolio",
      title: "Your portfolio in production by the end of the cohort.",
      subtitle: "3 real deliverables, deployed and working. No academic projects.",
      items: [
        { title: "Functional Landing Page", desc: "A professional website optimized for lead capture, with effective information architecture and interfaces quickly created through visual builders.", badge: "Week 2" },
        { title: "Automation System", desc: "An AI-driven engine, built in n8n, capable of extracting, transforming, and sending data across platforms using Webhooks and APIs without manual intervention.", badge: "Sprint 2" },
        { title: "Single-Function App", desc: "Your own Minimum Viable Product (MVP) solving a real problem, connected to databases, business logic, and fully deployed in the cloud.", badge: "Sprint 3" }
      ]
    },
    curriculum: {
      tag: "Sprint Curriculum",
      title: "8 weeks to master the full stack",
      subtitle: "4 intensive sprints with real deliverables in each phase",
      sprint_label: "Sprint",
      outcome_label: "Outcome",
      tools_label: "Tools:",
      sprints: [
        {
          title: "Foundations & Capture",
          weeks: "Weeks 1-2",
          description: "Systems thinking, computational logic, interface design, and the Low-Code ecosystem.",
          topics: ["Client/Server Interaction", "Inputs/Outputs", "Responsive Design", "Basic HTML/CSS"],
          outcome: "Professional Landing Page connected to lead automation."
        },
        {
          title: "Backend & Data Logic",
          weeks: "Weeks 3-4",
          description: "APIs, webhooks, JSON, CRUD operations, and agent architecture with persistent data.",
          topics: ["Webhooks & JSON", "HTTP Methods", "CRUD Operations", "LLM Integration"],
          outcome: "Notification system and apps with dynamic data."
        },
        {
          title: "Auth & Monetization",
          weeks: "Weeks 5-6",
          description: "Authentication, session management, RLS security, and payment integrations.",
          topics: ["Login/Register", "Row Level Security", "REST APIs", "Payment flows"],
          outcome: "MVP with authenticated users and real monetization."
        },
        {
          title: "Deployment & Scale",
          weeks: "Weeks 7-8",
          description: "Dev/Prod environments, Cloud/Hosting, logs, testing, and technical documentation.",
          topics: ["Dev vs Production", "Log reading", "Basic testing", "Documentation"],
          outcome: "Final Portfolio in production with own domain."
        }
      ],
      mockups: {
        send: "Send",
        login_title: "Login",
        access: "Access",
        payment_success: "Payment Successful",
        transaction_completed: "Transaction completed",
        building: "Building...",
        done: "Done in 1.2s",
        deployed: "Deployed to Production"
      }
    },
    tools: {
      tag: "Tech Stack",
      title: "The Product Builder's tech stack.",
      main: [
        { label: "Interfaces (Frontend)", desc: "Generation of responsive UI through direct prompts." },
        { label: "Logic (The Brain)", desc: "Data manipulation, business rules, and real Vibe Coding." },
        { label: "Orchestration", desc: "Visual workflows and API connection." }
      ],
      support: [
        { label: "Data (Backend)", name: "Supabase" },
        { label: "Deployment (Cloud)", name: "Vercel / Netlify" },
        { label: "Security", name: "Supabase Auth (RLS)" },
        { label: "Payments", name: "Stripe / MercadoPago" },
        { label: "Version Control", name: "GitHub" }
      ]
    },
    roi: {
      tag: "RETURN ON INVESTMENT (ROI)",
      title: "Don't buy a course. Build a profitable portfolio from Day 1.",
      description: "Traditional education gives you a diploma. AI Engineer Builder gives you real projects with immediate demand. In 8 weeks, you'll have a portfolio valued at more than",
      market_value_title: "Market Value",
      total_value_label: "Total Portfolio Value:",
      investment_title: "Your Investment",
      investment_label: "Investment:",
      investment_price: "$1497 USD (Referral only: If you bring a friend or relative and you both pay) Up to 3 payments of $499 USD at 0, 30, and 60 days (Credit Card)",
      roi_guarantee: "3x to 4x ROI guaranteed in skills",
      checklist: [
        "8 weeks of dedication",
        "Up to 3 interest-free installments",
        "Ability to invoice from Day 1"
      ],
      items: [
        { title: "Landing Pages in Next.js", price: "From $1500", desc: "Professional, high-conversion websites optimized for production and analytics. This represents your first professional delivery and validates your ability to generate immediate income in the freelance market." },
        { title: "Automated Workflows (n8n)", price: "From $2000", desc: "You will design flows that connect applications, reduce repetitive tasks, and increase operational efficiency. Each implementation translates into tangible savings for the client, justifying market value and immediate billing." },
        { title: "Web Apps with IA", price: "From $3000", desc: "You will build modern web applications integrated with AI models to solve real problems: smart quotation tools, dynamic forms, and directories with advanced search. These premium solutions position your portfolio at the top of the market." }
      ]
    },
    instructors: {
      tag: "Your instructor",
      title: "The founders",
      label_exp: "Years of experience",
      label_projects: "Tech projects",
      label_deployed: "Deployed projects",
      bios: [
        "Ecosystem architect with 12 years of tech innovation. 10 products built. 9 incubations driven in Latam. Specialized in the Latino market: entrepreneurs, teams, and builders who want to build real businesses with frontier tools.",
        "Software engineer with 7+ years building full-stack products at scale. Specialist in TypeScript/Angular architecture, DevOps with Docker, and AI-based products. Creator of Sendell, an AI agent platform in production with active clients."
      ]
    },
    offer: {
      tag: "Founding Member Exclusive Offer",
      title: "What you get as a Founding Member",
      original_price: "$2,497 USD",
      current_price: "$1,897",
      payment_plan: "or 3 payments of $632 at 0, 30, and 60 days",
      total_value_label: "Total value: $2,497+",
      investment_cta: "Your investment today:",
      cta: "I want to be an AI Product Builder",
      urgency: "Only 18 of 20 spots remaining",
      stack: [
        { item: "Full 8-week program", value: "$997" },
        { item: "Lifetime access to curriculum updates", value: "$500" },
        { item: "1-on-1 20-min session with founder to review portfolio", value: "$200" },
        { item: 'Founding Member "digital badge"', value: "Exclusive" },
        { item: "Post-bootcamp community", value: "Priceless" }
      ]
    },
    urgency: {
      badge: "Only 18 spots remaining · Cohort #1 closes May 31st",
      headline: [
        "How many projects in your backlog",
        "never got past a",
        "because you had no one to build them?"
      ],
      notion_idea: "Notion idea",
      subheadline: "That list is your real opportunity cost. Someone in your industry already made the decision you're postponing.",
      now_tag: "May 2026 — Act now",
      later_tag: "October 2026 — If you wait",
      now_items: [
        "Founding Member: 1-on-1 access to founders",
        "Living curriculum molded by you",
        "MVP in weeks, not 18 months",
        "Correct stack from Day 1 — zero technical debt",
        "Cohort #1 Price:"
      ],
      later_items: [
        "Generic cohort, no access to founders",
        "Rigid curriculum, designed for the masses",
        "You'll pay to migrate what was poorly built",
        "Still dependent on external developers",
        "The market price will have risen by 40%"
      ],
      metrics: [
        "per outsourced landing page",
        "per outsourced n8n automation",
        "per basic outsourced Web App",
        "of latency per developer-dependent project",
        "of accelerated learning (vs 18 months)"
      ],
      marquee: "In 8 weeks you will master the stack used by startups that matter:",
      final_title: "The market doesn't wait for you to be ready.",
      final_desc: "Protolylat doesn't sell courses. It sells market time you can't get back if you wait.",
      cta: "Secure my spot in Cohort #1 — $1,897",
      guarantee: "Full guarantee if you don't build 3 functional portfolios",
      payments: "3 payments of $632 (at 0, 30, and 60 days)",
      timer_label: "Enrollment closes in:"
    },
    coaching: {
      tag: "Support",
      title: "An infallible support ecosystem: You never get stuck.",
      subtitle: "'Build Together' methodology: The rhythm that ensures completion.",
      items: [
        { title: "Expert Instructors", desc: "Daily 1h Office Hours for live debugging and strategic mentoring during synchronous sessions." },
        { title: "Peers (Community)", desc: "Buddy Coding (weekly pairs) for virtual pair programming and collaborative resolution in active channels." },
        { title: "AI Agent (24/7)", desc: 'A "colleague" specifically trained with our curriculum. Resolves technical doubts immediately at any time.' }
      ],
      secondary: [
        "Build Together (instructor codes live)",
        "Structured Q&A by voting",
        "Weekly Show & Tell",
        "Daily Wins before 10 PM",
        "Cross Peer Code Review",
        "Friday Ship Party"
      ]
    },
    guarantee: {
      title: "Secure Investment Guarantee",
      description: "If you do not complete 2 of the 3 functional projects by the end of the program, we will include you in the",
      free_next: "next cohort completely free",
      footer: "We want you to win. Period."
    },
    social_proof: {
      tag: "Credibility",
      title: "Backed by experience",
      items: [
        { title: "Proven Methodology", desc: "Buskero is a spin-off of Protoly, a software factory with real experience building digital products for real clients." },
        { title: "Founders in the trenches", desc: "We are not theorists. We build, deploy, and monetize products every day. We teach what we practice." },
        { title: "Exclusive first edition", desc: "Cohort #1 is a unique opportunity: direct access to the founders, founding member pricing, and the chance to shape the program." }
      ],
      blueprint_title: "Code is no longer a barrier.",
      blueprint_subtitle: "It's your building material.",
      blueprint_desc: "You have the blueprint, the tools, and the community. In 8 weeks, you'll go from idea to architectural execution. Your portfolio is waiting."
    },
    urgency_cta: {
      title: "Enrollment closes May 31st.",
      start_label: "Start:",
      start_date: "June 1st, 2026",
      spots_label: "Only 20 spots",
      spots_taken: "already taken",
      cta: "I want to be an AI Product Builder",
      price_footer: "$1,897 USD or 3x $632 (at 0, 30, and 60 days)"
    },
    faq: {
      tag: "FAQ",
      title: "Frequently Asked Questions",
      items: [
        { q: "Do I need to know how to code?", a: "No. You learn architecture and vibe coding with AI. The program is designed for people with no previous technical experience." },
        { q: "How much time should I dedicate?", a: "8-10 hours per week recommended. Includes live sessions (3 hours) and project work (5-7 hours)." },
        { q: "Does the price go up later?", a: "Yes. $2,497 after Cohort #1. The founding member price is exclusive to the first 20." },
        { q: "What if I can't attend a live session?", a: "They are recorded and available on the platform. You also have access to the AI Teaching Assistant 24/7 to solve doubts." },
        { q: "Does the guarantee have fine print?", a: "Just complete the weekly projects. If you do the work and don't get results, you enter the next cohort for free." },
        { q: "What language is the bootcamp in?", a: "Spanish, designed for Latinos. The tools are in English, but the support, sessions, and community are 100% in Spanish." }
      ]
    },
    application: {
      tag: "Application",
      title: "Apply to Cohort #1",
      received_title: "Application received",
      received_desc: "Thank you, {{name}}. We will contact you at {{email}} with the next steps.",
      back_btn: "Back",
      next_btn: "Next",
      send_btn: "Send",
      questions: [
        { question: "What is your name?", placeholder: "Your full name" },
        { question: "What is your email?", placeholder: "you@email.com" },
        {
          question: "Do you have programming experience?",
          options: [
            "Zero experience",
            "I've done basic tutorials",
            "I understand concepts but cannot build",
            "I have some experience (no-code or similar)"
          ]
        },
        {
          question: "What motivates you to learn Vibe Coding?",
          options: [
            "I want to change careers to tech",
            "I want to build my own product",
            "I want to earn more as a freelancer",
            "I want to add tech to my current job"
          ]
        },
        {
          question: "Can you dedicate 8-10 hours per week?",
          options: [
            "Yes, definitely",
            "I think so, with some effort",
            "I'm not sure"
          ]
        }
      ]
    },
    footer: {
      tagline: "Build with AI. Ship fast. Get paid.",
      rights: "© 2026 Protolytal. All rights reserved.",
      links: [
        { label: "Program" },
        { label: "Guarantee" },
        { label: "FAQ" },
        { label: "Contact" }
      ]
    }
  }
};
