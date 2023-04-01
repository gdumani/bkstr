import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Books from './pages/Books';
import Categories from './pages/Categories';

const App = () => (
  <BrowserRouter>
    <Routes>
      <NavBar />
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </BrowserRouter>
);

export default App;
