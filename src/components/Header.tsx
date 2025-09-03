import { useState } from 'react'
import Button from '@components/Button'
import HamburguerIcon from '@icons/hamburguer.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <header className="w-[90%] max-w-[1200px] mx-auto">
      <div className="h-20 md:h-32 flex items-center justify-between gap-6">
        <a href="/" aria-label="Vuelve a nuestra página principal aquí">
          <p className="text-2xl md:text-4xl font-semibold">Keratech</p>
        </a>
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-10">
            <li>
              <a
                href="/#services"
                className="cursor-pointer hover:underline"
                arial-label="Mira nuestros servicios aquí"
              >
                <span className="cursor-pointer">Servicios</span>
              </a>
            </li>
            <li>
              <a
                href="/#products"
                className="cursor-pointer hover:underline"
                arial-label="Mira nuestros productos aquí"
              >
                <span className="cursor-pointer">Productos</span>
              </a>
            </li>
            <li>
              <a
                href="/#about"
                className="cursor-pointer hover:underline"
                arial-label="Mira más acerca de nosotros aquí"
              >
                <span className="cursor-pointer">Nosotros</span>
              </a>
            </li>
            <li>
              <a href="/#contact" arial-label="Contáctanos aquí">
                <Button text="Contáctanos" variant="outline" />
              </a>
            </li>
          </ul>
        </nav>
        <div
          className="block lg:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img
            src={HamburguerIcon.src}
            width={24}
            height={16}
            alt="Menú de Keratech"
          />
        </div>
      </div>
      <div
        className={`h-screen w-screen left-0 top-0 transition-all ease-in-out duration-300 ${isMenuOpen ? 'opacity-75 bg-black fixed' : '-z-10 opacity-0 bg-transparent bg-opacity-0 hidden'}`}
      ></div>
      <div
        className={`fixed top-0 left-0 w-full h-full ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-all ease-in-out duration-300 transform`}
        onClick={() => setIsMenuOpen(false)}
      >
        <nav className="absolute top-0 right-0 w-3/4 h-full bg-white shadow-lg flex flex-col items-center gap-6 py-6">
          <ul className="w-full flex flex-col items-center gap-4 text-lg">
            <li className="w-full h-12 flex items-center justify-center">
              <a
                href="/#services"
                className="h-full w-full flex items-center justify-center"
                arial-label="Mira nuestros servicios aquí"
              >
                <span className="cursor-pointer">Servicios</span>
              </a>
            </li>
            <li className="w-full h-12 flex items-center justify-center">
              <a
                href="/#products"
                className="h-full w-full flex items-center justify-center"
                arial-label="Mira nuestros productos aquí"
              >
                <span className="cursor-pointer">Productos</span>
              </a>
            </li>
            <li className="w-full h-12 flex items-center justify-center">
              <a
                href="/#about"
                className="h-full w-full flex items-center justify-center"
                arial-label="Mira más acerca de nosotros aquí"
              >
                <span className="cursor-pointer">Nosotros</span>
              </a>
            </li>
            <li className="w-full h-12 flex items-center justify-center">
              <a
                href="/#contact"
                className="h-full w-full flex items-center justify-center"
                arial-label="Contáctanos aquí"
              >
                <span className="cursor-pointer">Contáctanos</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
