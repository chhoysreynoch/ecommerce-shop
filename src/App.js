import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <div>

<BrowserRouter>
      <Routes>
       
          {/* <Route index element={<Home />} /> */}
          <Route path="blog" element={<BlogPage />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
      
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
