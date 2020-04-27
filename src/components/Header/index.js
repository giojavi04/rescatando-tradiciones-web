import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from '../Image'

const Header = ({ siteTitle }) => (
  <header className="fixed w-full z-30 top-0 text-white">
    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
      <h1 className="font-body">
        <Link
          to="/"
        >
          <Image nameImage="logo-rescatando-tradiciones.png" alt="Rescatando tradiciones" className="w-1" />
          {siteTitle}
        </Link>
      </h1>
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
