import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Thanks ${form.name}! Your message has been received.`)
        setForm({ name: '', email: '', message: '' })
    }

    return (
        <section id="contact" className="py-20 px-6 bg-slate-50 dark:bg-slate-800/50">
            <div className="max-w-5xl mx-auto">
                <h2 className="section-title">Get In <span>Touch</span></h2>

                <div className="grid md:grid-cols-2 gap-10">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-bold mb-6">Let's talk!</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                            I'm open to opportunities in Java Full Stack Development. Feel free to reach out!
                        </p>

                        <div className="space-y-4">
                            <a href="mailto:sudhiryadavcse@gmail.com" className="flex items-center gap-4 hover:text-java transition">
                                <div className="p-3 bg-java/10 rounded-lg text-java"><FaEnvelope /></div>
                                <span>sudhiryadavcse@gmail.com</span>
                            </a>
                            <a href="tel:+917631014306" className="flex items-center gap-4 hover:text-java transition">
                                <div className="p-3 bg-java/10 rounded-lg text-java"><FaPhone /></div>
                                <span>+91-76310-14306</span>
                            </a>
                        </div>

                        <div className="flex gap-4 mt-8 text-2xl">
                            <a href="https://github.com/sudhirkumaryd" target="_blank" rel="noreferrer" className="hover:text-java transition"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/sudhir-yadav-706516222/" target="_blank" rel="noreferrer" className="hover:text-java transition"><FaLinkedin /></a>
                            <a href="https://leetcode.com/u/sudhir_1432/" target="_blank" rel="noreferrer" className="hover:text-java transition"><SiLeetcode /></a>
                            <a href="https://www.geeksforgeeks.org/profile/sk1439w88l?tab=activity" target="_blank" rel="noreferrer" className="hover:text-java transition"><SiGeeksforgeeks /></a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-java"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-java"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            required
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-java resize-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-java text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
                        >
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    )
}