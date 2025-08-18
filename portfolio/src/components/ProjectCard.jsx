import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {

    const year = project.endDate
        ? new Date(project.endDate).getFullYear()
        : new Date(project.startDate).getFullYear();

    return (
        <motion.article whileHover={{ y: -4 }} className="w-72 flex-shrink-0 card mr-4">
            <Link to={`/projects/${project.id}`}>
                <div className="h-40 rounded-md overflow-hidden bg-black/20 flex items-center justify-center">
                    {project.thumbnail ? (
                        <img src={project.thumbnail} alt={project.title} className="object-cover w-full h-full" />
                    ) : (
                        <div className="text-white/60">No thumbnail</div>
                    )}
                </div>
                <div className="mt-3">
                    <h3 className="font-semibold">{project.title}</h3>
                    <div className="text-sm text-white/60 mt-1">{project.type} • {year}</div>
                </div>
            </Link>
        </motion.article>
    )
}