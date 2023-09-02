import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Work from '../components/Work'
import Footer from '../components/Footer'
import TechStack from '../components/TechStack'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <TechStack/>
      <Work/>
      <Footer/>
    </div>
  );
};

export default Home;