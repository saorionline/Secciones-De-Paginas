import Features from '../components/B-Features.js';
import CallToAction from '../components/C-Call-to-action.js';
import Newsletter from '../components/D-Newsletter.js';
import Stats from '../components/E-Stats.js';
import Testimonials from '../components/F-Testimonials.js';
import Blog from '../components/G-Blog.js';
import Contact from '../components/H-Contact.js';
import Team from '../components/I-Team.js';
import Content from '../components/J-Content.js';
import Logo from '../components/K-Logo.js';

export default function Home() {
  return (
    <main >
        <Features />
        <CallToAction />
        <Newsletter />
        <Stats/>
        <Testimonials />
        <Blog/>
        <Contact />
        <Team/>
        <Content/>
        <Logo/>
     <h1 className="centered">@Bogota, Colombia. Saori</h1>
    </main>
  )
}

