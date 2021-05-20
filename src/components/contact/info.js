import * as React from "react"

// markup
const Info = ({ data }) => {
  return (
    <section aria-labelledby="officesHeading">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h2 id="officesHeading" className="text-3xl font-extrabold text-warm-gray-900">
          {data.title}
        </h2>
        <p className="mt-6 text-lg text-warm-gray-500 max-w-3xl">
          {data.description}
        </p>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {data.item.map((item, i) => (
            <div key={i}>
              <h3 className="text-lg font-medium text-warm-gray-900">{item.name}</h3>
              <p className="mt-2 text-base text-warm-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Info
