import MobileMenu from '../../components/A-MobileMenu'

import Content from '../../components/J-Content';

import Testimonials from '../../components/F-Testimonials';

export default function HealthBalance() {
  return (
    <main >
      <MobileMenu
              imageSrc="/bear.png"
              alt="Bear Logo"
              width = { 80 }
              height = { 80 }
      />
        <Content/>
        <Testimonials/>

     <h1 className="centered">@Bogota, Colombia. Saori</h1>
    </main>
  )
}
