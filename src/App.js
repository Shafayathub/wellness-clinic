import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/Home/About/About';
import Blog from './pages/Home/Blog/Blog';
import Home from './pages/Home/Home';
import Services from './pages/Home/Services/Services';
import Footer from './pages/Shared/Footer';
import Header from './pages/Shared/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
