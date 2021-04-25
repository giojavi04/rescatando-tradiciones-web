import * as React from "react"

const offices = [
  { id: 1, city: 'Quito', address: ['4556 Brendan Ferry', 'Los Angeles, CA 90210'] },
  { id: 2, city: 'Guayaquil', address: ['886 Walter Streets', 'New York, NY 12345'] },
  { id: 3, city: 'Ambato', address: ['7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'] },
  { id: 4, city: 'Cuenca', address: ['114 Cobble Lane', 'London N1 2EF'] },
]

// markup
const Info = () => {
  return (
    <section aria-labelledby="officesHeading">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h2 id="officesHeading" className="text-3xl font-extrabold text-warm-gray-900">
          Información adicional
            </h2>
        <p className="mt-6 text-lg text-warm-gray-500 max-w-3xl">
          Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus
          dui laoreet diam sed lacus, fames.
            </p>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((office) => (
            <div key={office.id}>
              <h3 className="text-lg font-medium text-warm-gray-900">{office.city}</h3>
              <p className="mt-2 text-base text-warm-gray-500">
                {office.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Info
