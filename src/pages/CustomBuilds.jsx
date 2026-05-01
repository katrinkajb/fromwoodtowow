import Header from "../components/Header";
import Footer from "../components/Footer";
import Typography from "@mui/material/Typography";

export default function CustomBuilds() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div style={{ flex: 1, padding: "2%" }}>
        <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
          Custom Builds
        </Typography>
        <Typography>
          Most garden pieces are ready in 7-10 days. Larger custom requests may
          take longer, but we'll keep you updated along the way.
        </Typography>
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
