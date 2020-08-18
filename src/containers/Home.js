import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Categories from '../components/Categories';
import Cta from '../components/Cta';
import Histories from '../components/Histories';
import Contact from '../components/Contact';
import Info from '../components/Info';
import Whatsapp from '../components/Whatsapp';

class Home extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Hero />
        <Benefits />
        <Whatsapp />
        <Categories />
        <Cta />
        <Histories />
        <Contact />
        <Info />
      </div>
    )
  }
}

export default Home;