import React from 'react'
import ProjectCard from './ProjectCard'

export default function ProjectGrid({projects}){
  return (
    <div className="overflow-x-auto py-2">
      <div className="flex items-stretch">
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  )
}