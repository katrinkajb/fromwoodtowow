import Header from "../components/Header";
import Footer from "../components/Footer";
import Typography from "@mui/material/Typography";

export default function AboutUs() {
  return (
    <div className="App">
      <Header />
      <div style={{ flex: 1, padding: "2%" }}>
        <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
          FAQs
        </Typography>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Do you ship?
        </Typography>
        <Typography>
          Currently we offer local pickup in Tacoma, WA. (Delivery may be
          available on request- contact us to ask.)
        </Typography>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Where do I pick up my order?
        </Typography>
        <Typography>
          Orders are available for pickup near Tacoma Community College. Once
          your order is ready, we'll contact you with the pickup location and
          time.
        </Typography>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          How long does my order take?
        </Typography>
        <Typography>
          Most garden pieces are ready in 7-10 days. Larger custom requests may
          take longer, but we'll keep you updated along the way.
        </Typography>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          What kind of wood do you use?{" "}
        </Typography>
        <Typography>
          We use Douglas Fir, Pine, and Cedar to create strong durable pieces
          that are built to last.
        </Typography>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Can I choose my own colors?
        </Typography>
        <Typography>
          Yes! Each piece (where applicable) can be left raw, stained, or
          painted in one or two colors. After you place your order, we'll follow
          up with you to confirm your preferred colors and finishes so we can
          customize your piece just the way you'd like it.{" "}
        </Typography>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          How can I make my piece last?
        </Typography>
        <Typography>
          We recommend sealing or re-staining items once a year to keep them
          looking fresh.
        </Typography>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Do you do custom orders?
        </Typography>
        <Typography>
          Yes! Contact us to discuss your custom order ideas and we'll work with
          you to create a piece that's perfect for your space.
        </Typography>
      </div>
      <Footer />
    </div>
  );
}
