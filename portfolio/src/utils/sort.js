export function sortProjects(list, mode) {
    const copy = [...list]
    switch (mode) {
        case 'date_asc':
            return copy.sort((a, b) => {
                const aDate = a.endDate || a.startDate
                const bDate = b.endDate || b.startDate
                return new Date(aDate) - new Date(bDate)
            })
        case 'date_desc':
            return copy.sort((a, b) => {
                const aDate = a.endDate || a.startDate
                const bDate = b.endDate || b.startDate
                return new Date(bDate) - new Date(aDate)
            })
        case 'title_asc':
            return copy.sort((a, b) => a.title.localeCompare(b.title))
        case 'title_desc':
            return copy.sort((a, b) => b.title.localeCompare(a.title))
        default:
            return list
    }
}