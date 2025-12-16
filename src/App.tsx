import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Menu from './components/Menu';
import Certificates from './components/Certificates';
import WorkOrders from './components/WorkOrders';
import Testimonials from './components/Testimonials';
import Appreciations from './components/Appreciations';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Menu />
      <Certificates />
      <WorkOrders />
      <Testimonials />
      <Appreciations />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
