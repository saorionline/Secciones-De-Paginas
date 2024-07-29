import MobileMenu from '../components/A-MobileMenu';
import Hero from '../components/Ab-Hero';
import Features from '../components/B-Features';
import CallToAction from '../components/C-Call-to-action';
import Newsletter from '../components/D-Newsletter';
import Logo from '../components/K-Logo';
import type { NextPage } from 'next';
import React from 'react';

interface HomeProps {
  title: string;
  image: string;
}

export default function Home (){
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
        <CallToAction 
          alt="App screenshot"
          imageSrc="https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg"
          width={1824}
          height={1080}
          className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
        />
        <Newsletter />

        <Logo/>
    </main>
  )
}

