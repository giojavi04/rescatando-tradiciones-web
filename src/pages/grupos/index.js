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
      <HeaderPage image={frontmatter.groupsImageHeader.childImageSharp.gatsbyImageData} title={frontmatter.groupsTitle} description={frontmatter.groupsSubHeader} />
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
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        groupsSubHeader
        groupsDescription
      }
    }
  }
`

export default GroupsPage
