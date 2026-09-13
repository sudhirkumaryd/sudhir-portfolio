import { motion } from 'framer-motion'

export default function About() {
    return (
        <section id="about" className="py-20 px-6 bg-slate-50 dark:bg-slate-800/50">
            <div className="max-w-4xl mx-auto">
                <h2 className="section-title">About <span>Me</span></h2>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center leading-relaxed text-slate-600 dark:text-slate-300"
                >
                    <p className="mb-4">
                        I'm a <strong>B.Tech Computer Science</strong> graduate from{' '}
                        <strong>Techno Main Salt Lake, Kolkata</strong> with a strong foundation in
                        Java, Spring Boot, and React.js.
                    </p>
                    <p className="mb-4">
                        I have hands-on experience building <strong>production-grade full-stack applications</strong>{' '}
                        with RESTful APIs, token-based authentication, and normalized database schemas.
                    </p>
                    <p>
                        I've solved <strong className="text-java">350+ problems on LeetCode</strong> covering
                        Data Structures, Algorithms, and Java concurrency patterns. I'm passionate about
                        writing clean, maintainable code and continuously learning new technologies.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}