import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
// Import page components here as they get created
// import HomePage from './pages/HomePage';
// import AVAsPage from './pages/AVAsPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <main>
        <Routes>
          {/* For now, we'll just have a placeholder for the home page */}
          <Route path="/" element={<div>Welcome to Vitis Veritas!</div>} />
          
          {/* You will add more routes here later */}
          {/* <Route path="/avas" element={<AVAsPage />} /> */}
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;