import * as React from "react"
import { graphql } from 'gatsby'

import Seo from '../../components/global/Seo'
import HeaderPage from '../../components/global/HeaderPage'
import Content from '../../components/groups/content'

// markup
const GroupsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <>
      <Seo title={frontmatter.groupsTitle} />
      <HeaderPage imgSrc={frontmatter.groupsImageHeader.childImageSharp.fluid.src} title={frontmatter.groupsTitle} description={frontmatter.groupsSubHeader} />
      <Content data={frontmatter.groupsDescription} />
    </>
  )
}

export const pageQuery = graphql`
  query GruposPageTemplate {
    markdownRemark(frontmatter: {groupsTitle: {eq: "Grupos"}}) {
      frontmatter {
        groupsTitle
        groupsImageHeader {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        groupsSubHeader
        groupsDescription
      }
    }
  }
`

export default GroupsPage
