import MobileMenu from '../components/A-MobileMenu';
import Hero from '../components/Ab-Hero.js';
import Features from '../components/B-Features.js';
import CallToAction from '../components/C-Call-to-action.js';
import Newsletter from '../components/D-Newsletter.js';
import Logo from '../components/K-Logo.js';
import type { NextPage } from 'next';
import React from 'react';
import Image from 'react-image';

interface HomeProps {
  title: string;
  image: string;
}

const HomeMe: NextPage<HomeProps> = ({title}) => {
  return (
    <main >
      <MobileMenu 
        imageSrc="/bear.png"
        alt="Bear Logo"
        width = { 80 }
        height = { 80 }
        />
        <Hero/>
        <Features />
        <CallToAction />
        <Newsletter />

        <Logo/>
     <h1 className="centered">@Bogota, Colombia. Saori {title}</h1>
    </main>
  )
}
export default HomeMe
