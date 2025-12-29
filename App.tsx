import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ServicesShowcase } from "./components/ServicesShowcase";
import { Expertise } from "./components/Expertise";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { PrivateClients } from "./components/PrivateClients";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'private-clients'>('home');

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onNavigate={setCurrentPage} />
            <ServicesShowcase onNavigate={setCurrentPage} />
            <Expertise />
            <About />
            <Contact />
          </>
        ) : (
          <PrivateClients />
        )}
      </main>
      <Footer />
    </div>
  );
}