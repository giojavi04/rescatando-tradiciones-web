import * as React from "react"
import { Helmet } from "react-helmet"

import '../styles/global.css';
import NavBar from '../components/global/NavBar'
import Footer from '../components/global/Footer'

// markup
const Layout = ({ children }) => (
  <>
    <Helmet>
      <html lang="es" />
      <link rel="canonical" href="http://rescatandotradiciones.org" />
    </Helmet>
    <div className="bg-white" >
      <div className="relative overflow-hidden">
        <NavBar />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  </>
)

export default Layout
