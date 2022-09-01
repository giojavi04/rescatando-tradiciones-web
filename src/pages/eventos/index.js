import * as React from "react";
import { graphql } from "gatsby";

import Seo from "../../components/global/Seo";
import HeaderPage from "../../components/global/HeaderPage";
import Content from "../../components/events/content";

// markup
const EventsPage = ({ data }) => {
  const { frontmatter } = data.static;
  const events = data.events.edges;

  return (
    <>
      <Seo title={frontmatter.eventsTitle} />
      <HeaderPage
        image={frontmatter.eventsImageHeader.childImageSharp.gatsbyImageData}
        title={frontmatter.eventsTitle}
        description={frontmatter.eventsSubHeader}
      />
      <Content data={frontmatter.eventsDescription} events={events} />
    </>
  );
};

export const pageQuery = graphql`
  query {
    static: markdownRemark(frontmatter: { eventsTitle: { eq: "Eventos" } }) {
      frontmatter {
        eventsTitle
        eventsImageHeader {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        eventsSubHeader
        eventsDescription
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
            eventLogoEvent {
              childImageSharp {
                gatsbyImageData(quality: 100, width: 320, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`;

export default EventsPage;
