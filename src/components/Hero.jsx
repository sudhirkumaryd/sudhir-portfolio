import { FaGithub, FaLinkedin, FaCode, FaFileAlt } from 'react-icons/fa'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Photo */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center"
                >
                    <div className="relative">
                        <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-java to-spring p-1">
                            <img
                                src="/sudhir.jpg"
                                alt="Sudhir Yadav"
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-4 -right-4 bg-java text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                            350+ LeetCode 🏆
                        </div>
                    </div>
                </motion.div>

                {/* Intro */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p className="text-java font-semibold mb-2">Hello, I'm</p>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                        Sudhir Yadav
                    </h1>
                    <h2 className="text-xl md:text-2xl font-semibold text-slate-600 dark:text-slate-300 mb-6">
                        Java Full Stack Developer
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                        B.Tech CSE graduate passionate about building scalable web applications
                        with <span className="text-spring font-semibold">Spring Boot</span> and{' '}
                        <span className="text-react font-semibold">React.js</span>.
                        Solved 350+ DSA problems on LeetCode.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 mb-8">
                        <a
                            href="/resume.pdf"
                            download
                            className="flex items-center gap-2 bg-java text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
                        >
                            <FaFileAlt /> Resume
                        </a>
                        <a
                            href="#contact"
                            className="flex items-center gap-2 border-2 border-java text-java px-6 py-3 rounded-lg font-semibold hover:bg-java hover:text-white transition"
                        >
                            Contact Me
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4 text-2xl">
                        <a href="https://github.com/sudhirkumaryd" target="_blank" rel="noreferrer" className="hover:text-java transition">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/sudhir-yadav-706516222/" target="_blank" rel="noreferrer" className="hover:text-java transition">
                            <FaLinkedin />
                        </a>
                        <a href="https://leetcode.com/u/sudhir_1432/" target="_blank" rel="noreferrer" className="hover:text-java transition">
                            <SiLeetcode />
                        </a>
                        <a href="https://www.geeksforgeeks.org/profile/sk1439w88l?tab=activity" target="_blank" rel="noreferrer" className="hover:text-java transition">
                            <SiGeeksforgeeks />
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}