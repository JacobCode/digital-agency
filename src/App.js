import React from 'react';

// Landing Page Sections
import Intro from './components/intro';
import WhoWeAre from './components/who-we-are';
import HeroMessage from './components/hero-message';
import WhatWeDo from './components/what-we-do';
import HeroStats from './components/hero-stats';
import HowWeWork from './components/how-we-work';
import HeroImage from './components/hero-image';
import Partners from './components/partners';
import ContactForm from './components/contact-form';
import Footer from './components/footer';

export default function App() {
  return (
    <div className="App">
      <Intro />
      <WhoWeAre />
      <HeroMessage />
      <WhatWeDo />
      <HeroStats />
      <HowWeWork />
      <HeroImage />
      <Partners />
      <ContactForm />
      <Footer />
    </div>
  )
}