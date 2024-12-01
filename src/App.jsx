import { Routes, Route, useLocation } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import NavbarComponent from "./Components/NavbarComponent";
import ShopPage from "./pages/ShopPage";
import AboutUsPage from "./pages/AboutUsPage";
import FooterComponent from "./Components/FooterComponent";
import ServicePage from "./pages/ServicePage";
import ContactUsPage from "./pages/ContactUsPage";

function App() {

  const location = useLocation();
  const pathname = location.pathname.split('/').filter(Boolean).pop();

  return (
    <div>
      <NavbarComponent pathname={pathname} />
    
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="about" element={<AboutUsPage/>} />
          <Route path="services" element={<ServicePage/>} />
          <Route path="contact" element={<ContactUsPage/>} />
        </Routes>
      
      <FooterComponent pathname={pathname} />
    </div>
  );
}

export default App;
