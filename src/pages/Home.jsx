import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import Typography from "@mui/material/Typography";
import "../App.css";

export default function Home() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div
        className="light-beige"
        style={{
          flex: 1,
          padding: "2%",
        }}
      >
        {/* <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
          From Wood to Wow
        </Typography> */}
        <div>
          <Typography sx={{ flexGrow: 1 }}>
            We transform wood into handcrafted, wow-worthy pieces for your home,
            yard, and every season!
          </Typography>
        </div>
        <div style={{ flex: 1, padding: "2%" }}>
          <ProductList />
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          width: "100%",
        }}
      >
        <Footer />
      </div>
    </div>
  );
}
