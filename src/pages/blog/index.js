import * as React from "react";
import { graphql } from "gatsby";

import Seo from "../../components/global/Seo";
import HeaderPage from "../../components/global/HeaderPage";
import Content from "../../components/blog/content";

// markup
const BlogPage = ({ data }) => {
  const { frontmatter } = data.static;
  const posts = data.posts.edges;

  return (
    <>
      <Seo title={frontmatter.blogTitle} />
      <HeaderPage
        image={frontmatter.blogImageHeader.childImageSharp.gatsbyImageData}
        title={frontmatter.blogTitle}
        description={frontmatter.blogSubHeader}
      />
      {posts.length > 0 && (
        <Content data={frontmatter.blogDescription} posts={posts} />
      )}
    </>
  );
};

export const pageQuery = graphql`
  query {
    static: markdownRemark(frontmatter: { blogTitle: { eq: "Blog" } }) {
      frontmatter {
        blogTitle
        blogImageHeader {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        blogSubHeader
        blogDescription
      }
    }
    posts: allMarkdownRemark(
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

export default BlogPage;
