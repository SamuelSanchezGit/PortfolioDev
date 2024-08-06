import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import Bio from './components/Bio';
import Skills from './components/Skills';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onSectionChange={handleSectionChange} />
      <main className="flex-grow">
        {currentSection === 'home' && <Home />}
        {currentSection === 'bio' && <Bio />}
        {currentSection === 'skills' && <Skills />}
        {currentSection === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
