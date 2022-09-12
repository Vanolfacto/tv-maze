import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Show from './Pages/Show';
import Navbar from './Pages/Navbar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show/:id" element={<Show />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
/* <Home /> */
