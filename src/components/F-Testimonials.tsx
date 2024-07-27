import Image from 'next/image'

interface TestimonialsProps {
  image1: string
  image2: string
  alt: string
  className1: string
  className2: string
  width: number
  height: number
  doctor: Doctor
  specialization: Specialty
}
export enum Doctor {
  JudithBlack = 'Dra. Judith Black',
  JohnDoe = 'Dr. John Doe',
}
export enum Specialty {
  Oncologist = 'Médico Oncólogo',
  Psycologist = 'Médica Psicóloga',
}

export default function Testimonials({ 
  image1, 
  image2, 
  alt, 
  className1, 
  className2, 
  width, 
  height,
  doctor,
  specialization,
}: TestimonialsProps) {
    return (
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <Image       
          alt={alt}
          src={image1}
          className={className1} 
          width= {width}
          height= {height}
          />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                “Hola!
                Gracias por preguntarnos sobre el sueño. Los cambios en la dieta y el estilo de vida pueden mejorar significativamente la calidad del sueño. 
                ¿Podrías decirme más sobre tu rutina?”

              </p>
            </blockquote>
            <figcaption className="mt-10">
              <Image
                alt={alt}
                src={image2}
                className={className2}
                width= {width}
                height= {height}
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">{doctor}</div>
                <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <div className="text-gray-600">{specialization}</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    )
  }
  
