import MobileMenu from '../../components/A-MobileMenu'
import Team from '../../components/I-Team';
import Content from '../../components/J-Content';
import Hero from '../../components/Ab-Hero';

export default function HealthBalance() {
  return (
    <main >
      <MobileMenu
              imageSrc="/bear.png"
              alt="Bear Logo"
              width = { 80 }
              height = { 80 }/>
      <Hero/>
      <Content/>
        <Team/>
        


     <h1 className="centered">@Bogota, Colombia. Saori</h1>
    </main>
  )
}
