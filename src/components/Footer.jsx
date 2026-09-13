import { FaHeart } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="py-8 text-center text-sm text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700">
            <p className="flex items-center justify-center gap-1">
                Made with <FaHeart className="text-red-500" /> by{' '}
                <span className="font-semibold text-java">Sudhir Yadav</span> | © 2025
            </p>
        </footer>
    )
}