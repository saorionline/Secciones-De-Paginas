import MobileMenu from '../components/A-MobileMenu.tsx';
import Hero from '../components/Ab-Hero.js';
import Features from '../components/B-Features.js';
import CallToAction from '../components/C-Call-to-action.js';
import Newsletter from '../components/D-Newsletter.js';
import Logo from '../components/K-Logo.js';

export default function Home() {
  return (
    <main >
      <MobileMenu/>
        <Hero/>
        <Features />
        <CallToAction />
        <Newsletter />

        <Logo/>
     <h1 className="centered">@Bogota, Colombia. Saori</h1>
    </main>
  )
}

