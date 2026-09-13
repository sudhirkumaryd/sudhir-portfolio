import { motion } from 'framer-motion'
import {
    FaJava, FaReact, FaDocker, FaGitAlt, FaLinux, FaAws, FaDatabase
} from 'react-icons/fa'
import { SiSpringboot, SiMysql, SiMongodb } from 'react-icons/si'

const skills = [
    { name: 'Java', icon: <FaJava />, color: 'text-orange-500', level: 90 },
    { name: 'Spring Boot', icon: <SiSpringboot />, color: 'text-green-500', level: 85 },
    { name: 'React.js', icon: <FaReact />, color: 'text-cyan-400', level: 80 },
    { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-500', level: 85 },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-600', level: 70 },
    { name: 'REST APIs', icon: <FaDatabase />, color: 'text-purple-500', level: 85 },
    { name: 'Docker', icon: <FaDocker />, color: 'text-blue-400', level: 70 },
    { name: 'Git & Linux', icon: <FaGitAlt />, color: 'text-red-500', level: 80 },
    { name: 'AWS (EC2, S3)', icon: <FaAws />, color: 'text-yellow-500', level: 65 },
]

export default function Skills() {
    return (
        <section id="skills" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="section-title">My <span>Skills</span></h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-xl transition border border-slate-100 dark:border-slate-700"
                        >
                            <div className={`text-4xl mb-3 ${skill.color}`}>{skill.icon}</div>
                            <h3 className="font-semibold mb-3">{skill.name}</h3>
                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                                <div
                                    className="bg-gradient-to-r from-java to-spring h-2 rounded-full"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}