import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'

export default function Experience() {
    return (
        <section id="experience" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="section-title">My <span>Experience</span></h2>

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border-l-4 border-java"
                >
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-java/10 rounded-lg text-java text-xl">
                            <FaBriefcase />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Teammate – Uber Eats Process</h3>
                            <p className="text-java font-semibold mb-3">TaskUs India</p>
                            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                <li className="flex gap-2">
                                    <span className="text-java">▸</span>
                                    Processed customer data by identifying and removing duplicate entries and null values during full data-cleaning cycles.
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-java">▸</span>
                                    Reviewed data segments assigned by manager and routed specific rows to specialist support agents.
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-java">▸</span>
                                    Coordinated with managers and cross-functional teams to maintain data quality and process standards.
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}