import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Pages
import LoginPage from './Pages/LoginPage';
import OverviewPage from './Pages/OverviewPage';
import VideosPage from './Pages/VideosPage';
import CoursesPage from './Pages/CoursesPage';
import SettingsPage from './Pages/SettingsPage';
import DemoMaterialsPage from './Pages/DemoMaterialsPage';
import DemoQuizzesPage from './Pages/DemoQuizzesPage';
import SubjectsPage from './Pages/SubjectsPage';
import SubjectDetailsPage from './Pages/SubjectDetailsPage';

// Components
import Layout from './components/Layout';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminToken, setAdminToken] = useState('');

  const handleLoginSuccess = (token) => {
    setAdminToken(token);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAdminToken('');
  };

  return (
    <Router>
      <div className="App">
        {!isLoggedIn ? (
          <Routes>
            <Route path="/login" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        ) : (
          <Layout handleLogout={handleLogout}>
            <Routes>
              <Route path="/" element={<OverviewPage />} />
              <Route path="/videos" element={<VideosPage adminToken={adminToken} />} />
              <Route path="/demo-pdfs" element={<DemoMaterialsPage adminToken={adminToken} />} />
              <Route path="/demo-quizzes" element={<DemoQuizzesPage adminToken={adminToken} />} />
              <Route path="/courses" element={<CoursesPage adminToken={adminToken} />} />
              <Route path="/subjects/:courseId" element={<SubjectsPage adminToken={adminToken} />} />
              <Route path="/subject-details/:subjectId" element={<SubjectDetailsPage adminToken={adminToken} />} />
              <Route path="/settings" element={<SettingsPage adminToken={adminToken} />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        )}
      </div>
    </Router>
  );
}

export default App;
