import { BrowserRouter as Router, Routes, Route, Link, useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

const projects = [
  {
    id: "sheep-simulator",
    title: "Sheep Simulator",
    type: "Game",
    description: "A sheep herding game built in Unity.",
    thumbnail: "/images/sheep.png",
    images: ["/images/sheep1.png", "/images/sheep2.png"],
    videos: ["https://www.youtube.com/embed/your_video_id"],
    links: [{ label: "Play Online", url: "https://example.com/sheep" }],
  },
  {
    id: "procedural-terrain",
    title: "Procedural Terrain Generator",
    type: "Tool",
    description: "A procedural terrain generator with noise algorithms.",
    thumbnail: "/images/terrain.png",
    images: ["/images/terrain1.png", "/images/terrain2.png"],
    links: [{ label: "Source Code", url: "https://github.com/example/terrain" }],
  },
];

function ProjectPageView() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  if (!project) return <Navigate to="/404" replace />;
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="p-6 shadow-md bg-white dark:bg-gray-800 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">{project.title}</h1>
          <Link to="/" className="text-blue-500 hover:underline">Home</Link>
        </div>
      </header>
      <main className="max-w-4xl mx-auto p-6">
        {project.description && (
          <section className="mb-10">
            <p className="text-lg text-gray-700 dark:text-gray-300">{project.description}</p>
          </section>
        )}
        {project.images && project.images.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Gallery</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {project.images.map((src, i) => (
                <motion.img key={i} src={src} alt={`Screenshot ${i + 1}`} className="w-full h-60 object-cover rounded-2xl shadow-md" whileHover={{ scale: 1.03 }} />
              ))}
            </div>
          </section>
        )}
        {project.videos && project.videos.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Videos</h2>
            <div className="space-y-6">
              {project.videos.map((video, i) => (
                <div key={i} className="relative w-full" style={{ paddingTop: "56.25%" }}>
                  <iframe src={video} title={`Video ${i + 1}`} className="absolute inset-0 w-full h-full rounded-2xl shadow-md" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
              ))}
            </div>
          </section>
        )}
        {project.links && project.links.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Links</h2>
            <ul className="space-y-2">
              {project.links.map((link, i) => (
                <li key={i}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{link.label}</a>
                </li>
              ))}
            </ul>
          </section>
        )}
        <div className="mt-12 text-center">
          <Link to="/" className="text-blue-500 hover:underline">← Back to Projects</Link>
        </div>
      </main>
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="text-center p-10">
        <p className="text-2xl font-semibold mb-2">Page not found</p>
        <Link to="/" className="text-blue-500 hover:underline">Go home</Link>
      </div>
    </div>
  );
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.type === filter);
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="flex justify-between items-center p-4 shadow-md bg-white dark:bg-gray-800 sticky top-0 z-10">
        <Link to="/" className="text-xl font-bold">My Portfolio</Link>
        <button type="button" onClick={() => setMenuOpen((v) => !v)} className="md:hidden" aria-label="Toggle menu">
          <Menu />
        </button>
        <nav className="hidden md:flex gap-6">
          <Link to="/#projects" className="hover:text-blue-500">Projects</Link>
          <Link to="/#about" className="hover:text-blue-500">About</Link>
          <Link to="/#contact" className="hover:text-blue-500">Contact</Link>
        </nav>
      </header>
      {menuOpen && (
        <motion.nav initial={{ height: 0 }} animate={{ height: "auto" }} className="flex flex-col gap-4 bg-white dark:bg-gray-800 p-4 md:hidden">
          <Link to="/#projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/#about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </motion.nav>
      )}
      <section className="p-10 text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-extrabold">Hi, I'm Elliot — Game Designer & Coder</motion.h2>
        <p className="mt-4 max-w-xl mx-auto text-gray-600 dark:text-gray-300">I'm a highschool game designer and programmer. I make fun projects ranging from games to tools, and I love experimenting with new ideas.</p>
      </section>
      <section className="flex justify-center gap-4 mb-6">
        {["All", "Game", "Tool"].map((t) => (
          <Button key={t} onClick={() => setFilter(t)} variant={filter === t ? "default" : "outline"}>{t}</Button>
        ))}
      </section>
      <section id="projects" className="grid gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <motion.div key={project.id} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card className="rounded-2xl shadow-lg overflow-hidden">
              <img src={project.thumbnail} alt={project.title} className="w-full h-40 object-cover" />
              <CardContent className="p-4">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">{project.description}</p>
                <Link to={`/projects/${project.id}`} className="inline-block mt-3 text-blue-500 hover:underline">View Project →</Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>
      <section id="about" className="p-10 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p>I'm a student passionate about designing and coding games. I enjoy creating immersive experiences, experimenting with mechanics, and exploring the intersection of art and technology.</p>
      </section>
      <section id="contact" className="p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p>
          Feel free to reach out to me at
          <a href="mailto:elliot@example.com" className="text-blue-500 hover:underline ml-1">elliot@example.com</a>
        </p>
      </section>
      <footer className="text-center p-4 text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Elliot D'Alessandro. All rights reserved.</footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects/:id" element={<ProjectPageView />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
