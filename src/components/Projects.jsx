import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
    {
        title: 'Food Delivery Web Application',
        date: 'Jan 2026',
        tech: ['React.js', 'Spring Boot', 'MySQL', 'REST APIs'],
        points: [
            'Full-stack platform with User & Admin panels using Controller-Service-Repository architecture',
            '20+ RESTful API endpoints with token-based authentication',
            'Dynamic cart system with live price recalculation',
            'Admin panel for menu & order management',
        ],
        live: '#',
        code: '#',
    },
    {
        title: 'Student Management System',
        date: 'Aug 2025',
        tech: ['Core Java', 'JDBC', 'MySQL', 'OOP'],
        points: [
            'Modular console-based system using OOP & Collections Framework',
            'Full CRUD via JDBC with parameterised queries (SQL injection prevention)',
            'Reusable DAO classes decoupling business logic from persistence',
            'Normalized relational tables with referential integrity',
        ],
        live: '#',
        code: '#',
    },
]

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6 bg-slate-50 dark:bg-slate-800/50">
            <div className="max-w-6xl mx-auto">
                <h2 className="section-title">My <span>Projects</span></h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition p-6 border border-slate-100 dark:border-slate-700 flex flex-col"
                        >
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-xl font-bold">{project.title}</h3>
                                <span className="text-xs text-slate-500">{project.date}</span>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="text-xs px-3 py-1 rounded-full bg-java/10 text-java font-medium"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 mb-6 flex-1">
                                {project.points.map((p, idx) => (
                                    <li key={idx} className="flex gap-2">
                                        <span className="text-java">▸</span> {p}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex gap-4">
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-sm font-semibold text-java hover:underline"
                                >
                                    <FaExternalLinkAlt /> Live
                                </a>
                                <a
                                    href={project.code}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-sm font-semibold text-java hover:underline"
                                >
                                    <FaGithub /> Code
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}