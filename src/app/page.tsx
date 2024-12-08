import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <div className="home-container"> {/* Added a className for styling */}
      <Navbar /> 
      <main> {/* Added semantic main tag for better structure */}
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
