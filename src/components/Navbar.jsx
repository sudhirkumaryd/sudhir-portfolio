import { useState } from 'react'
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa'

const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
]

export default function Navbar({ darkMode, setDarkMode }) {
    const [open, setOpen] = useState(false)

    return (
        <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" className="text-xl font-bold">
                    Sudhir <span className="text-java">Yadav</span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-java transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                    >
                        {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <button onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
                    </button>
                    <button onClick={() => setOpen(!open)}>
                        {open ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white dark:bg-slate-900 px-6 pb-4 flex flex-col gap-4">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="text-sm font-medium hover:text-java"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    )
}