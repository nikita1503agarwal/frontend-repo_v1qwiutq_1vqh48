import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { to: '#about', label: 'About' },
  { to: '#services', label: 'Services' },
  { to: '#events', label: 'Events' },
  { to: '#gallery', label: 'Gallery' },
  { to: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClasses = 'rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-300'

  return (
    <header className="sticky top-0 z-50 border-b border-sky-900/10 bg-white/70 backdrop-blur dark:border-sky-300/10 dark:bg-slate-900/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-400 to-sky-600 shadow-md ring-1 ring-white/30"></div>
            <span className="text-base font-semibold tracking-tight text-slate-900 dark:text-white">SUI Ghana</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a key={item.to} href={item.to} className={linkClasses} onClick={() => setOpen(false)}>
                {item.label}
              </a>
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
            <span className="sr-only">Toggle menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M4.5 6.75A.75.75 0 015.25 6h13.5a.75.75 0 010 1.5H5.25A.75.75 0 014.5 6.75zm0 5.25c0-.414.336-.75.75-.75h13.5a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75zm.75 4.5a.75.75 0 000 1.5h13.5a.75.75 0 000-1.5H5.25z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a key={item.to} href={item.to} className={linkClasses} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
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
