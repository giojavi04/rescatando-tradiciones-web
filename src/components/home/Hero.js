import React from "react"
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Transition } from '@headlessui/react'

import ContentHTML from '../global/ContentHTML'
import { ChevronRightIcon } from '@heroicons/react/solid'

// markup
const Hero = ({ data }) => {
  return (
    <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <Transition
          appear={true}
          show={true}
        >
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <Transition.Child
              enter="transition ease-linear duration-800 transform"
              enterFrom="-translate-x-8"
              enterTo="translate-x-0"
              leave="transition ease-linear duration-300 transform"
              leaveFrom="-translate-x-0"
              leaveTo="translate-x-8"
            >
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">
                  <Link
                    to="/nosotros"
                    className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                  >
                    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-rtSecondary rounded-full">
                      ¿Te gusta la cultura?
                </span>
                    <span className="ml-4 text-sm">Conócenos.</span>
                    <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                  </Link>
                  <ContentHTML content={data.description} />
                  <div className="mt-10 sm:mt-12">
                    <form className="sm:max-w-xl sm:mx-auto lg:mx-0" data-netlify="true" name="infoHome" method="post" onSubmit="submit">
                      <input type="hidden" name="form-name" value="infoHome" />
                      <div className="sm:flex">
                        <div className="min-w-0 flex-1">
                          <label htmlFor="email" className="sr-only">
                            Email
                              </label>
                          <input
                            id="email"
                            type="email"
                            name='email'
                            placeholder="Ingresa tu email"
                            className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                          />
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <button
                            type="submit"
                            className="block w-full py-3 px-4 rounded-md shadow bg-black text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                          >
                            Solicita información
                              </button>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                        ¿Deseas conocer más acerca de nuestro colectivo?. Ingresa tu email, y nos comunicaremos contigo.
                          </p>
                    </form>
                  </div>
                </div>
              </div>
            </Transition.Child>
            <Transition.Child
              enter="transition ease-linear duration-800 transform"
              enterFrom="translate-x-8"
              enterTo="translate-x-0"
              leave="transition ease-linear duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-8"
            >
              <div className="m-0 lg:relative">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  <GatsbyImage
                    className="w-full"
                    image={data.image.childImageSharp.gatsbyImageData}
                    alt="Rescatando Tradiciones"
                  />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Transition>
      </div>
    </div>
  )
}

export default Hero
