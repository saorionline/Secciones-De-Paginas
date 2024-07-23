import MobileMenu from '../../components/A-MobileMenu.js'
import Blog from '../../components/G-Blog.js';
import Newsletter from '../../components/D-Newsletter.js';
import Stats from '../../components/E-Stats.js';
import Testimonials from '../../components/F-Testimonials.js';


export default function InnerCare() {
  return (
    <main >
      <MobileMenu/>
      <Blog/>
        <Newsletter />
        <Stats/>
        <Testimonials />


     <h1 className="centered">@Bogota, Colombia. Saori</h1>
    </main>
  )
}
