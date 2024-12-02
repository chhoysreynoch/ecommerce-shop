import { Routes, Route, useLocation, data } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import NavbarComponent from "./Components/NavbarComponent";
import ShopPage from "./pages/ShopPage";
import AboutUsPage from "./pages/AboutUsPage";
import FooterComponent from "./Components/FooterComponent";
import ServicePage from "./pages/ServicePage";
import ContactUsPage from "./pages/ContactUsPage";
import { useEffect, useState } from "react";
import { baseUrl } from "./configs/api";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/ChekoutPage";
import ThankyouPage from "./pages/ThankyouPage";

function App() {

  const location = useLocation();
  const pathname = location.pathname.split('/').filter(Boolean).pop();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const displayedProducts = products.slice(0, 5);
  const displayThreeProducts = products.slice(0, 3);

  console.log("all products ", products)


  return (
    <div>
      <NavbarComponent pathname={pathname} />
    
        <Routes>
          <Route path="/" element={<HomePage displayedProducts={displayedProducts} />} />
          <Route path="shop" element={<ShopPage products={products}/>} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/CheckoutPage" element={<CheckoutPage />} />
          <Route path="/ThankyouPage" element={<ThankyouPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="about" element={<AboutUsPage/>} />
          <Route path="services" element={<ServicePage displayThreeProducts={displayThreeProducts}/>} />
          <Route path="contact" element={<ContactUsPage/>} />
        </Routes>
      
      <FooterComponent pathname={pathname} />
    </div>
  );
}

export default App;
