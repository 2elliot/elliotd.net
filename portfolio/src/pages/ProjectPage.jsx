import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectPage(){
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if(!project) return (
    <div className="prose prose-invert">
      <h2>Project not found</h2>
      <p>We couldn't find that project. <Link to="/projects">Back to projects</Link></p>
    </div>
  )

  return (
    <article className="max-w-3xl mx-auto prose prose-invert">
      <h1>{project.title}</h1>
      <div className="text-sm text-white/60">{project.type} • {new Date(project.date).toLocaleDateString()}</div>
      <p>{project.content}</p>

      {project.media && project.media.length > 0 && (
        <div className="grid grid-cols-1 gap-4 mt-4">
          {project.media.map((m, i) => (
            <div key={i} className="rounded overflow-hidden">
              {m.endsWith('.mp4') ? (
                <video controls src={m} className="w-full" />
              ) : (
                <img src={m} alt={`${project.title} ${i+1}`} className="w-full" />
              )}
            </div>
          ))}
        </div>
      )}

      {project.links && project.links.length > 0 && (
        <div className="mt-4">
          <h3>Links</h3>
          <ul>
            {project.links.map((l, i) => (
              <li key={i}><a href={l.url} className="underline" target="_blank" rel="noreferrer">{l.label}</a></li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}
