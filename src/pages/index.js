import * as React from "react";
import { graphql } from "gatsby";

import Seo from "../components/global/Seo";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Events from "../components/home/Events";
import Testimonial from "../components/home/Testimonial";
import Blog from "../components/home/Blog";
import Cta from "../components/home/CTA";

// markup
const IndexPage = ({ data }) => {
  const { frontmatter } = data.home;
  const groupsData = data.groups.edges;
  const eventsData = data.events.edges;
  const postsData = data.posts.edges;

  return (
    <>
      <Seo title="Home" />
      <Hero data={frontmatter.homeHero} />
      <About data={frontmatter.homeIntro} groups={groupsData} />
      <Events data={frontmatter.homeEvents} events={eventsData} />
      <Testimonial data={frontmatter.homeTestimonial} />
      {postsData.length > 0 && (
        <Blog data={frontmatter.homePosts} posts={postsData} />
      )}
      <Cta data={frontmatter.homeCta} />
    </>
  );
};

export const pageQuery = graphql`
  query {
    home: markdownRemark(frontmatter: { homeTitle: { eq: "Home" } }) {
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
    groups: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "group-page" }
          groupActive: { eq: true }
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            groupType
          }
        }
      }
    }
    events: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "event-page" }
          eventActive: { eq: true }
        }
      }
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            eventResume
          }
        }
      }
    }
    posts: allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredimage {
              childImageSharp {
                gatsbyImageData(quality: 100, width: 500, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
