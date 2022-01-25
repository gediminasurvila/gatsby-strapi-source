import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPost = props => {
  const post = props.data.allStrapiPost.nodes[0];
  // const image = getImage(post.remoteImage);
  return (
    <Layout>
      <Seo title={post.Title} />
      <h1>{post.Title}</h1>
      {/* <GatsbyImage image={image} alt="" /> */}
    </Layout>
  )
}

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
      }
    }
  }
`;

export default BlogPost;
