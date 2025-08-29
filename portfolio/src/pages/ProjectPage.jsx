import { useParams, Link } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm" // enables GitHub-style markdown (lists, tables, etc.)
import rehypeRaw from "rehype-raw" // allow raw HTML in markdown
import { getProjectById } from "../lib/loadProjects"

export default function ProjectPage() {
  const { id } = useParams()
  const project = getProjectById(id)

  if (!project) {
    return (
      <div className="prose prose-invert">
        <h2>Project not found</h2>
        <p>We couldn't find that project. <Link to="/projects">Back to projects</Link></p>
      </div>
    )
  }

  return (
    <article className="max-w-3xl mx-auto prose prose-invert">
      {/* <h1>{project.title}</h1> */}
      <img src={project.thumbnail} alt={`${project.title} thumbnail`} className="rounded" />

      <div className="text-sm text-white/60">
        {project.type} •{" "}
        {new Date(project.startDate).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
        {" – "}
        {project.endDate
          ? new Date(project.endDate).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })
          : "Present"}
      </div>

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          p: ({ node, ...props }) => <p className="mb-4" {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-4" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-4" {...props} />,
          li: ({ node, ...props }) => <li className="mb-1" {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-6 mb-2" {...props} />,
          h3: ({ node, ...props }) => <h3 className="text-xl font-semibold mt-4 mb-2" {...props} />,
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-white/30 pl-4 italic my-4" {...props} />
          )
        }}
      >
        {project.content}
      </ReactMarkdown>

      {project.links?.length > 0 && (
        <section className="mt-8">
          <h2>Links:</h2>
          <ul>
            {project.links.map((l, i) => (
              <li key={i}>
                <a href={l.url} className="underline" target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  )
}
