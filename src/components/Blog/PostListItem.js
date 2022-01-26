import * as React from "react"
import { Link } from "gatsby"
import { slug } from "../../utils/helpers"

const PostListItem = ({ post }) => {
  const link = `/istorijos/${slug(post.Title)}`

  return (
    <h2>
      <Link to={link}>{post.Title}</Link>
    </h2>
  )
}

export default PostListItem
