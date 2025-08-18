import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = ({to, children}) => (
  <NavLink to={to} className={({isActive}) => `px-3 py-1 rounded-md hover:bg-white/6 transition ${isActive ? 'bg-white/10' : ''}`}>
    {children}
  </NavLink>
)

export default function Header(){
  return (
    <header className="sticky top-0 z-20 backdrop-blur-md bg-black/30 border-b border-white/6">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div>
          <NavLink to="/" className="font-mono text-xl tracking-wider">Elliot</NavLink>
        </div>
        <nav className="flex items-center gap-2">
          <Nav to="/">Home</Nav>
          <Nav to="/projects">Projects</Nav>
          <a href="#bio" className="px-3 py-1 rounded-md hover:bg-white/6 transition">About</a>
        </nav>
      </div>
    </header>
  )
}