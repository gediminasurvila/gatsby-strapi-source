import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout";
import Seo from "../components/seo";
import PostListItem from "../components/Blog/PostListItem.js";

const BlogPage = props => {

  const posts = props.data.allStrapiPost.nodes;
  
  return (
  <Layout>
    <Seo title="Blog" />
    <h1 className="text-4xl mb-4">Istorijos</h1>
    { posts.map( post => <PostListItem key={post.id} post={post}/>)}
  </Layout>
);

}

export const query = graphql`
  query {
    allStrapiPost(sort: { fields: published_at, order: DESC }) {
      nodes {
        id
        Title
        published_at
      }
    }
  }
`

export default BlogPage;
