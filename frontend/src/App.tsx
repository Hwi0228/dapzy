import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuestionsPage from './pages/QuestionsPage';

function App() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
      <header style={{ borderBottom: '1px solid #e5e7eb', padding: '16px 0', marginBottom: '24px' }}>
        <a href="/" style={{ fontSize: '24px', fontWeight: 'bold', color: '#1d4ed8', textDecoration: 'none' }}>
          📚 답지
        </a>
        <nav style={{ display: 'inline-block', marginLeft: '32px' }}>
          <a href="/questions" style={{ marginRight: '16px', color: '#374151', textDecoration: 'none' }}>문제 목록</a>
          <a href="/quizzes" style={{ marginRight: '16px', color: '#374151', textDecoration: 'none' }}>문제집</a>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/questions" element={<QuestionsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
