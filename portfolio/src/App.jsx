import React from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from "./components/ScrollToTop";
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectPage from './pages/ProjectPage'
import About from './pages/About'
import NotFound from './pages/NotFound'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/projects/:id" element={<ProjectPage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}