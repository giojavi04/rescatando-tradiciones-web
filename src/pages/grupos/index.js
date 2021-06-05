import * as React from "react"
import { graphql } from 'gatsby'

import Seo from '../../components/global/Seo'
import HeaderPage from '../../components/global/HeaderPage'
import Content from '../../components/groups/content'

// markup
const GroupsPage = ({ data }) => {
  const { frontmatter } = data.static
  const groups = data.groups.edges

  return (
    <>
      <Seo title={frontmatter.groupsTitle} />
      <HeaderPage image={frontmatter.groupsImageHeader.childImageSharp.gatsbyImageData} title={frontmatter.groupsTitle} description={frontmatter.groupsSubHeader} />
      <Content data={frontmatter.groupsDescription} groups={groups} />
    </>
  )
}

export const pageQuery = graphql`
  query {
    static: markdownRemark(frontmatter: {groupsTitle: {eq: "Grupos"}}) {
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
    groups: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "group-page"}}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            groupLogo {
              childImageSharp {
                gatsbyImageData(quality: 100, width: 240, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`

export default GroupsPage
