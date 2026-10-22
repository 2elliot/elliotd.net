import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

export const typeLabels: Record<Project['data']['type'], string> = {
    game: 'Games',
    software: 'Software',
    hackathon: 'Hackathons',
    research: 'Research',
};

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// "2025-08" -> "August, 2025"; "2024" -> "2024"
function formatDate(date: string) {
    const [year, month] = date.split('-');
    return month ? `${months[Number(month) - 1]}, ${year}` : year;
}

export function dateRange(project: Project, separator: string) {
    const { start, end } = project.data;
    return [start, end].filter((d): d is string => Boolean(d)).map(formatDate).join(separator);
}

export function hasPage(project: Project) {
    return Boolean(project.body?.trim());
}

export function projectHref(project: Project) {
    return hasPage(project) ? `/projects/${project.id}/` : project.data.links[0]?.url;
}

// Listed (not hidden) projects, newest first; undated ones go last
export async function getProjects() {
    const projects = await getCollection('projects', project => !project.data.hidden);
    const sortKey = (project: Project) => project.data.end ?? project.data.start ?? '';
    return projects.sort((a, b) => (sortKey(a) < sortKey(b) ? 1 : sortKey(a) > sortKey(b) ? -1 : 0));
}
