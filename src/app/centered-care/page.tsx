import MobileMenu from '../../components/A-MobileMenu'

import Content, { ContentSection } from '../../components/J-Content';

import Testimonials, { Doctor, Specialty  } from '../../components/F-Testimonials';

export default function HealthBalance() {
  return (
    <main >
      <MobileMenu
              imageSrc="/bear.png"
              alt="Bear Logo"
              width = { 80 }
              height = { 80 }
      />
        <Content
          contentImage = {{
            alt: "Blog about medical solutions",
            imageSrc: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0bHxlbnwwfHwwfHx8MA%3D%3D",
            width: 680,
            height: 882,
          }}
          section = { ContentSection.Second_Sect_Fisrt_Parr }
        />
        <Testimonials
        alt="Testimonial" 
        image1="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" 
        image2= "/assets/doctor1.png"
        className1="mx-auto w-auto h-12"
        className2 ="mx-auto h-10 w-10 rounded-full"
        width = { 120 }
        height = { 80 } 
        doctor={Doctor.JohnDoe}
        specialization={Specialty.Oncologist}
        />

     <h1 className="centered">@Bogota, Colombia. Saori</h1>
    </main>
  )
}
