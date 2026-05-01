import Header from "../components/Header";
import Footer from "../components/Footer";
import Typography from "@mui/material/Typography";

export default function AboutUs() {
  return (
    <div>
      <Header />
      <div style={{ flex: 1, padding: "2%" }}>
        <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
          Our Story
        </Typography>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Humble Beginnings
        </Typography>
        <Typography>
          What began as simple projects for our own yard—alongside the lively
          dogs that fill our home- soon grew into a passion we are proud to
          share with others. From Wood to Wow was built on the idea of
          transforming raw materials into unique, handcrafted pieces for the
          home and garden. Our work is inspired by love, care, and the simple
          moments that make life meaningful. Each creation reflects our
          commitment to quality and our belief that beauty belongs if everyday
          spaces.
        </Typography>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Eco-Friendly Mission
        </Typography>
        <Typography>
          We care about the impact our products have on the environment, which
          is why we use only wood sourced from Lowe's— a company that follows a
          responsible wood sourcing policy with certified and traceable supply
          chains.
        </Typography>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Giving Back Goals
        </Typography>
        <Typography>
          Giving back to our community is at the heart of what we do. Each year,
          we proudly donate one of our handcrafted pieces—like a wooden
          bridge—to our local school's auction. As we grow, we look forward to
          expanding our efforts to support local gardens, animal welfare, and
          community projects that share our passion for nature, craftsmanship,
          and care.
        </Typography>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Company Mascot
        </Typography>
        <div>Insert pic of Lilo</div>
      </div>
      <Footer />
    </div>
  );
}
