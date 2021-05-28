import * as React from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import { Transition } from '@headlessui/react'

// markup
const HeaderPage = ({ image, title, description }) => {
  return (
    <div className="relative bg-rtSecondary lg:overflow-hidden">
      <div className="absolute inset-0">
        <GatsbyImage
          className="w-full h-full object-cover"
          image={image}
          alt={title}
        />
        <div className="absolute inset-0 bg-gray-500" style={{ mixBlendMode: 'multiply' }} aria-hidden="true" />
      </div>
      <Transition
        appear={true}
        show={true}
      >
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <Transition.Child
            enter="transition-opacity ease-linear duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
          </Transition.Child>
          <Transition.Child
            enter="transition ease-linear duration-800 transform"
            enterFrom="translate-y-8"
            enterTo="translate-y-0"
            leave="transition ease-linear duration-300 transform"
            leaveFrom="translate-y-0"
            leaveTo="translate-y-8"
          >
            <p className="mt-6 text-xl text-gray-50 max-w-3xl">
              {description}
            </p>
          </Transition.Child>
        </div>
      </Transition>
    </div>
  )
}

export default HeaderPage
