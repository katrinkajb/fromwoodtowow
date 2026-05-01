import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
import Faqs from "./pages/Faqs";
import CustomBuilds from "./pages/CustomBuilds";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "100%",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/custom" element={<CustomBuilds />} />
          <Route path="/faqs" element={<Faqs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
