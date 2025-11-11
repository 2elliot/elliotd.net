import { Link } from "react-router-dom"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { projects } from "../data/projects" // adjust path
import ProjectGrid from "../components/ProjectGrid" // placeholder component

export default function Home() {
  return (
    <div className="relative w-full">

      {/* ===== Hero Section ===== */}
      <section className="min-h-[90vh] flex items-center justify-center px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl">
          {/* Left: Text */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Hi — I’m Elliot.</h1>
            <p className="text-sm md:text-2xl text-[var(--muted)] mb-4">I make creative things</p>
            <Link to="/projects" className="px-6 py-3 rounded-lg bg-[var(--accent)] text-black font-semibold">
              See Projects →
            </Link>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src="/images/portrait.jpg"
              alt="Elliot portrait"
              className="rounded-2xl shadow-lg max-h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Scroll Arrow */}
        <div className="absolute bottom-4 w-full flex justify-center">
          <a href="#about-teaser" className="animate-bounce">
            <ChevronDownIcon className="h-8 w-8 text-white/70" />
          </a>
        </div>
      </section>

      {/* ===== About Teaser ===== */}
      <section id="about-teaser" className="py-20 bg-white/5 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-[var(--muted)] mb-6">
            I’m a game designer and developer exploring interactive media, experimental mechanics,
            and immersive digital experiences.
          </p>
          <Link to="/about" className="underline text-[var(--accent)] font-semibold">
            Read more →
          </Link>
        </div>
      </section>

      {/* ===== Projects Section Placeholder ===== */}
      <section id="projects" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <p className="text-[var(--muted)] mb-6">[Project grid placeholder]</p>
          <ProjectGrid projects={projects} />
        </div>
      </section>

    </div>
  )
}
