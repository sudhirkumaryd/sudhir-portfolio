import { motion } from 'framer-motion'
import { FaCertificate, FaTrophy } from 'react-icons/fa'

const certifications = [
    {
        title: "Solving LeetCode's Top Interview Questions in Java",
        issuer: 'Udemy',
        year: '2024',
        icon: <FaCertificate />,
    },
    {
        title: 'Data Analytics Job Simulation',
        issuer: 'Forage',
        year: '2025',
        icon: <FaCertificate />,
    },
    {
        title: 'Solved 350+ problems on LeetCode',
        issuer: 'DSA, Algorithms & Java Concurrency',
        year: 'Ongoing',
        icon: <FaTrophy />,
    },
]

export default function Certifications() {
    return (
        <section id="certifications" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="section-title">Certifications & <span>Achievements</span></h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md text-center border border-slate-100 dark:border-slate-700 hover:shadow-xl transition"
                        >
                            <div className="text-4xl text-java mb-3 flex justify-center">
                                {cert.icon}
                            </div>
                            <h3 className="font-semibold mb-2">{cert.title}</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">{cert.issuer}</p>
                            <p className="text-xs text-java mt-2 font-medium">{cert.year}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}