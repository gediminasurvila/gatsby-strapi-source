import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import slugify from "slugify"

const PostListItem = ({ post }) => {
  const slug = slugify(post.Title, {
    replacement: "-", // replace spaces with replacement character, defaults to `-`
    lower: true, // convert to lower case, defaults to `false`
    strict: false, // strip special characters except replacement, defaults to `false`
    trim: true, // trim leading and trailing replacement chars, defaults to `true`
  })

  const link = `/istorijos/${slug}`

  return (
    <h2>
      <Link to={link}>{post.Title}</Link>
    </h2>
  )
}

PostListItem.propTypes = {
  id: PropTypes.string,
  Title: PropTypes.string,
  published_at: PropTypes.string,
}

export default PostListItem
