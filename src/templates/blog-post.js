import * as React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image"
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPost = props => {
  const post = props.data.allStrapiPost.nodes[0];

  return (
    <Layout>
      <Seo title={post.Title} />
      <h1>{post.Title}</h1>
      <Img fluid={post?.remoteImage?.childImageSharp.fluid} />
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    allStrapiPost(filter: { id: { eq: $id } }) {
      nodes {
        Title
        id
        categories {
          Name
          id
        }
        Body
        published_at
        updated_at
        created_at
        remoteImage {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default BlogPost;
