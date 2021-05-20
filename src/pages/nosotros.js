import * as React from "react"
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby'

import HeaderPage from '../components/global/HeaderPage'
import Content from '../components/about/content'
import Team from '../components/about/team'

// markup
const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <>
      <Helmet>
        <title>{frontmatter.aboutTitle}</title>
      </Helmet>
      <HeaderPage imgSrc={frontmatter.aboutImageHeader.childImageSharp.fluid.src} title={frontmatter.aboutTitle} description={frontmatter.aboutSubHeader} />
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
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aboutSubHeader
      aboutDescription
      aboutImageContent {
        childImageSharp {
          fluid(maxWidth: 1285, quality: 100) {
            ...GatsbyImageSharpFluid
          }
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
              fluid(maxWidth: 1024, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`

export default AboutPage
