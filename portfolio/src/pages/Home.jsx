import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import ProjectGrid from '../components/ProjectGrid'

export default function Home(){
  return (
    <div className="prose prose-invert mx-auto max-w-4xl">
      <section className="mb-8">
        <h1 className="text-4xl font-mono">Hi — I’m Elliot.</h1>
        <p className="lead text-lg">I’m a game designer & developer. I mainly work with Unity.</p>
        <p>Currently working on: Applying to college</p>
        <div className="mt-6">
          <Link to="/projects" className="px-4 py-2 rounded-lg card inline-block">See projects →</Link>
        </div>
      </section>

      <section id="featured" className="mb-8">
        <h2 className="text-2xl">Featured Projects</h2>
        <ProjectGrid projects={projects} />
      </section>

      <section id="bio" className="mt-10 card">
        <h2 className="text-2xl">About</h2>
        <p>Game designer and developer experienced with Unity.</p>
        <p>Socials:{' '}
            <a className="underline" href="mailto:elliotjdalessandro@gmail.com" target="_blank">Email</a>{' • '}
            <a className="underline" href="https://github.com/2Elliot" target="_blank">GitHub</a>{' • '}
            <a className="underline" href="https://www.linkedin.com/in/elliot-d-alessandro-520aa02a8/" target="_blank">LinkedIn</a>{' • '}
            <a className="underline" href="https://2elliot.itch.io/" target="_blank">Itch.io</a>{' • '}
            <a className="underline" href="documents/ElliotDAlessandro_Resume.pdf" target="_blank">Resume</a>{' • '}
            <a className="underline" href="https://www.instagram.com/elliotunderscore/" target="_blank">Instagram</a>
        </p>
        <div class="social-links">
      <a href="mailto:elliotjdalessandro@gmail.com" target="_blank" aria-label="Email">
        <i class="fas fa-envelope"></i>
      </a>
      <a href="https://github.com/2Elliot" target="_blank" aria-label="GitHub">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/elliot-d-alessandro-520aa02a8/" target="_blank" aria-label="LinkedIn">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="https://2elliot.itch.io/" target="_blank" aria-label="Itch.io">
        <i class="fab fa-itch-io"></i>
      </a>
      <a href="documents/ElliotDAlessandro_Resume.pdf" target="_blank" aria-label="Resume">
        <i class="fas fa-file-alt"></i>
      </a>
      <a href="https://www.instagram.com/elliotunderscore/" target="_blank" aria-label="Instagram">
        <i class="fab fa-instagram"></i>
      </a>
    </div>
      </section>
    </div>
  )
}