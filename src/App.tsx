import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import ContactPage from './pages/contact';
import AboutPage from './pages/aboutpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/about"   element={<AboutPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
