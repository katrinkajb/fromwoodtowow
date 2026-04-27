import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="App">
      <Header />
      <div style={{ flex: 1 }}>
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}
