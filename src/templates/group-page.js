import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Seo from "../components/global/Seo";
import HeaderPage from "../components/global/HeaderPage";
import GroupPost from "../components/global/GroupPost";

const GroupTemplate = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.groupDescription}
      />
      <HeaderPage
        image={
          post.frontmatter.groupImageHeader.childImageSharp.gatsbyImageData
        }
        title={post.frontmatter.title}
        description={post.frontmatter.groupMotto}
      />
      <GroupPost
        title={post.frontmatter.title}
        logo={post.frontmatter.groupLogo.childImageSharp.gatsbyImageData}
        content={post.html}
        description={post.frontmatter.groupDescription}
        types={post.frontmatter.groupTypes}
        facebook={post.frontmatter.groupLinkFacebook}
        instagram={post.frontmatter.groupLinkInstagram}
        email={post.frontmatter.groupEmail}
        phone={post.frontmatter.groupPhone}
      />
    </>
  );
};

GroupTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export const pageQuery = graphql`
  query GroupPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        groupImageHeader {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        title
        groupTypes
        groupMotto
        groupDescription
        groupLogo {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              width: 1024
              height: 1024
              layout: FULL_WIDTH
            )
          }
        }
        groupLinkFacebook
        groupLinkInstagram
        groupEmail
        groupPhone
      }
    }
  }
`;

export default GroupTemplate;
