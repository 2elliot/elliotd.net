import React from 'react'

export default function Footer(){
  return (
    <footer className="py-6 border-t border-white/6 mt-8">
      <div className="container mx-auto px-4 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Elliot — Game Designer & Developer.
      </div>
    </footer>
  )
}