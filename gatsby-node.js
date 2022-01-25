const slugify = require('slugify');

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allStrapiPost {
        nodes {
          Title
          id
        }
      }
    }
  `)
  data.allStrapiPost.nodes.forEach(node => {
    const slug = slugify(node.Title, {
      replacement: '-',  // replace spaces with replacement character, defaults to `-`
      lower: true,      // convert to lower case, defaults to `false`
      strict: false,     // strip special characters except replacement, defaults to `false`
      trim: true         // trim leading and trailing replacement chars, defaults to `true`
    });
    actions.createPage({
      path: `istorijos/${slug}`,
      component: require.resolve(`./src/templates/blog-post.js`),
      context: { id: node.id },
    })
  })
}