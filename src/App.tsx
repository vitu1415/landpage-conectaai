import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ProblemSection from './components/ProblemSection/ProblemSection';
import SolutionSection from './components/SolutionSection/SolutionSection';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Features from './components/Features/Features';
import EcoSystem from './components/EcoSystem/EcoSystem';
import ForOrganizers from './components/ForOrganizers/ForOrganizers';
import CTA from './components/CTA/CTA';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import AdminPage from './pages/AdminPage';

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <Features />
      <EcoSystem />
      <ForOrganizers />
      <CTA />
      <FAQ />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home/" element={<LandingPage />} />
        <Route path="home/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}