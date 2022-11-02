import * as React from "react";
import { graphql } from "gatsby";

import Seo from "../components/global/Seo";
import HeaderPage from "../components/global/HeaderPage";
import Content from "../components/inscriptions/content";
import Team from "../components/about/team";

// markup
const InscriptionsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <>
      <Seo title={frontmatter.aboutTitle} />
      <HeaderPage
        image={frontmatter.aboutImageHeader.childImageSharp.gatsbyImageData}
        title={"Inscripciones"}
        description={"Inscribe a tu grupo para participar en nuestros eventos"}
      />
      <Content />
      <Team data={frontmatter.aboutTeam} />
    </>
  );
};

export const pageQuery = graphql`
  query InscriptionsPageTemplate {
    markdownRemark(frontmatter: { aboutTitle: { eq: "Nosotros" } }) {
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
`;

export default InscriptionsPage;
