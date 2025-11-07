import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import RouteTransition from './components/RouteTransition'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Resume from './pages/Resume'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<RouteTransition><Home /></RouteTransition>} />
          <Route path="/about" element={<RouteTransition><About /></RouteTransition>} />
          <Route path="/projects" element={<RouteTransition><Projects /></RouteTransition>} />
          <Route path="/skills" element={<RouteTransition><Skills /></RouteTransition>} />
          <Route path="/contact" element={<RouteTransition><Contact /></RouteTransition>} />
          <Route path="/resume" element={<RouteTransition><Resume /></RouteTransition>} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}
