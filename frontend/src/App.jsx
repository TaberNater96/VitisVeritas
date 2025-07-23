import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header'; // You will create this soon
// Import page components here as they get created
// import HomePage from './pages/HomePage';
// import AVAsPage from './pages/AVAsPage';

function App() {
  return (
    <BrowserRouter>
      {/* The Header will contain your main navigation links */}
      {/* <Header /> */}
      
      <main>
        <Routes>
          {/* For now, we'll just have a placeholder for the home page */}
          <Route path="/" element={<div>Welcome to Vitis Veritas!</div>} />
          
          {/* You will add more routes here later */}
          {/* <Route path="/avas" element={<AVAsPage />} /> */}
        </Routes>
      </main>

      {/* You can add a <Footer /> component here later */}
    </BrowserRouter>
  );
}

export default App;