import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
// Import additional page components here as they get created
// import AVAsPage from './pages/AVAsPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* You will add more routes here later */}
          {/* <Route path="/avas" element={<AVAsPage />} /> */}
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;