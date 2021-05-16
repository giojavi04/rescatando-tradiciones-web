import * as React from "react"
import { Helmet } from "react-helmet"

import '../styles/global.css';
import NavBar from '../components/global/NavBar'
import Footer from '../components/global/Footer'

// markup
const Layout = (props) => {
  return (
    <>
      <Helmet>
        <html lang="es" />
        <meta name="description" content="Somos una agrupación creada para el rescate de nuestras raíces, de nuestra cultura, vela por mantener la tradición de las Bandas de Guerra y grupos de Bastones quienes se desarrollaron con disciplina, respeto y amor a la patria."></meta>
        <link rel="canonical" href="http://rescatandotradiciones.org" />
      </Helmet>
      <div className="bg-white" >
        <div className="relative overflow-hidden">
          <NavBar />
          <main>
            {props.children}
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
