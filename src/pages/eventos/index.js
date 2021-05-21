import * as React from "react"
import { graphql } from 'gatsby'

import Seo from '../../components/global/Seo'
import HeaderPage from '../../components/global/HeaderPage'
import Content from '../../components/events/content'

// markup
const EventsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <>
      <Seo title={frontmatter.eventsTitle} />
      <HeaderPage imgSrc={frontmatter.eventsImageHeader.childImageSharp.fluid.src} title={frontmatter.eventsTitle} description={frontmatter.eventsSubHeader} />
      <Content data={frontmatter.eventsDescription} />
    </>
  )
}

export const pageQuery = graphql`
  query EventosPageTemplate {
    markdownRemark(frontmatter: {eventsTitle: {eq: "Eventos"}}) {
      frontmatter {
        eventsTitle
        eventsImageHeader {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        eventsSubHeader
        eventsDescription
      }
    }
  }
`

export default EventsPage
