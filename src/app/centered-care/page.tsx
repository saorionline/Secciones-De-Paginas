import MobileMenu from '../../components/A-MobileMenu'

import Content from '../../components/J-Content';

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
        <Content/>
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
