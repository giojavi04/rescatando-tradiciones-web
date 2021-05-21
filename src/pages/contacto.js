import * as React from "react"
import { graphql } from 'gatsby'

import Seo from '../components/global/Seo'
import HeaderPage from '../components/global/HeaderPage'
import Content from '../components/contact/content'
import Info from '../components/contact/info'

// markup
const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <>
      <Seo title={frontmatter.contactTitle} />
      <HeaderPage imgSrc={frontmatter.contactImageHeader.childImageSharp.fluid.src} title={frontmatter.contactTitle} description={frontmatter.contactSubHeader} />
      <Content data={frontmatter} />
      <Info data={frontmatter.contactAdditionalInfo} />
    </>
  )
}

export const pageQuery = graphql`
  query ContactPageTemplate {
    markdownRemark(frontmatter: { contactTitle: { eq: "Contacto" }}) {
      frontmatter {
        contactTitle
        contactSubHeader
        contactImageHeader {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        contactDescription
        contactContentForm
        contactPhone
        contactMail
        contactAdditionalInfo {
          title
          description
          item {
            name
            description
          }
        }
      }
    }
  }
`

export default ContactPage
