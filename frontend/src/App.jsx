import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import AlchemyPage from './pages/AlchemyPage';
import TerroirPage from './pages/TerroirPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terroir" element={<TerroirPage />} />
          <Route path="/alchemy" element={<AlchemyPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;