import { Hero } from './components/Hero';
import { About } from './components/About';
import { Guides } from './components/Guides';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Guides />
      <Pricing />
      <Contact />
    </div>
  );
}
