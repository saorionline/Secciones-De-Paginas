import MobileMenu from '../../components/A-MobileMenu'
import Team from '../../components/I-Team';
import Content, { ContentSection } from '../../components/J-Content';
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
      <Content
        contentImage = {{
          alt: "Blog about medical solutions",
          imageSrc: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0bHxlbnwwfHwwfHx8MA%3D%3D",
          width: 680,
          height: 882,
        }}
        section = { ContentSection.Second_Sect_Fisrt_Parr }
      />
        <Team/>
        


     <h1 className="centered">@Bogota, Colombia. Saori</h1>
    </main>
  )
}
