import * as React from "react"
import { Helmet } from "react-helmet"

import HeaderPage from '../components/global/HeaderPage'

import headerImg from '../images/nosotros/about-header.png'

// markup
const AboutPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rescatando Tradiciones | Nosotros</title>
      </Helmet>
      <HeaderPage imgSrc={headerImg} title="Nosotros" description="Somos la escencia de la tradición" />
    </>
  )
}

export default AboutPage
