import MobileMenu from '../../components/A-MobileMenu'
import Blog from '../../components/G-Blog';
import Newsletter from '../../components/D-Newsletter';
import Stats from '../../components/E-Stats';
import Testimonials, { Doctor, Specialty  } from '../../components/F-Testimonials';


export default function InnerCare() {
  return (
    <main >
      <MobileMenu
              imageSrc="/bear.png"
              alt="Bear Logo"
              width = { 80 }
              height = { 80 }
      />
      <Blog posts= {[
    {
      id: 1,
      title: 'IA para mejorar la asistencia médica',
      href: '#',
      description:
        'Herramientas de Google para diagnosticar debilidades y fortalezas en la salud. Provee herramientas de acceso global para informar a las pacientes sobre ciertos estados de la salud. Enfoque específico en la mujer y el papel de Google para mejorar con soluciones IA a la mano.',
      date: 'July 22, 2024',
      datetime: '2024-07-22',
      category: { title: 'Medicina Ginecológica', href: '#' },
      author: {
        name: 'Leo Torres',
        role: 'Médica Ginecóloga',
        href: '#',  
        imagePath: '/assets/writer3.png',
        alt: 'Writer',
        className: 'mx-auto rounded-full',  
        width: 50,
        height: 50,
      },
      },
    {
        id: 2,
        title: 'Priorizando la Ginecología y Obstetricia',
        href: '#',
        description:
          'Google Research y AI Innovation utilizan la tecnología y la innovación para potenciar la salud de las mujeres. La iniciativa de Google para mejorar el acceso y la calidad de la información. Impacto transformador de la IA en la atención sanitaria de las mujeres, especialmente en el acceso y la calidad.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Salud Femenina', href: '#' },
        author: {
          name: 'Manuela García',
          role: 'Médica Ginecóloga',
          href: '#',
        
          imagePath:'/assets/writer2.png',
          alt: 'Writer',
          className: 'mx-auto rounded-full',
          width: 50,
          height: 50,
        },
      },
      {
        id: 3,
        title: 'Agilizando la Atención Médica',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Salud Femenina', href: '#' },
        author: {
          name: 'Mila Daza',
          role: 'Médica Ginecóloga',
          href: '#',
          imagePath:'/assets/writer1.png',
         className: 'rounded-full',      
          width: 50,
          height: 50,
          alt: 'Writer',
          },
      },
  ]}
      
      />
        <Newsletter />
        <Stats/>
        <Testimonials 
        alt="Testimonial" 
        image1="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" 
        image2= "/assets/doctor2.png"
        className1="mx-auto w-auto h-12"
        className2 ="mx-auto h-10 w-10 rounded-full"
        width = { 120 }
        height = { 80 } 
        doctor={Doctor.JudithBlack}
        specialization={Specialty.Psycologist}
        />


     <h1 className="centered">@Bogota, Colombia. Saori</h1>
    </main>
  )
}
