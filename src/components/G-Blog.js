const posts = [
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
  ]
  
  export default function Blog() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Salud de la mujer y la IA</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            Google está a la vanguardia de esta transformación, desarrollando herramientas de IA para mejorar el diagnóstico del estado de la salud.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  