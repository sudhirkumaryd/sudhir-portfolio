import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'

export default function Education() {
    return (
        <section id="education" className="py-20 px-6 bg-slate-50 dark:bg-slate-800/50">
            <div className="max-w-4xl mx-auto">
                <h2 className="section-title">My <span>Education</span></h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border-l-4 border-spring flex items-start gap-4"
                >
                    <div className="p-3 bg-spring/10 rounded-lg text-spring text-xl">
                        <FaGraduationCap />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">B.Tech – Computer Science & Engineering</h3>
                        <p className="text-spring font-semibold">Techno Main Salt Lake, Kolkata</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                            CGPA: <strong>7.3 / 10</strong>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}