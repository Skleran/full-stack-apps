import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AnnouncementsPage from './pages/AnnouncementsPage'
import Navbar from './components/Navbar'
import RoadmapMainPage from './pages/RoadmapMainPage'
import RMCheckpoint1 from './pages/roadmaps/RMCheckpoint1'

function App() {
  return (
    <>
      <Router>
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
      </Router>
    </>
  )
}

export default App
