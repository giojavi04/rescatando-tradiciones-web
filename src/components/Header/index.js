import { Link } from "gatsby"
import React from "react"
import Image from '../Image'

const Header = () => (
  <header className="w-full z-30 top-0 text-white">
    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
      <div className="pl-4 flex items-center">
        <Link
          className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          to="/"
        >
          <Image nameImage="logo-rescatando-tradiciones.png" alt="Rescatando tradiciones" />
        </Link>
      </div>

      <div className="block lg:hidden pr-4">
        <button id="nav-toggle" className="flex items-center p-1 text-orange-800 hover:text-gray-900">
          <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>

      <div className="w-full lg:flex lg:items-center lg:w-auto z-20" id="nav-content">
        <ul className="list-reset lg:flex justify-end flex-1 items-center">
          <li className="mr-3">
            <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Active</a>
          </li>
          <li className="mr-3">
            <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">link</a>
          </li>
          <li className="mr-3">
            <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">link</a>
          </li>
        </ul>
        <button id="navAction" className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75">Action</button>
      </div>
    </div>
  </header>
)

export default Header
