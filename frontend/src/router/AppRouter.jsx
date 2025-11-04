import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import ScrollToTop from '../components/layout/ScrollToTop'
import Home from '../pages/Home'
import Events from '../pages/Events'
import Projects from '../pages/Projects'
import Team from '../pages/Team'
import Blog from '../pages/Blog'
import About from '../pages/About'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'

export default function AppRouter(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollToTop />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
