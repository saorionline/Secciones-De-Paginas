import MobileMenu from '../../components/A-MobileMenu'

import Contact from '../../components/H-Contact';
import Team from '../../components/I-Team';
import Content, {ContentSection} from '../../components/J-Content';


export default function HealthBalance() {
  return (
    <main >
      <MobileMenu
        imageSrc="/bear.png"
        alt="Bear Logo"
        width = { 80 }
        height = { 80 }
      />
      <Contact />
      <Team team_players = {[
          {
            name: 'Sergio',
            role: 'CEO',
            imageSrc: {
              imagePath: '/assets/team_player1.png',
              width: 80, 
              height: 80
            },
          },    
          {
            name: 'Maria',
            role: 'CTO',
            imageSrc: {
              imagePath: '/assets/team_player2.png',
              width: 80, 
              height: 80
            },
          }  
        ]}/>
        <Content 
          image= {{
            alt:"",
            imageSrc:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            width: 80,
            height: 80,
        }}
        section={ContentSection.First_Parr}
        />


     <h1 className="centered">@Bogota, Colombia. Saori</h1>
    </main>
  )
}
