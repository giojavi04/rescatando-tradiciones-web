import * as React from "react"
import { graphql } from 'gatsby'

import Seo from '../components/global/Seo'
import HeaderPage from '../components/global/HeaderPage'
import Content from '../components/about/content'
import Team from '../components/about/team'

// markup
const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <>
      <Seo title={frontmatter.aboutTitle} />
      <HeaderPage image={frontmatter.aboutImageHeader.childImageSharp.gatsbyImageData} title={frontmatter.aboutTitle} description={frontmatter.aboutSubHeader} />
      <Content data={frontmatter} />
      <Team data={frontmatter.aboutTeam} />
    </>
  )
}

export const pageQuery = graphql`
  query NosotrosPageTemplate {
    markdownRemark(frontmatter: { aboutTitle: { eq: "Nosotros" }}) {
      frontmatter {
        aboutTitle
        aboutImageHeader {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        aboutSubHeader
        aboutDescription
        aboutImageContent {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        aboutImageDescription
        aboutTeam {
          title
          description
          team {
            name
            role
            twitterUrl
            linkedinUrl
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`

export default AboutPage
