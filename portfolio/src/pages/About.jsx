import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-mono">About</h1>
      <p>Game designer and developer experienced with Unity.</p>
      <p>Socials:{' '}
        <a className="underline" href="mailto:elliotjdalessandro@gmail.com" target="_blank">Email</a>{' • '}
        <a className="underline" href="https://github.com/2Elliot" target="_blank">GitHub</a>{' • '}
        <a className="underline" href="https://www.linkedin.com/in/elliot-d-alessandro-520aa02a8/" target="_blank">LinkedIn</a>{' • '}
        <a className="underline" href="https://2elliot.itch.io/" target="_blank">Itch.io</a>{' • '}
        <a className="underline" href="/documents/resume.pdf" target="_blank">Resume</a>{' • '}
        <a className="underline" href="https://www.instagram.com/elliotunderscore/" target="_blank">Instagram</a>
      </p>
      <div className="mt-6">
        <Link to="/" className="px-4 py-2 card">Return home</Link>
      </div>
    </div>
  )
}