import { Link } from "react-router-dom"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { projects } from "../data/projects"
import ProjectGrid from "../components/ProjectGrid"

export default function Home() {
  return (
    <div className="relative w-full">
      {/* ===== Hero Section ===== */}
      <section className="min-h-[90vh] flex items-center justify-center px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-5xl mx-auto">
          {/* Left: Text column with constrained width */}
          <div className="text-center md:text-left">
            <div className="mx-auto md:mx-0 max-w-[65ch]">
              <h1
                className="font-bold mb-6 leading-tight"
                style={{ fontSize: "clamp(2rem, 2.5vw, 3.25rem)" }}
              >
                Hi — I’m Elliot.
              </h1>

              <p
                className="mb-4 text-[var(--muted)]"
                style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.25rem)" }}
              >
                I make creative things — mostly games and tools in Unity. I enjoy exploring
                unusual mechanics and experimental UI systems.
              </p>

              <Link
                to="/projects"
                className="inline-block px-6 py-3 rounded-lg bg-[var(--accent)] text-black font-semibold"
              >
                See Projects →
              </Link>
            </div>
          </div>

          {/* Right: Image (cap width + height so it never explodes) */}
          <div className="flex justify-center">
            <img
              src="/images/portrait.jpg"
              alt="Elliot portrait"
              className="rounded-2xl shadow-lg object-cover"
              style={{
                width: "min(40vw, 420px)",
                maxHeight: "60vh"
              }}
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
          <h2 className="font-bold mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
            About Me
          </h2>
          <p className="text-[var(--muted)] mb-6" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
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
          <h2 className="font-bold mb-6" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
            Highlights
          </h2>
          <p className="text-[var(--muted)] mb-6" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
            My favorite projects
          </p>
          <ProjectGrid projects={projects} />
        </div>
      </section>
    </div>
  )
}
