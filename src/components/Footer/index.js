import React from 'react'
import { Link } from 'gatsby'
import Image from '../Image'

const Footer = () => (
  <footer className="footerRT border-b py-8">
    <div className="container mx-auto flex flex-wrap pt-4 pb-12">
      <div className="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
        <Link
          className="w-10 lg:w-40 lg:mr-6"
          to="/"
        >
          <Image nameImage="logo-rescatando-tradiciones.png" alt="Rescatando tradiciones" />
        </Link>
      </div>

      <div className="w-full md:w-3/4 p-6 flex flex-col flex-grow flex-shrink">
        test
      </div>

    </div>

  </footer>
)

export default Footer
