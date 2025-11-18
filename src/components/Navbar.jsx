import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/events', label: 'Events' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClasses = ({ isActive }) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      isActive
        ? 'bg-sky-500/10 text-sky-600 dark:text-sky-300'
        : 'text-slate-700 hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-300'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-sky-900/10 bg-white/70 backdrop-blur dark:border-sky-300/10 dark:bg-slate-900/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-400 to-sky-600 shadow-md ring-1 ring-white/30"></div>
            <span className="text-base font-semibold tracking-tight text-slate-900 dark:text-white">SUI Ghana</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClasses} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            >
              Join Community
            </a>
          </div>

          <button className="md:hidden rounded-md p-2 text-slate-700 hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-300" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} className={linkClasses} onClick={() => setOpen(false)}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-3 flex items-center gap-3">
              <ThemeToggle />
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="grow rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-sky-500"
              >
                Join Community
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
