import * as React from "react"
import { graphql } from 'gatsby'

import Seo from '../components/global/Seo'
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Events from '../components/home/Events';
import Testimonial from '../components/home/Testimonial';
import Blog from '../components/home/Blog';
import Cta from '../components/home/CTA';

// markup
const IndexPage = ({ data }) => {
  const { frontmatter } = data.home
  const groupsData = data.groups.edges
  const eventsData = data.events.edges

  return (
    <>
      <Seo title="Home" />
      <Hero data={frontmatter.homeHero} />
      <About data={frontmatter.homeIntro} groups={groupsData} />
      <Events data={frontmatter.homeEvents} events={eventsData} />
      <Testimonial data={frontmatter.homeTestimonial} />
      <Blog data={frontmatter.homePosts} />
      <Cta data={frontmatter.homeCta} />
    </>
  )
}

export const pageQuery = graphql`
  query {
    home: markdownRemark(frontmatter: { homeTitle: { eq: "Home" }}) {
      frontmatter {
        homeTitle
        homeHero {
          description
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
        }
        homeIntro {
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
          phrase
          author
          description
        }
        homeEvents {
          title
          description
        }
        homeTestimonial {
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
          phrase
          author
          charge
        }
        homePosts {
          title
          description
        }
        homeCta {
          title
          description
        }
      }
    }
    groups: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "group-page"}}}) {
      edges {
        node {
          frontmatter {
            groupType
          }
        }
      }
    }
    events: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "event-page"}}}) {
      edges {
        node {
          frontmatter {
            title
            eventDescription
          }
        }
      }
    }
  }
`

export default IndexPage
