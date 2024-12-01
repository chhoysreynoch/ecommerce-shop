import { Routes, Route, useLocation } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import NavbarComponent from "./Components/NavbarComponent";
import ShopPage from "./pages/ShopPage";

function App() {

  const location = useLocation();
  const pathname = location.pathname.split('/').filter(Boolean).pop();

  return (
    <div>
      <NavbarComponent pathname={pathname} />
    
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          {/* <Route path="blog" element={<BlogPage />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
  
    </div>
  );
}

export default App;
