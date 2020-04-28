import { Link } from "gatsby"
import React from "react"
import Image from '../Image'

const Header = () => (
  <header className="w-full z-30 top-0">
    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0">
      <div className="pl-4 flex items-center my-2">
        <Link
          className="w-10"
          to="/"
        >
          <Image nameImage="logo-rescatando-tradiciones.png" alt="Rescatando tradiciones" />
        </Link>
      </div>

      <div className="block lg:hidden pr-4">
        <button id="nav-toggle" className="flex items-center p-1 text-rt-secondary">
          <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>

      <div className="w-full bg-gray-900 lg:bg-transparent lg:flex lg:items-center lg:w-auto z-20" id="nav-content">
        <ul className="text-white list-reset lg:flex justify-end flex-1 items-center">
          <li className="lg:mr-3">
            <a className="inline-block w-full py-6 px-4" href="#">Nosotros</a>
          </li>
          <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
          <li className="lg:mr-3">
            <a className="inline-block w-full py-6 px-4" href="#">Grupos</a>
          </li>
          <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
          <li className="lg:mr-3">
            <a className="inline-block w-full py-6 px-4" href="#">Eventos</a>
          </li>
          <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
          <li className="lg:mr-3">
            <a className="inline-block w-full py-6 px-4" href="#">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
)

export default Header
