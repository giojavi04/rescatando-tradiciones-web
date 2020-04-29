import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import Image from '../Image'

const Header = ({ siteTitle }) => (
  <header className="w-full z-30 top-0">
    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 lg:pt-10">
      <div className="pl-4 flex items-center my-2">
        <Link
          className="w-10 lg:w-40 lg:mr-6"
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

      <div className="w-full flex-col lg:w-auto lg:flex lg:flex-auto lg:items-center px-2 py-4 lg:py-0">
        <nav className="w-full bg-gray-900 hidden z-20 lg:bg-transparent lg:flex lg:items-center lg:-mb-5" id="nav-content">
          <ul className="text-white lg:text-rt-secondary list-reset lg:flex justify-end flex-1 items-center">
            <li>
              <a className="inline-block w-full py-6 px-4 lg:py-2" href="#">Nosotros</a>
            </li>
            <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
            <li>
              <a className="inline-block w-full py-6 px-4 lg:py-2" href="#">Grupos</a>
            </li>
            <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
            <li>
              <a className="inline-block w-full py-6 px-4 lg:py-2" href="#">Eventos</a>
            </li>
            <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
            <li>
              <a className="inline-block w-full py-6 px-4 lg:py-2" href="#">Contacto</a>
            </li>
          </ul>
        </nav>
        <div className="w-full">
          <div className="flex items-center">
            <h5 className="flex-initial mr-2 italic font-light text-xl md:text-2xl">Colectivo</h5>
            <hr className="flex-auto border-b border-rt-primary my-0 py-0" />
          </div>
          <div className="text-center mb-4 mt-1">
            <h2 className="text-rt-primary font-black text-3xl md:text-5xl lg:text-6xl">{siteTitle}</h2>
          </div>
          <hr className="border-rt-primary my-0 py-0" />
          <div className="text-right my-4">
            <h4 className="text-rt-secondary italic font-light text-2xl md:text-3xl pr-2">Confraternidad y Tradición</h4>
          </div>
          <hr className="border-rt-primary my-0 py-0" />
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
