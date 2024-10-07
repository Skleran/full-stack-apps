import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AnnouncementsPage from './pages/AnnouncementsPage'
import Navbar from './components/Navbar'
import RoadmapMainPage from './pages/RoadmapMainPage'
import RMCheckpoint1 from './pages/roadmaps/RMCheckpoint1'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/full-stack-apps/" element={<HomePage />} />
          <Route
            path="/full-stack-apps/announcements"
            element={<AnnouncementsPage />}
          />
          <Route
            path="/full-stack-apps/roadmap"
            element={<RoadmapMainPage />}
          />
          <Route
            path="/full-stack-apps/checkpoint-1"
            element={<RMCheckpoint1 />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
