import * as React from "react"
import { Helmet } from "react-helmet"

import HeaderPage from '../components/global/HeaderPage'
import Content from '../components/contact/content'
import Info from '../components/contact/info'

import contactImg from '../images/contacto/contact-header.png'

// markup
const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contacto</title>
      </Helmet>
      <HeaderPage imgSrc={contactImg} title="Contacto" description="Si deseas conocer más sobre nosotros, llena el formulario." />
      <Content />
      <Info />
    </>
  )
}

export default ContactPage
