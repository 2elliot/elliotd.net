import React, {useState, useMemo} from 'react'
import { projects as allProjects } from '../data/projects'
import SortControls from '../components/SortControls'
import ProjectGrid from '../components/ProjectGrid'
import { sortProjects } from '../utils/sort'

export default function Projects(){
  const [sortBy, setSortBy] = useState('date_desc')
  const [filterType, setFilterType] = useState('all')

  const types = useMemo(() => {
    const set = new Set(allProjects.map(p => p.type))
    return [...set]
  }, [])

  const filtered = useMemo(() => {
    let list = [...allProjects]
    if(filterType !== 'all') list = list.filter(p => p.type === filterType)
    return sortProjects(list, sortBy)
  }, [sortBy, filterType])

  return (
    <div>
      <h1 className="text-3xl mb-4">Projects</h1>
      <SortControls sortBy={sortBy} setSortBy={setSortBy} filterType={filterType} setFilterType={setFilterType} types={types} />

      <ProjectGrid projects={filtered} />
    </div>
  )
}