'use client'
import  React, { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface NavigationItem {
    name: string;
    href: string;
  }

interface MobileMenuProps {
    imageSrc: string;
    alt: string;
    width: number;
    height: number;
}
  

const navigation: NavigationItem[] = [
  { name: 'Medicina Interna', href: '/inner-care' },
  { name: 'Atención Centrada', href: '/centered-care' },
  { name: 'Bienestar Esencial', href: '/essential-wellbeing' },
  { name: 'Armonía de la Salud', href: '/health-balance' },
];

function renderNavigationItem ( item: NavigationItem ): JSX.Element {
  return(
    <a key= {item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
      (item.name)
    </a>
  )
}

const MobileMenu: React.FC<MobileMenuProps> = ({ imageSrc, alt, width, height }) => {  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (

    <div className="bg-white">
      <header className="relative inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            {mobileMenuOpen && (
              <ul>
                {navigation.map((item) => renderNavigationItem(item))}
              </ul>
            )}
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Salud Interior</span>
              <Image
                alt={alt}
                src={imageSrc}
                width= {width}
                height= {height}
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
   
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Iniciar Sesión <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Salud Interior</span>
                <Image
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Cerrar</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Iniciar
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  )
}
export default MobileMenu;