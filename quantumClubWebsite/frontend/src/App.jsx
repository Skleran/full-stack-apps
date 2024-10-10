import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AnnouncementsPage from './pages/AnnouncementsPage'
import Navbar from './components/Navbar'
import RoadmapMainPage from './pages/RoadmapMainPage'
import RMCheckpoint1 from './pages/roadmaps/RMCheckpoint1'
import RMCheckpoint2 from './pages/roadmaps/RMCheckpoint2'
import RMCheckpoint3 from './pages/roadmaps/RMCheckpoint3'
import RMCheckpoint4 from './pages/roadmaps/RMCheckpoint4'
import RMCheckpoint5 from './pages/roadmaps/RMCheckpoint5'
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
          <Route
            path="/full-stack-apps/checkpoint-2"
            element={<RMCheckpoint2 />}
          />
          <Route
            path="/full-stack-apps/checkpoint-3"
            element={<RMCheckpoint3 />}
          />
          <Route
            path="/full-stack-apps/checkpoint-4"
            element={<RMCheckpoint4 />}
          />
          <Route
            path="/full-stack-apps/checkpoint-5"
            element={<RMCheckpoint5 />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
