import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Stats from '@/components/Stats';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import Waitlist from '@/components/Waitlist';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

// Cada seccion vive en su propio archivo. Los puntos de extension de las 4
// features (BackToTop, Stats, Waitlist) ya estan montados aqui: no hace falta
// editar este archivo para implementarlas.
export default function Home() {
  return (
    <main id="top">
      <Hero />
      <Features />
      <Stats />
      <Pricing />
      <Testimonials />
      <Faq />
      <Waitlist />
      <Footer />
      <BackToTop />
    </main>
  );
}
