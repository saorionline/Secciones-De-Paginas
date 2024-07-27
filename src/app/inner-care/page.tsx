import MobileMenu from '../../components/A-MobileMenu'
import Blog from '../../components/G-Blog';
import Newsletter from '../../components/D-Newsletter.js';
import Stats from '../../components/E-Stats.js';
import Testimonials from '../../components/F-Testimonials';


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
      date: 'Juli 22, 2024',
      datetime: '2024-07-22',
      category: { title: 'Medicina Ginecológica', href: '#' },
      author: {
        name: 'Mila Daza',
        role: 'Médica Ginecóloga',
        href: '#',
        imageUrl: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=300',
        }
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
          name: 'Mila Daza',
          role: 'Médica Ginecóloga',
          href: '#',
          imageUrl:
            'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=300',
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
          imageUrl:
            'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=300',
        },
      },
  ]}
      
      />
        <Newsletter />
        <Stats/>
        <Testimonials 
        alt="Testimonial" 
        image1="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" 
        image2= "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className1="mx-auto w-auto h-12"
        className2 ="mx-auto h-10 w-10 rounded-full"
        width = { 120 }
        height = { 80 } 
        />


     <h1 className="centered">@Bogota, Colombia. Saori</h1>
    </main>
  )
}
