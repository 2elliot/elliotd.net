import fm from "front-matter"

const projectFiles = import.meta.glob("../projects/*.md", { 
  eager: true, 
  query: "?raw", 
  import: "default" 
})

export function getAllProjects() {
  return Object.entries(projectFiles).map(([path, raw]) => {
    const { attributes, body } = fm(raw)
    return { ...attributes, content: body }
  })
}

export function getProjectById(id) {
  for (const raw of Object.values(projectFiles)) {
    const { attributes, body } = fm(raw)
    if (attributes.id === id) {
      return { ...attributes, content: body }
    }
  }
  return null
}
