import * as React from "react"

// markup
const HeaderPage = ({ imgSrc, title, description }) => {
  return (
    <div className="relative bg-rtSecondary">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={imgSrc}
          alt=""
        />
        <div className="absolute inset-0 bg-gray-400" style={{ mixBlendMode: 'multiply' }} aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 text-xl text-gray-50 max-w-3xl">
          {description}
        </p>
      </div>
    </div>
  )
}

export default HeaderPage
