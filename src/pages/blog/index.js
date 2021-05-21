import * as React from "react"
import { graphql } from 'gatsby'

import Seo from '../../components/global/Seo'
import HeaderPage from '../../components/global/HeaderPage'
import Content from '../../components/blog/content'

// markup
const BlogPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <>
      <Seo title={frontmatter.blogTitle} />
      <HeaderPage imgSrc={frontmatter.blogImageHeader.childImageSharp.fluid.src} title={frontmatter.blogTitle} description={frontmatter.blogSubHeader} />
      <Content data={frontmatter.blogDescription} />
    </>
  )
}

export const pageQuery = graphql`
  query BlogPageTemplate {
    markdownRemark(frontmatter: {blogTitle: {eq: "Blog"}}) {
      frontmatter {
        blogTitle
        blogImageHeader {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        blogSubHeader
        blogDescription
      }
    }
  }
`

export default BlogPage
