import styles from './page.module.css'
import Features from '../components/Features.js';
import CallToAction from '../components/Call-to-action.js';
import Newsletter from '../components/Newsletter.js';
import Stats from '../components/Stats.js';
import Testimonials from '../components/Testimonials.js';
import Blog from '../components/Blog.js';
import Contact from '../components/Contact.js';
import Team from '../components/Team.js';
import Content from '../components/Content.js';
import Logo from '../components/Logo.js';

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

