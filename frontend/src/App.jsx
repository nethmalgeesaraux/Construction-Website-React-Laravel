import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/frontend/Home';
import About from './Components/frontend/About';
import Services from './Components/frontend/Services';
import Projects from './Components/frontend/Projects';
import Blogs from './Components/frontend/Blogs';
import ContactUs from './Components/frontend/ContactUs';
import './assets/css/style.scss';
import Login from './Components/backend/Login';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/admin/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
