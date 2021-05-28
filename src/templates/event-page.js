import * as React from "react"
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Seo from '../components/global/Seo'
import HeaderPage from '../components/global/HeaderPage'
import EventPost from '../components/global/EventPost'

const EventTemplate = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <>
      <Seo title={post.frontmatter.title} description={post.frontmatter.eventResume} />
      <HeaderPage image={post.frontmatter.eventImageHeader.childImageSharp.gatsbyImageData} title={post.frontmatter.title} description={post.frontmatter.eventSubHeader} />
      <EventPost title={post.frontmatter.title} logo={post.frontmatter.eventLogoEvent.childImageSharp.gatsbyImageData} content={post.html} />
    </>
  )
}

EventTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export const pageQuery = graphql`
  query EventPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        eventImageHeader {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        title
        eventSubHeader
        eventLogoEvent {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        eventResume
        eventDescription
      }
    }
  }
`

export default EventTemplate
