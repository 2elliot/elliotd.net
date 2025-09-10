import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Nav = ({ to, children }) => (
  <NavLink to={to} className={({ isActive }) => `px-3 py-1 rounded-md hover:bg-white/6 transition ${isActive ? 'bg-white/10' : ''}`}>
    {children}
  </NavLink>
)

export default function Header() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  return (
    <header className="sticky top-0 w-full z-20 backdrop-blur-md bg-black/30 border-b border-white/6 h-[7.5vh] flex items-center px-6">      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
      <div>
        <NavLink to="/" className="font-mono text-xl tracking-wider">Elliot</NavLink>
      </div>
      <nav className="flex items-center gap-2">
        <Nav to="/">Home</Nav>
        <Nav to="/projects">Projects</Nav>
        <Nav to="/about">About</Nav>

        <button
          onClick={() => setIsDark(!isDark)}
          className="ml-4 px-3 py-1 rounded bg-white/20 text-white dark:text-black dark:bg-black/20 hover:bg-white/30 transition-colors"
        >
          {isDark ? "Light" : "Dark"}
        </button>
      </nav>
    </div>
    </header>
  )
}