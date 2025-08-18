import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import ProjectGrid from '../components/ProjectGrid'

export default function Home(){
  return (
    <div className="prose prose-invert mx-auto max-w-4xl">
      <section className="mb-8">
        <h1 className="text-4xl font-mono">Hi — I’m Elliot.</h1>
        <p className="lead text-lg">I’m a game designer & developer. I mainly work with Unity and build tools and prototypes. I compete in game jams and enjoy both team and solo projects.</p>
        <p>Current: Building reusable tooling and experimenting with procedural level generation.</p>
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
        <p>Game designer and developer experienced with Unity, tools, and rapid prototyping. I like clean systems and glittery edge cases. I enjoy building AI behaviors and editor tools, and exploring retro text-adventure aesthetics in UI design.</p>
        <p>Socials: <a className="underline" href="https://twitter.com/">Twitter</a> • <a className="underline" href="https://github.com/">GitHub</a> • <a className="underline" href="https://linkedin.com/">LinkedIn</a></p>
      </section>
    </div>
  )
}