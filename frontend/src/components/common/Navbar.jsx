import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'
import AdminToggle from './AdminToggle'
import { Search } from 'lucide-react'

export default function Navbar() {
  const loc = useLocation()
  const [q, setQ] = useState('')

  // ✅ Use Vite's import.meta.env instead of process.env
  const collegeName = import.meta.env.VITE_COLLEGE_NAME || 'G.L. Bajaj Institute'

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-gdsc-dark border-b border-gray-200 dark:border-gray-700 backdrop-blur-md bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="logo"
            className="w-9 h-9 rounded-sm object-cover"
          />
          <div>
            <div className="font-semibold text-gray-900 dark:text-white">
              GDSC — G.L. Bajaj
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Google Developer Student Club — {collegeName}
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-4 ml-6">
          <Link
            to="/"
            className={`text-sm ${
              loc.pathname === '/' ? 'text-gdsc-blue font-medium' : ''
            }`}
          >
            Home
          </Link>
          <Link
            to="/events"
            className={`text-sm ${
              loc.pathname === '/events' ? 'text-gdsc-blue font-medium' : ''
            }`}
          >
            Events
          </Link>
          <Link
            to="/projects"
            className={`text-sm ${
              loc.pathname === '/projects' ? 'text-gdsc-blue font-medium' : ''
            }`}
          >
            Projects
          </Link>
          <Link
            to="/team"
            className={`text-sm ${
              loc.pathname === '/team' ? 'text-gdsc-blue font-medium' : ''
            }`}
          >
            Team
          </Link>
        </nav>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className="max-w-xl w-full">
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-2 gap-2">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search events, projects, members..."
                className="bg-transparent w-full text-sm outline-none placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 ml-4">
          <DarkModeToggle />
          <AdminToggle />
        </div>
      </div>
    </header>
  )
}
