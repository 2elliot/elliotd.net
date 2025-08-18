import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-mono">404</h1>
      <p className="mt-4">Page not found</p>
      <div className="mt-6">
        <Link to="/" className="px-4 py-2 card">Return home</Link>
      </div>
    </div>
  )
}