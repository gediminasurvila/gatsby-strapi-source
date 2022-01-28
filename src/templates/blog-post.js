import * as React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPost = ({ data }) => {
  const post = data.strapiPost;
  return (
    <Layout>
      <Seo title={post.Title} />
      <h1 className="text-4xl mb-4">{post.Title}</h1>
      <Img fluid={post?.CoverImage?.localFile?.childImageSharp.fluid} />
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    strapiPost(id: { eq: $id }) {
      id
      CoverImage {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      Body
      Title
      published_at
      categories {
        Name
        id
      }
    }
  }
`;

export default BlogPost;
