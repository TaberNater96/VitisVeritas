import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import AlchemyPage from './pages/AlchemyPage';
// Import additional page components here as they get created

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/alchemy" element={<AlchemyPage />} />
          
          {/* We will add more routes here later */}
          {/* <Route path="/avas" element={<AVAsPage />} /> */}
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;