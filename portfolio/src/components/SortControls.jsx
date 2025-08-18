import React from 'react'

export default function SortControls({sortBy, setSortBy, filterType, setFilterType, types}){
  return (
    <div className="flex gap-3 items-center mb-4">
      <label className="text-sm text-white/70">Sort</label>
      <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="px-3 py-1 rounded-md bg-white/3">
        <option value="date_desc">Newest</option>
        <option value="date_asc">Oldest</option>
        <option value="title_asc">Title A→Z</option>
        <option value="title_desc">Title Z→A</option>
      </select>

      <label className="text-sm text-white/70">Filter</label>
      <select value={filterType} onChange={e => setFilterType(e.target.value)} className="px-3 py-1 rounded-md bg-white/3">
        <option value="all">All</option>
        {types.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
    </div>
  )
}