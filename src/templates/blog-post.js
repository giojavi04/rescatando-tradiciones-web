import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Seo from "../components/global/Seo";
import BlogPost from "../components/global/BlogPost";

const BlogPostTemplate = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={
          post.frontmatter.featuredimage.childImageSharp.gatsbyImageData.images
            .fallback.src
        }
      />
      <BlogPost
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        image={post.frontmatter.featuredimage.childImageSharp.gatsbyImageData}
        content={post.html}
        tags={post.frontmatter.tags}
      />
    </>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        featuredimage {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        title
        description
        tags
      }
    }
  }
`;

export default BlogPostTemplate;
