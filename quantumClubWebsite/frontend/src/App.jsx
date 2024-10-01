import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AnnouncementsPage from './pages/AnnouncementsPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/full-stack-apps/" element={<HomePage />} />
        <Route
          path="/full-stack-apps/announcements"
          element={<AnnouncementsPage />}
        />
      </Routes>
    </Router>
  )
}

export default App
