export function sortProjects(list, mode){
  const copy = [...list]
  switch(mode){
    case 'date_asc':
      return copy.sort((a,b) => new Date(a.date) - new Date(b.date))
    case 'date_desc':
      return copy.sort((a,b) => new Date(b.date) - new Date(a.date))
    case 'title_asc':
      return copy.sort((a,b) => a.title.localeCompare(b.title))
    case 'title_desc':
      return copy.sort((a,b) => b.title.localeCompare(a.title))
    default:
      return list
  }
}