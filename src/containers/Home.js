import React, { Component } from 'react';

import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Categories from '../components/Categories';
import Cta from '../components/Cta';
import Histories from '../components/Histories';
import Contact from '../components/Contact';

class Home extends Component {
  render () {
    return (
      <div>
        <Hero />
        <Benefits />
        <Categories />
        <Cta />
        <Histories />
        <Contact />
      </div>
    )
  }
}

export default Home;