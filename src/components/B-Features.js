import { BellIcon, EyeIcon, BuildingOffice2Icon, BoltIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Gramos & Corazón',
    description:
      'Diferentes enfoques para la pérdida de peso y la salud del corazón.',
    icon: BellIcon,
  },
  {
    name: 'Sinceramente: Dieta',
    description:
      'Analiza lo bueno y lo difícil de cada dieta, incluidos sus posibles riesgos y limitaciones.',
    icon: EyeIcon,
  },
  {
    name: 'Primero El Doc',
    description:
      'La importancia de consultar con un médico antes de iniciar cualquier nuevo plan dietético.',
    icon: BuildingOffice2Icon,
  },
  {
    name: 'Comidas Tendencia',
    description:
      'Explora dietas populares como el ayuno intermitente, las dietas cetogénicas (incluida la dieta carnívora) y las dietas paleo.',
    icon: BoltIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">@Muestra Portafolio, Secciones de Páginas</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Mente Desbloqueada: Salud Óptima
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Descubre tu propio camino hacia el más alto y óptimo estado de salud.
            Encuentra tu enfoque, para alcanzar esos objetivos que tu cuerpo necesita para sentirse mejor. 
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}