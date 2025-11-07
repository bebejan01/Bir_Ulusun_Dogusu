import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { RoomLiberation } from './pages/RoomLiberation';
import { RoomRepublic } from './pages/RoomRepublic';
import { RoomReforms } from './pages/RoomReforms';
import { RoomCompanions } from './pages/RoomCompanions';
import { Guestbook } from './pages/Guestbook';
import { About } from './pages/About';
import { useUI } from './store/useUI';

function App() {
  const { theme } = useUI();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    document.title = "A Nation's Birth - Atatürk and His Comrades";
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rooms/liberation" element={<RoomLiberation />} />
          <Route path="rooms/republic" element={<RoomRepublic />} />
          <Route path="rooms/reforms" element={<RoomReforms />} />
          <Route path="rooms/companions" element={<RoomCompanions />} />
          <Route path="guestbook" element={<Guestbook />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
